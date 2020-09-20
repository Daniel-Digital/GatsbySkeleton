const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const slugify = require('slugify');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const makes = await graphql(`
    {
      allStrapiMake {
        nodes {
          id: strapiId
          name
        }
      }
    }
  `);

  const models = await graphql(`
    {
      allStrapiTruck {
        nodes {
          id: strapiId
          make {
            name
          }
        }
      }
    }
  `);

  makes.data.allStrapiMake.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-makes/${slugify(node.name)}`,
      component: path.resolve(`./src/templates/truck-make.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  models.data.allStrapiTruck.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-makes/${slugify(node.make.name)}/${node.id}`,
      component: path.resolve(`./src/templates/truck-model.tsx`),
      context: {
        id: node.id,
      },
    });
  });
};

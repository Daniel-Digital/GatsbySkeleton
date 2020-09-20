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
  const result = await graphql(`
    {
      allStrapiMake {
        nodes {
          id: strapiId
          name
        }
      }
    }
  `);

  result.data.allStrapiMake.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-makes/${slugify(node.name)}`,
      component: path.resolve(`./src/templates/truck-make.tsx`),
      context: {
        id: node.id,
      },
    });
  });
};

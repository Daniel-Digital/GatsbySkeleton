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

  const bodyTypes = await graphql(`
    {
      allStrapiBodyType {
        nodes {
          id: strapiId
          name
          image {
            publicURL
          }
        }
      }
    }
  `);

  const bodies = await graphql(`
    {
      allStrapiBody {
        nodes {
          id: strapiId
          model
        }
      }
    }
  `);

  const upfits = await graphql(`
    {
      allStrapiUpfit {
        nodes {
          id: strapiId
        }
      }
    }
  `);

  const accessories = await graphql(`
    {
      allStrapiAccessory {
        nodes {
          id: strapiId
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

  bodyTypes.data.allStrapiBodyType.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-bodies/${slugify(node.name)}`,
      component: path.resolve(`./src/templates/truck-body-type.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  bodies.data.allStrapiBody.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-bodies/${node.id}`,
      component: path.resolve(`./src/templates/truck-body.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  upfits.data.allStrapiUpfit.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-upfits/${node.id}`,
      component: path.resolve(`./src/templates/truck-upfit.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  accessories.data.allStrapiAccessory.nodes.forEach((node) => {
    actions.createPage({
      path: `truck-accessories/${node.id}`,
      component: path.resolve(`./src/templates/truck-accessory.tsx`),
      context: {
        id: node.id,
      },
    });
  });
};

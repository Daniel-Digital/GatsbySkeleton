const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:
          process.env.NODE_ENV === 'production'
            ? `https://strapi-backend-demo.herokuapp.com`
            : `https://strapi-backend-demo.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`truck`, `make`],
        //If using single types place them in this array.
        singleTypes: [`track-sale-online`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
  ],
};

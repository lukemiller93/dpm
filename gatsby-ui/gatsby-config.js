
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// require("ts-node").register({
//   compilerOptions: {
//     module: "commonjs",
//     target: "es2017",
//   },
// });
module.exports = {
  jsxRuntime: "automatic",

  siteMetadata: {
    siteUrl: "https://www.dauntlesspursuitmedia.com",
    title: "Dauntless Pursuit Media",
    author: "@lqm_19",
  },
  plugins: [
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "sd6anpfo",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Heli Sivunen   |   Front End Developer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
 resolve: `gatsby-plugin-google-fonts`,
 options: {
   fonts: [
     `Quicksand`,
     `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
   ],
   display: 'swap'
 }
},
    {
  resolve: `gatsby-plugin-prefetch-google-fonts`,
  options: {
    fonts: [
      {
        family: `Special Elite`
      },
      {
        family: `Roboto Mono`,
        variants: [`400`, `700`]
      },
      {
        family: `Roboto`,
        subsets: [`latin`]
      },
      {
        family: `Quicksand`
      }
    ],
  },
},
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

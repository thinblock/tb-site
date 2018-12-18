module.exports = {
  siteMetadata: {
    title: 'Thinblock',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'thinblock',
        short_name: 'Thinblock',
        start_url: '/',
        background_color: '#0a49ac',
        theme_color: '#0a49ac',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito Sans\:300,400,500,700`],
      },
    }
    'gatsby-plugin-offline'
  ],
}

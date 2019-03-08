module.exports = {
  siteMetadata: {
    title: "Jason Luu - Javascript Developer based in London",
    author: "Jason Luu",
    description: "Portfolio Website by Jason Luu, Javascript Developer based in London."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/linkedin_image_icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

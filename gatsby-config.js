module.exports = {
  siteMetadata: {
      title: `Raajesh Mani`,
      author: {
        name: 'Raajesh Mani',
      },
      pathPrefix: '/',
      siteUrl: `https://raajeshmani.com`,
      logo: 'https://raajeshmani.com/logo.png',
      description: 'Software engineer and open source enthusiast!',
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./static/logo.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "assets",
      "path": "./static/"
    },
    __key: "assets"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
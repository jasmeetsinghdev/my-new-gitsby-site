module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "ISG website in Gatsby",
    description: "Future Of Technology Work",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
   
    
  ],
}






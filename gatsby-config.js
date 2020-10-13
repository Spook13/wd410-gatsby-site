module.exports = {
  plugins: [

    // -- gatsby-source-filesystem --
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: '${__dirname}/src/pages'
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: '${__dirname}/src/posts'
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: '${__dirname}/src/images'
      },
    },

    // -- gatsby-plugin-mdx --
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extenstions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      }
    },

    // -- gatsby-plugin-google-fonts --
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto mono',
          'muli\:400,400i,700,700i',
        ],
        display: "swap",
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Highly Rated Entertainment in CO | Axe Throwing in CO`,
    author: `Kyle Mathews`,
    description: `Highly rated entertainment in Colorado | Creating perfect Bachelor Party Ideas | Axe throwing in Colorado | Offering Lumberjack Themed games and events | Perfect team building activities | Our certfified coaches will teach you hwo to throw an axe in a safe and controlled environment.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    keywords: `Bachelor Party Ideas, Top Rated Axe Throwing Colorado How to increase brewery revennue in Colorado Interactive corporate team events Lumberjack themed events`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    // Source all blog posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/img`,
        name: `image_assets`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./static/data/characters.json`,
        typeName: `Json`
      },
    },
    `gatsby-transformer-json-key-value-to-array`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./static/data/characters.json`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:400,500,600,700`,
          `roboto\:400,500,700` // you can also specify font weights and styles
        ]
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WebriQ Blog`,
        short_name: `WebriQ`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#f7f7f7`,
        display: `minimal-ui`,
        icon: `assets/img/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

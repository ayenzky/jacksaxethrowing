module.exports = {
  siteMetadata: {
    title: `Highly Rated Entertainment in CO | Axe Throwing in CO`,
    author: `Bryan Rossmanith`,
    description: `Axe Throwing makes the perfect Bachelor Party Idea, Axe Throwing fits the many Lumberjack themed events held in Colorado, Interactive corporate team events, Birthday Parties, and more.`,
    siteUrl: `https://jacksaxethrowing.com/`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `
        
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark}}) => {
            return allMarkdownRemark.edges.map(a => {
              return Object.assign({}, a.node, {
                title: a.node.frontmatter.title,
                description: a.node.excerpt,
                date: a.node.frontmatter.date,
                url: site.siteMetadata.siteUrl +"/"+ a.node.fields.slug,
                guid: site.siteMetadata.siteUrl +"/"+ a.node.fields.slug,
                custom_elements: [{ "content:encoded": a.node.html }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    excerpt
                    frontmatter {
                      title
                      date
                    }
                    html
                    
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Highly Rated Entertainment in CO | Axe Throwing in CO",
        },
      ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Highly Rated Entertainment in CO | Axe Throwing in CO`,
        short_name: `Jack's Axe`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#f7f7f7`,
        display: `minimal-ui`,
        icon: `static/img/logo.png`,
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

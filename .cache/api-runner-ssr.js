var plugins = [{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["poppins:400,500,600,700","roboto:400,500,700"]},
    },{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n            allSitePage {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n          }\n        "},
    },{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n        {\n          site {\n            siteMetadata {\n              title\n              siteUrl\n              site_url: siteUrl\n            }\n          }\n        }\n      ","feeds":[{"query":"\n            {\n              allMarkdownRemark {\n                edges {\n                  node {\n                    id\n                    fields {\n                      slug\n                    }\n                    excerpt\n                    frontmatter {\n                      title\n                      date\n                    }\n                    html\n                    \n                  }\n                }\n              }\n            }\n          ","output":"/rss.xml","title":"Highly Rated Entertainment in CO | Axe Throwing in CO"}]},
    },{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Highly Rated Entertainment in CO | Axe Throwing in CO","short_name":"Jack's Axe","start_url":"/","background_color":"#663399","theme_color":"#f7f7f7","display":"minimal-ui","icon":"static/img/logo.png"},
    },{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/anlinerleona/code/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

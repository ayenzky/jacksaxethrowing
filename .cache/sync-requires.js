const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/about-us.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/index.js")))
}


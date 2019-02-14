const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/about-us.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/index.js"))),
  "component---src-pages-league-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/league.js"))),
  "component---src-pages-our-story-js": hot(preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/our-story.js")))
}


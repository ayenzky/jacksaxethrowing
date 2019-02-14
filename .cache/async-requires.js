// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-us-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/about-us.js" /* webpackChunkName: "component---src-pages-about-us-js" */),
  "component---src-pages-blog-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-league-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/league.js" /* webpackChunkName: "component---src-pages-league-js" */),
  "component---src-pages-our-story-js": () => import("/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/src/pages/our-story.js" /* webpackChunkName: "component---src-pages-our-story-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/allen/Projects/htdocs/webriqpage-jacksaxethrowing/.cache/data.json")


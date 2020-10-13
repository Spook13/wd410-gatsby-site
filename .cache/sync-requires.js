const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/alyssaclark/Desktop/2020C_WD410/week4/wd410-gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/alyssaclark/Desktop/2020C_WD410/week4/wd410-gatsby-site/src/pages/about-css-modules.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/alyssaclark/Desktop/2020C_WD410/week4/wd410-gatsby-site/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/alyssaclark/Desktop/2020C_WD410/week4/wd410-gatsby-site/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/alyssaclark/Desktop/2020C_WD410/week4/wd410-gatsby-site/src/pages/index.js")))
}


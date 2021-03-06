module.exports = {
  siteMetadata: {
    title: `Wien`,
    description: `.`,
    author: `@Wien`,
    avatar:
      "https://tvax1.sinaimg.cn/crop.0.10.492.492.180/006aapNWly8fgdzcgxilmj30do0e8dgq.jpg?KID=imgbed,tva&Expires=1586453691&ssig=ETKA%2B3DdY7",
    social: [
      {
        name: `Weibo`,
        url: `https://weibo.com/u/5647042828`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/Wuwei9536`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wien`,
        short_name: `Wien`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          importWorkboxFrom: `local`,
          // globDirectory: "/",
          globPatterns: ["**/*"],
          // modifyURLPrefix: {
          //   // If `pathPrefix` is configured by user, we should replace
          //   // the default prefix with `pathPrefix`.
          //   "/": `/`,
          // },
          cacheId: `gatsby-plugin-offline`,
          // Don't cache-bust JS or CSS files, and anything in the static directory,
          // since these files have unique URLs and their contents will never change
          dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
          runtimeCaching: [
            {
              // Use cacheFirst since these don't need to be revalidated (same RegExp
              // and same reason as above)
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              // page-data.json files are not content hashed
              urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
              handler: `NetworkFirst`,
            },
            {
              // Add runtime caching of various other page resources
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              // Google Fonts CSS (doesn't end in .css so we need to specify it)
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
          skipWaiting: true,
          clientsClaim: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}

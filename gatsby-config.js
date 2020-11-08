require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    siteTitle: `Venu's Blog`,
    siteTitleAlt: `Venu's Blog`,
    siteHeadline: `Venu's Blog`,
    siteUrl: `https://vchrombie.github.io/`,
    siteDescription: `Venu's Blog.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@vchrombie`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        basePath: `/`,
        blogPath: `/archive`,
        tagsPath: `/tags`,
        showLineNumbers: false,
        feedTitle: `Venu's Blog`,
        navigation: [
          {
            title: `Archive`,
            slug: `/archive`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/vchrombie`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/vchrombie`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121045448-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Venu's Blog`,
        short_name: `Venu's Blog`,
        description: `Venu's Blog.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2EC8D0`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}

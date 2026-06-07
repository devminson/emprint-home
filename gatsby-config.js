const siteUrl = process.env.GATSBY_SITE_URL || 'https://devminson.github.io/emprint-home'

const crawlerPolicies = [
  { userAgent: '*', allow: '/' },
  { userAgent: 'GPTBot', allow: '/' },
  { userAgent: 'ChatGPT-User', allow: '/' },
  { userAgent: 'Claude-Web', allow: '/' },
  { userAgent: 'PerplexityBot', allow: '/' }
]

module.exports = {
  siteMetadata: {
    title: 'Emprint',
    description: 'Local-first, Git-native workspace runtime for creators, developers, and AI-native workflows.',
    siteUrl
  },
  pathPrefix: '/emprint-home',
  trailingSlash: 'always',
  graphqlTypegen: false,
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: crawlerPolicies
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/404/'],
        serialize: ({ path }) => ({
          url: path,
          lastmod: new Date().toISOString().slice(0, 10)
        })
      }
    }
  ]
}

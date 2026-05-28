import siteData from '../data/site.js'

/** Must match `pathPrefix` in gatsby-config.js (used only when siteUrl has no path). */
export const PATH_PREFIX = '/emprint-home'

function siteBaseUrl() {
  return siteData.siteUrl.replace(/\/+$/, '')
}

/**
 * Absolute URL for canonical links, JSON-LD, and llms.txt.
 * `GATSBY_SITE_URL` already includes the GitHub Pages project path when applicable.
 */
export function absoluteUrl(pathname = '/') {
  const base = siteBaseUrl()
  const raw = pathname.startsWith('/') ? pathname : `/${pathname}`
  const isFile = /\.[a-z0-9]+$/i.test(raw)

  if (raw === '/' || raw === '') {
    return `${base}/`
  }

  if (isFile) {
    return `${base}${raw}`
  }

  const normalized = raw.endsWith('/') ? raw : `${raw}/`
  return `${base}${normalized}`
}

/** Prefix in-app paths for GitHub Pages when siteUrl omits the project segment. */
export function withSitePath(pathname = '/') {
  const base = siteBaseUrl()
  const needsPrefix = !base.endsWith(PATH_PREFIX) && PATH_PREFIX !== '/'
  if (!needsPrefix) return absoluteUrl(pathname)

  let path = pathname.startsWith('/') ? pathname : `/${pathname}`
  const isFile = /\.[a-z0-9]+$/i.test(path)
  if (!isFile && !path.endsWith('/')) path = `${path}/`
  return `${base}${PATH_PREFIX}${path === '/' ? '/' : path}`
}

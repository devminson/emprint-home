/** Locale-aware paths (no Gatsby imports — safe for gatsby-node / llms-build). */

import { PATH_PREFIX } from './site-url.js'

export function normalizeSitePath(pathname) {
  let path = pathname || '/'
  if (PATH_PREFIX && path !== PATH_PREFIX && path.startsWith(`${PATH_PREFIX}/`)) {
    path = path.slice(PATH_PREFIX.length) || '/'
  } else if (path === PATH_PREFIX) {
    path = '/'
  }
  if (!path.startsWith('/')) path = `/${path}`
  return path
}

export function localeFromPath(pathname) {
  const path = normalizeSitePath(pathname)
  if (path === '/ko' || path.startsWith('/ko/')) return 'ko'
  return 'en'
}

export function stripLocaleFromPath(pathname) {
  const path = normalizeSitePath(pathname)
  if (path === '/ko') return '/'
  if (path.startsWith('/ko/')) {
    const rest = path.slice(3)
    return rest.startsWith('/') ? rest : `/${rest}`
  }
  return path
}

/** Map a locale-neutral path (`/`, `/document/`) to a locale URL. */
export function localePath(locale, pathname = '/') {
  const bare = stripLocaleFromPath(pathname)
  const withSlash = bare === '/' ? '/' : bare.endsWith('/') ? bare : `${bare}/`

  if (locale === 'ko') {
    return withSlash === '/' ? '/ko/' : `/ko${withSlash}`
  }

  return withSlash
}

export function alternateLocalePaths(pathname) {
  const bare = stripLocaleFromPath(normalizeSitePath(pathname))
  return {
    en: localePath('en', bare),
    ko: localePath('ko', bare)
  }
}

export function isDocumentPath(pathname) {
  const bare = stripLocaleFromPath(normalizeSitePath(pathname))
  return bare === '/document' || bare.startsWith('/document/')
}

export function isHomePath(pathname) {
  const bare = stripLocaleFromPath(normalizeSitePath(pathname))
  return bare === '/'
}

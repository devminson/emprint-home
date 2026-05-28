import { withPrefix } from 'gatsby'
import { localePath } from './locale-path'

/** Resolves in-app paths (and #hash) for GitHub Pages `pathPrefix` and locale. */
export function hrefWithPrefix(raw, locale = 'en') {
  if (!raw || raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw
  }

  const hashIndex = raw.indexOf('#')
  const pathPart = hashIndex >= 0 ? raw.slice(0, hashIndex) : raw
  const hash = hashIndex >= 0 ? raw.slice(hashIndex + 1) : ''
  const path =
    pathPart === '' || pathPart === '/'
      ? '/'
      : pathPart.endsWith('/')
        ? pathPart
        : `${pathPart}/`
  const localized = localePath(locale, path)
  const prefixed = withPrefix(localized)
  return hash ? `${prefixed}#${hash}` : prefixed
}

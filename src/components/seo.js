import * as React from 'react'
import { withPrefix } from 'gatsby'
import { getCanonicalUrls } from '../content/ai-facts.js'
import { absoluteUrl } from '../utils/site-url.js'
import { alternateLocalePaths } from '../utils/locale-path.js'
import siteData from '../data/site.js'

export default function Seo({
  title,
  description,
  pathname = '/',
  lang = 'en',
  noindex = false
}) {
  const pageTitle = title ? `${title} | Emprint` : 'Emprint'
  const pageDescription =
    description ||
    'Emprint is a calm personal archive and publishing platform: local files, Git-shaped history, and anthologies instead of feeds.'
  const imageUrl = absoluteUrl('assets/images/og-card.png')
  const canonicalUrl = absoluteUrl(pathname)
  const alternates = alternateLocalePaths(pathname)
  const canonicalUrls = getCanonicalUrls()

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {noindex ? <meta name="robots" content="noindex" /> : null}
      <meta name="theme-color" content="#cd7b00" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Emprint" />
      <meta property="og:locale" content={lang === 'ko' ? 'ko_KR' : 'en_US'} />
      <meta
        property="og:locale:alternate"
        content={lang === 'ko' ? 'en_US' : 'ko_KR'}
      />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="icon" href={withPrefix('/favicon.ico')} />
      <link rel="alternate" hrefLang="en" href={absoluteUrl(alternates.en)} />
      <link rel="alternate" hrefLang="ko" href={absoluteUrl(alternates.ko)} />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl(alternates.en)} />
      <link rel="alternate" type="text/plain" title="LLMs" href={canonicalUrls.llms} />
      <link
        rel="alternate"
        type="text/markdown"
        title="Document (English)"
        href={canonicalUrls.documentMdEn}
      />
      <link
        rel="alternate"
        type="text/markdown"
        title="Document (Korean)"
        href={canonicalUrls.documentMdKo}
      />
      {!siteData.isPlaceholderSiteUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
    </>
  )
}

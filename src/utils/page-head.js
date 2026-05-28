import * as React from 'react'
import Seo from '../components/seo'
import StructuredData from '../components/structured-data'
import { getMessages } from '../content/copy'
import { localePath } from '../utils/locale-path'

export function HomeHead({ locale }) {
  const m = getMessages(locale)
  const seo = m.seo.home
  return (
    <>
      <Seo
        title={seo.pageTitle}
        description={seo.description}
        pathname={localePath(locale, '/')}
        lang={locale}
      />
      <StructuredData page="home" locale={locale} />
    </>
  )
}

export function DocumentHead({ locale }) {
  const m = getMessages(locale)
  const seo = m.seo.document
  return (
    <>
      <Seo
        title={seo.pageTitle}
        description={seo.description}
        pathname={localePath(locale, '/document/')}
        lang={locale}
      />
      <StructuredData page="document" locale={locale} />
    </>
  )
}

export function NotFoundHead({ locale }) {
  const m = getMessages(locale)
  const seo = m.seo.notFound
  return (
    <Seo
      title={seo.pageTitle}
      description={seo.description}
      pathname={localePath(locale, '/404/')}
      lang={locale}
      noindex
    />
  )
}

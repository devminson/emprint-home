import * as React from 'react'
import { LocaleScope } from '../context/locale-context'
import NotFoundPageView from '../views/not-found-page'
import { NotFoundHead } from '../utils/page-head'
import { localeFromPath } from '../utils/locale-path'

export default function NotFoundPage(props) {
  const locale = localeFromPath(props.location?.pathname)

  return (
    <LocaleScope locale={locale}>
      <NotFoundPageView {...props} />
    </LocaleScope>
  )
}

export function Head({ location }) {
  const locale = localeFromPath(location?.pathname)
  return <NotFoundHead locale={locale} />
}

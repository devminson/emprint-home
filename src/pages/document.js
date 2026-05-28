import * as React from 'react'
import { LocaleScope } from '../context/locale-context'
import DocumentPageView from '../views/document-page'
import { DocumentHead } from '../utils/page-head'

export default function DocumentPage(props) {
  return (
    <LocaleScope locale="en">
      <DocumentPageView {...props} />
    </LocaleScope>
  )
}

export function Head() {
  return <DocumentHead locale="en" />
}

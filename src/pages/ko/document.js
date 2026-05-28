import * as React from 'react'
import { LocaleScope } from '../../context/locale-context'
import DocumentPageView from '../../views/document-page'
import { DocumentHead } from '../../utils/page-head'

export default function KoDocumentPage(props) {
  return (
    <LocaleScope locale="ko">
      <DocumentPageView {...props} />
    </LocaleScope>
  )
}

export function Head() {
  return <DocumentHead locale="ko" />
}

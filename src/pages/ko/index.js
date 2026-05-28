import * as React from 'react'
import { LocaleScope } from '../../context/locale-context'
import HomePageView from '../../views/home-page'
import { HomeHead } from '../../utils/page-head'

export default function KoIndexPage(props) {
  return (
    <LocaleScope locale="ko">
      <HomePageView {...props} />
    </LocaleScope>
  )
}

export function Head() {
  return <HomeHead locale="ko" />
}

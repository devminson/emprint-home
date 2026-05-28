import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { useLocale } from '../context/locale-context'
import { localePath } from '../utils/locale-path'

export default function NotFoundPageView({ location }) {
  const { locale, messages } = useLocale()
  const n = messages.notFound

  return (
    <Layout currentPath={location.pathname}>
      <section className="section-block section-block--narrow">
        <div className="panel not-found-card">
          <span className="section-heading__eyebrow">{n.eyebrow}</span>
          <h1>{n.title}</h1>
          <p>{n.body}</p>
          <div className="button-row">
            <Link className="button" to={localePath(locale, '/')}>
              {n.mainCta}
            </Link>
            <Link className="button button--secondary" to={localePath(locale, '/document/')}>
              {n.documentCta}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

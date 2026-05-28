import * as React from 'react'
import { Link, withPrefix } from 'gatsby'
import '@fontsource/jetbrains-mono'
import '../styles/global.css'
import siteData from '../data/site'
import { useLocale } from '../context/locale-context'
import {
  alternateLocalePaths,
  localePath,
  normalizeSitePath
} from '../utils/locale-path'

function isActivePath(currentPath, localizedTarget) {
  const current = normalizeSitePath(currentPath)
  const target = normalizeSitePath(localizedTarget)
  if (target === '/' || target === '/ko') return current === target
  return current === target || current.startsWith(`${target}/`)
}

function LocaleSwitcher({ currentPath }) {
  const { locale, messages } = useLocale()
  const c = messages.common
  const alternates = alternateLocalePaths(currentPath)

  return (
    <div className="locale-toggle" role="group" aria-label={c.localeSwitcherLabel}>
      <Link
        className={`locale-toggle__btn ${locale === 'en' ? 'is-active' : ''}`}
        to={alternates.en}
        hrefLang="en"
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        {c.localeEn}
      </Link>
      <Link
        className={`locale-toggle__btn ${locale === 'ko' ? 'is-active' : ''}`}
        to={alternates.ko}
        hrefLang="ko"
        aria-current={locale === 'ko' ? 'page' : undefined}
      >
        {c.localeKo}
      </Link>
    </div>
  )
}

export default function Layout({ children, currentPath = '/' }) {
  const logoSrc = withPrefix('/assets/images/emprint-simple-logo.svg')
  const { locale, messages } = useLocale()
  const c = messages.common

  const navItems = [
    { label: c.navMain, to: localePath(locale, '/') },
    { label: c.navDocument, to: localePath(locale, '/document/') }
  ]

  return (
    <div className="app-shell" lang={locale}>
      <a className="skip-link" href="#content">
        {c.skipToContent}
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-lockup" to={localePath(locale, '/')}>
            <img className="brand-lockup__logo" src={logoSrc} alt="Emprint" />
            <div>
              <div className="brand-lockup__title">Emprint</div>
              <div className="brand-lockup__subtitle">{c.brandSubtitle}</div>
            </div>
          </Link>
          <div className="site-header__tools">
            <LocaleSwitcher currentPath={currentPath} />
            <nav className="site-nav" aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  className={`nav-link ${isActivePath(currentPath, item.to) ? 'is-active' : ''}`}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
              <a
                className="nav-link nav-link--external"
                href={siteData.githubRepoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {c.navGithub}
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main id="content" className="page-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__title">{c.footerTitle}</div>
            <p className="site-footer__copy">{c.footerCopy}</p>
          </div>
          <div className="site-footer__links">
            <a
              className="button button--secondary site-footer__support-btn"
              href={siteData.kofiUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.footerSupport}
            </a>
            <Link to={localePath(locale, '/document/')}>{c.footerDocument}</Link>
            <a href={siteData.githubRepoUrl} target="_blank" rel="noreferrer">
              {c.footerRepo}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

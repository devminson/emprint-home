import * as React from 'react'
import { getMessages, isValidLocale } from '../content/copy'

const LocaleContext = React.createContext(null)

/** Provides locale + messages for a single page (URL is the source of truth). */
export function LocaleScope({ locale, children }) {
  const code = isValidLocale(locale) ? locale : 'en'
  const messages = React.useMemo(() => getMessages(code), [code])
  const value = React.useMemo(() => ({ locale: code, messages }), [code, messages])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleScope')
  }
  return ctx
}

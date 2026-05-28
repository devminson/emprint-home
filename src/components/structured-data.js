import * as React from 'react'
import siteData from '../data/site'
import { getAiFacts, getCanonicalUrls } from '../content/ai-facts'
import { absoluteUrl } from '../utils/site-url'
import { documentSectionsEn, documentSectionsKo } from '../content/document-workflow.js'

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function organizationSchema() {
  const urls = getCanonicalUrls()
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Emprint',
    url: urls.homeEn,
    sameAs: [siteData.githubRepoUrl, siteData.releaseRepoUrl, siteData.kofiUrl]
  }
}

function websiteSchema() {
  const urls = getCanonicalUrls()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Emprint',
    url: urls.homeEn,
    description: `Official Emprint site — version ${siteData.currentVersion}`,
    inLanguage: ['en', 'ko']
  }
}

function softwareApplicationSchema(locale) {
  const facts = getAiFacts(locale)
  const urls = getCanonicalUrls()
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Emprint',
    applicationCategory: 'DesktopApplication',
    operatingSystem: 'macOS, Windows',
    softwareVersion: facts.version,
    description: facts.definition,
    downloadUrl: siteData.releaseRepoUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    author: {
      '@type': 'Organization',
      name: 'Emprint',
      url: urls.homeEn
    }
  }
}

function faqPageSchema(locale) {
  const facts = getAiFacts(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: facts.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

function collectHowToSteps(sections) {
  const steps = []
  for (const section of sections) {
    if (!section.steps?.length) continue
    for (const step of section.steps) {
      steps.push({
        '@type': 'HowToStep',
        name: step.title,
        text: step.body,
        image: absoluteUrl(`assets/images/workflow/${step.image}`)
      })
    }
  }
  return steps
}

function howToSchema(locale) {
  const facts = getAiFacts(locale)
  const sections = locale === 'ko' ? documentSectionsKo : documentSectionsEn

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: locale === 'ko' ? 'Emprint 설치 및 사용 방법' : 'How to install and use Emprint',
    description: facts.workflowOrder,
    image: absoluteUrl('assets/images/workflow/wizard-05-hub.png'),
    step: collectHowToSteps(sections)
  }
}

export function HomeStructuredData({ locale = 'en' }) {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={softwareApplicationSchema(locale)} />
      <JsonLd data={faqPageSchema(locale)} />
    </>
  )
}

export function DocumentStructuredData({ locale = 'en' }) {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={howToSchema(locale)} />
    </>
  )
}

export default function StructuredData({ page, locale = 'en' }) {
  if (page === 'document') return <DocumentStructuredData locale={locale} />
  return <HomeStructuredData locale={locale} />
}

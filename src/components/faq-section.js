import * as React from 'react'

export default function FaqSection({ items, labels }) {
  if (!items?.length) return null

  return (
    <section className="ai-faq" id="faq" aria-labelledby="faq-heading">
      <div className="ai-faq__header">
        <span className="section-heading__eyebrow">{labels.eyebrow}</span>
        <h2 id="faq-heading" className="editorial-section__title editorial-section__title--tight">
          {labels.title}
        </h2>
        <p className="editorial-section__intro">{labels.intro}</p>
      </div>
      <div className="ai-faq__list">
        {items.map((item) => (
          <details key={item.id} className="ai-faq__item panel" id={item.id}>
            <summary className="ai-faq__question">{item.question}</summary>
            <div className="ai-faq__answer">
              {item.answer.split('\n').map((line, index) => (
                <p key={`${item.id}-${index}`}>{line}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

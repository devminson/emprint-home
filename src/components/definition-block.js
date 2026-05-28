import * as React from 'react'

export default function DefinitionBlock({ facts, labels }) {
  return (
    <section className="ai-definition panel" id="about" aria-labelledby="about-heading">
      <span className="section-heading__eyebrow">{labels.eyebrow}</span>
      <h2 id="about-heading" className="editorial-section__title editorial-section__title--tight">
        {labels.title}
      </h2>
      <p className="ai-definition__lede">{facts.definition}</p>
      <dl className="ai-definition__facts">
        <div className="ai-definition__row">
          <dt>{labels.version}</dt>
          <dd>{facts.version}</dd>
        </div>
        <div className="ai-definition__row">
          <dt>{labels.platforms}</dt>
          <dd>{facts.type}</dd>
        </div>
        <div className="ai-definition__row">
          <dt>{labels.workflow}</dt>
          <dd>{facts.workflowOrder}</dd>
        </div>
        <div className="ai-definition__row">
          <dt>{labels.anthologies}</dt>
          <dd>{facts.anthologies}</dd>
        </div>
      </dl>
    </section>
  )
}

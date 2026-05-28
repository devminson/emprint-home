const path = require('path')

exports.onPreBuild = async () => {
  const { buildLlmsArtifacts } = await import('./src/content/llms-build.js')
  await buildLlmsArtifacts(path.join(__dirname, 'static'))

  const { generateOgCard } = await import('./scripts/generate-og-card.mjs')
  await generateOgCard(path.join(__dirname, 'static/assets/images/og-card.png'))
}

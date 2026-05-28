import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

function buildOgSvg() {
  return `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#0f0c0a"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="48" y="48" width="1104" height="534" rx="24" fill="none" stroke="#cd7b00" stroke-opacity="0.35" stroke-width="2"/>
  <text x="96" y="210" fill="#cd7b00" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="28" letter-spacing="6">&gt; EMPRINT</text>
  <text x="96" y="300" fill="#f5ebe0" font-family="Georgia, 'Times New Roman', serif" font-size="54" font-weight="600">A place to stack your traces</text>
  <text x="96" y="380" fill="#f5ebe0" fill-opacity="0.78" font-family="Georgia, 'Times New Roman', serif" font-size="30">Local-first archive · Git history · Anthologies</text>
  <text x="96" y="520" fill="#cd7b00" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="22">devminson.github.io/emprint-home</text>
</svg>`
}

export async function generateOgCard(outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  await sharp(Buffer.from(buildOgSvg())).png().toFile(outputPath)
}

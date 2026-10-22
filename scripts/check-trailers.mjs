// Chequea uno por uno los tráilers de src/data/projects.ts antes de publicar:
// si cada video existe, es público y permite embeberse en otros sitios.
// Uso: npm run check:trailers   (termina con error si alguno falla)
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/data/projects.ts', import.meta.url), 'utf8')

// Cada línea de proyecto: { slug: '...', title: '...', ... trailers: [{ url: yt('ID') ... }] }
const trailers = []
for (const line of source.split('\n')) {
  const title = line.match(/title: '([^']+)'/)?.[1]
  for (const [, id] of line.matchAll(/yt\('([^']+)'\)/g)) trailers.push({ title, id })
}

// oEmbed de YouTube: 200 = público y embebible; 401/403 = privado o no embebible; 404 = no existe
const STATUS = {
  200: ['✓', 'ok'],
  401: ['✗', 'privado o no permite embeberse'],
  403: ['✗', 'privado o no permite embeberse'],
  404: ['✗', 'no existe (borrado o URL mal escrita)'],
}

let failed = 0
for (const { title, id } of trailers) {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
  let code
  try {
    code = (await fetch(url)).status
  } catch {
    code = 'sin conexión'
  }
  const [mark, text] = STATUS[code] ?? ['?', `respuesta inesperada (${code})`]
  if (mark !== '✓') failed++
  console.log(`${mark} ${title} — ${id}: ${text}`)
}

console.log(`\n${trailers.length - failed}/${trailers.length} tráilers ok`)
process.exit(failed ? 1 : 0)

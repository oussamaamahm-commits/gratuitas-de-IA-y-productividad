import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { tools } from '../src/data/tools.js'
import { categories } from '../src/data/categories.js'
import { resources } from '../src/data/resources.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-server', 'entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
// Unrendered shell used as the SPA fallback for unknown URLs (see vercel.json).
fs.writeFileSync(path.join(distDir, 'spa.html'), template)

const routes = [
  '/',
  '/tools',
  '/categories',
  '/blog',
  '/about',
  '/contact',
  '/changelog',
  '/legal/aviso-legal',
  '/legal/privacidad',
  '/legal/cookies',
  '/legal/terminos',
  ...tools.map((t) => `/tools/${t.slug}`),
  ...categories.map((c) => `/categories/${c.slug}`),
  ...resources.map((r) => `/blog/${r.slug}`),
]

const HEAD_TAG = /^(<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)/
const MANAGED_META =
  /<meta\s+(?:name|property)="(?:description|og:type|og:title|og:description|og:url|og:image|twitter:title|twitter:description|twitter:image)"[^>]*>\s*/g

function splitHead(html) {
  let rest = html
  let head = ''
  let match
  while ((match = HEAD_TAG.exec(rest))) {
    head += match[0]
    rest = rest.slice(match[0].length)
  }
  return { head, body: rest }
}

const baseTemplate = template
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(MANAGED_META, '')
  .replace(/<link\s+rel="canonical"[^>]*>\s*/, '')

for (const route of routes) {
  const { head, body } = splitHead(render(route))
  const page = baseTemplate
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const file = route === '/' ? 'index.html' : path.join(route.slice(1), 'index.html')
  const target = path.join(distDir, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, page)
}

console.log(`Prerendered ${routes.length} routes`)

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
  '/editorial',
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

const SITE_URL = 'https://quickmotionai.com'
const today = new Date().toISOString().slice(0, 10)
const articleDates = Object.fromEntries(resources.map((r) => [`/blog/${r.slug}`, r.date]))

function meta(route) {
  if (route === '/') return ['weekly', '1.0']
  if (route === '/tools' || route === '/blog') return ['weekly', '0.9']
  if (route.startsWith('/tools/')) return ['monthly', '0.8']
  if (route.startsWith('/blog/')) return ['monthly', '0.7']
  if (route.startsWith('/categories')) return ['weekly', '0.6']
  if (route.startsWith('/legal/')) return ['yearly', '0.3']
  return ['monthly', '0.4']
}

const urls = routes
  .map((route) => {
    const [freq, priority] = meta(route)
    const lastmod = articleDates[route] || today
    return `  <url><loc>${SITE_URL}${route === '/' ? '/' : route}</loc><lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`
  })
  .join('\n')

fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
)

console.log(`Prerendered ${routes.length} routes and generated sitemap.xml`)

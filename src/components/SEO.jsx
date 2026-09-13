// React 19 hoists <title>, <meta>, and <link> tags rendered anywhere in the
// tree into <head> automatically, so no head-management library is needed.

const SITE_URL = 'https://promptlab.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.svg`

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website' }) {
  const fullTitle = title ? `${title} — PromptLab` : 'PromptLab — Herramientas de IA y Productividad Gratis'
  const url = `${SITE_URL}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}

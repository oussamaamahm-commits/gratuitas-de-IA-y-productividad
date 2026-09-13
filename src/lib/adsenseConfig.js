// AdSense configuration
//
// To activate real ads: set VITE_ADSENSE_PUBLISHER_ID in a .env file
// (e.g. VITE_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX) and provide
// slot ids per placement below. Until a valid publisher id is present,
// AdSlot renders nothing in production and a dev-only placeholder in
// local development.

export const ADSENSE_PUBLISHER_ID = import.meta.env.VITE_ADSENSE_PUBLISHER_ID || ''

export const ADSENSE_SLOTS = {
  banner: import.meta.env.VITE_ADSENSE_SLOT_BANNER || '',
  inArticle: import.meta.env.VITE_ADSENSE_SLOT_IN_ARTICLE || '',
  horizontal: import.meta.env.VITE_ADSENSE_SLOT_HORIZONTAL || '',
}

export function isAdsenseConfigured() {
  return Boolean(ADSENSE_PUBLISHER_ID && ADSENSE_PUBLISHER_ID.startsWith('ca-pub-'))
}

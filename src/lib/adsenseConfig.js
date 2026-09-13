// AdSense configuration
//
// The publisher id is verified with Google AdSense and loaded statically
// in index.html (required for site-ownership verification, which does not
// always execute JavaScript). Override it with VITE_ADSENSE_PUBLISHER_ID if
// the account ever changes. Ad units still need slot ids per placement
// below — until those are set, AdSlot renders nothing in production and a
// dev-only placeholder in local development.

export const ADSENSE_PUBLISHER_ID = import.meta.env.VITE_ADSENSE_PUBLISHER_ID || 'ca-pub-7739352195047028'

export const ADSENSE_SLOTS = {
  banner: import.meta.env.VITE_ADSENSE_SLOT_BANNER || '',
  inArticle: import.meta.env.VITE_ADSENSE_SLOT_IN_ARTICLE || '',
  horizontal: import.meta.env.VITE_ADSENSE_SLOT_HORIZONTAL || '',
}

export function isAdsenseConfigured() {
  return Boolean(ADSENSE_PUBLISHER_ID && ADSENSE_PUBLISHER_ID.startsWith('ca-pub-'))
}

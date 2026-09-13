import { useEffect, useRef } from 'react'
import { ADSENSE_PUBLISHER_ID, ADSENSE_SLOTS, isAdsenseConfigured } from '../lib/adsenseConfig'

const VARIANTS = {
  banner: { label: 'AD_BANNER', className: 'w-full h-24 md:h-28' },
  inArticle: { label: 'AD_IN_ARTICLE', className: 'w-full h-40' },
  horizontal: { label: 'AD_HORIZONTAL', className: 'w-full h-24' },
}

export default function AdSlot({ variant = 'banner' }) {
  const ref = useRef(null)
  const configured = isAdsenseConfigured()
  const slotId = ADSENSE_SLOTS[variant]

  useEffect(() => {
    if (!configured || !slotId) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // AdSense script not yet loaded — safe to ignore
    }
  }, [configured, slotId])

  if (configured && slotId) {
    return (
      <div className="w-full flex justify-center my-4" ref={ref}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={ADSENSE_PUBLISHER_ID}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    )
  }

  if (import.meta.env.DEV) {
    const v = VARIANTS[variant] || VARIANTS.banner
    return (
      <div
        className={`${v.className} border border-dashed border-matrix/20 bg-terminal-gray/40 flex items-center justify-center text-[10px] tracking-widest text-matrix/40 font-code`}
        aria-hidden="true"
      >
        [ {v.label} · DEV PLACEHOLDER — NO RENDERIZA EN PRODUCCIÓN ]
      </div>
    )
  }

  return null
}

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Plus } from 'lucide-react'

function Item({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)

  const handleToggle = () => {
    const el = contentRef.current
    if (!el) return
    if (!isOpen) {
      gsap.set(el, { height: 'auto' })
      const h = el.offsetHeight
      gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.35, ease: 'power2.inOut', onComplete: () => gsap.set(el, { height: 'auto' }) })
    } else {
      gsap.to(el, { height: 0, duration: 0.3, ease: 'power2.inOut' })
    }
    onToggle()
  }

  return (
    <div className="border-b border-white/10">
      <button type="button" onClick={handleToggle} className="w-full flex items-center justify-between gap-4 py-4 text-left" aria-expanded={isOpen}>
        <span className="text-sm text-white">{item.q}</span>
        <Plus size={16} className={`shrink-0 text-matrix transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="text-sm text-white/50 leading-relaxed pb-4 pr-8">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQAccordionMini({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div>
      {items.map((item, i) => (
        <Item key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
      ))}
    </div>
  )
}

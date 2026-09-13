import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Plus } from 'lucide-react'
import { faq } from '../data/faq'

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)

  const handleToggle = () => {
    const el = contentRef.current
    if (!el) return

    if (!isOpen) {
      gsap.set(el, { height: 'auto' })
      const h = el.offsetHeight
      gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.4, ease: 'power2.inOut', onComplete: () => gsap.set(el, { height: 'auto' }) })
    } else {
      gsap.to(el, { height: 0, duration: 0.35, ease: 'power2.inOut' })
    }
    onToggle()
  }

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-mono-heading text-sm md:text-base text-white">{item.q}</span>
        <Plus
          size={18}
          className={`shrink-0 text-matrix transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="text-sm text-white/55 leading-relaxed pb-5 pr-8">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="px-4 py-20 md:py-28 bg-terminal-deep">
      <div className="max-w-3xl mx-auto">
        <div className="text-[11px] tracking-widest text-matrix mb-3">[ FAQ ]</div>
        <h2 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-10">
          Preguntas frecuentes.
        </h2>

        <div>
          {faq.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

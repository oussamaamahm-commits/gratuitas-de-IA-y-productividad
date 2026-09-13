import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CategoryCard from './CategoryCard'
import { categories } from '../data/categories'

gsap.registerPlugin(ScrollTrigger)

export default function Categories() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.category-card', {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="px-4 py-20 md:py-28 bg-terminal-deep" ref={rootRef}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-12">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ CATEGORIES ]</div>
          <h2 className="font-mono-heading font-bold text-3xl md:text-4xl text-white">
            Encuentra la herramienta adecuada.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ResourceCard from './ResourceCard'
import AdSlot from './AdSlot'
import { resources } from '../data/resources'

gsap.registerPlugin(ScrollTrigger)

export default function SeoResources() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.resource-card', {
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
    <section className="px-4 py-20 md:py-28 bg-terminal-black" ref={rootRef}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <div className="text-[11px] tracking-widest text-matrix mb-3">[ RESOURCES ]</div>
            <h2 className="font-mono-heading font-bold text-3xl md:text-4xl text-white">
              Aprende a trabajar mejor con IA.
            </h2>
          </div>
          <Link to="/blog" className="link-hover text-xs text-matrix/80 hover:text-matrix">
            Ver todos los artículos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.slice(0, 6).map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>

        <div className="mt-12">
          <AdSlot variant="horizontal" />
        </div>
      </div>
    </section>
  )
}

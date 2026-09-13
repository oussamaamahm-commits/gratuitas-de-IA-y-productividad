import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Mail, FileText, Calendar, Brain, Sparkles, Workflow, Cpu } from 'lucide-react'

const ITEMS = [
  { icon: Mail, label: 'Email Assistant' },
  { icon: FileText, label: 'AI Summarizer' },
  { icon: Calendar, label: 'Smart Planner' },
  { icon: Brain, label: 'Prompt Builder' },
  { icon: Sparkles, label: 'AI Writer' },
  { icon: Workflow, label: 'Meeting → Tasks' },
]

export default function IntegrationOrbit() {
  const orbitRef = useRef(null)
  const [hovered, setHovered] = useState(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
  }, [])

  useEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 60,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="px-4 py-20 md:py-28 bg-terminal-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="text-[11px] tracking-widest text-matrix mb-3">[ ECOSYSTEM ]</div>
        <h2 className="font-mono-heading font-bold text-3xl md:text-4xl text-white">
          Un núcleo, múltiples herramientas.
        </h2>
      </div>

      <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-md aspect-square">
        <div className="absolute inset-0 rounded-full border border-matrix/10" />
        <div className="absolute inset-[15%] rounded-full border border-matrix/10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full border border-matrix/40 bg-terminal-gray text-matrix shadow-[0_0_30px_rgba(0,255,65,0.15)]">
            <Cpu size={22} />
            <span className="text-[8px] mt-1 tracking-widest">AI CORE</span>
          </div>
        </div>

        <div ref={orbitRef} className="absolute inset-0">
          {ITEMS.map((item, i) => {
            const angle = (360 / ITEMS.length) * i
            const rad = (angle * Math.PI) / 180
            const radiusPercent = 46
            const x = 50 + radiusPercent * Math.cos(rad)
            const y = 50 + radiusPercent * Math.sin(rad)

            return (
              <div
                key={item.label}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div
                  style={{ transform: reduced ? 'none' : `rotate(${-angle}deg)` }}
                  className="relative"
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(item.label)}
                  onBlur={() => setHovered(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center justify-center h-9 w-9 md:h-11 md:w-11 rounded-full border transition-all duration-300 ${
                      hovered === item.label
                        ? 'scale-125 border-matrix bg-matrix/15 text-matrix'
                        : 'border-white/15 bg-terminal-gray text-white/60'
                    }`}
                    aria-label={item.label}
                  >
                    <item.icon size={15} />
                  </button>
                  {hovered === item.label && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 whitespace-nowrap rounded-sm border border-matrix/30 bg-terminal-black px-2 py-1 text-[10px] text-matrix">
                      {item.label}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Clock, CheckCircle2, Bot } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// Illustrative demo values only — not real user statistics.
const VALUES = [20, 35, 30, 50, 45, 65, 60]

const CHART_W = 560
const CHART_H = 160
const PADDING = 16

function buildPath() {
  const step = (CHART_W - PADDING * 2) / (VALUES.length - 1)
  const max = Math.max(...VALUES)
  const points = VALUES.map((v, i) => {
    const x = PADDING + i * step
    const y = CHART_H - PADDING - (v / max) * (CHART_H - PADDING * 2)
    return [x, y]
  })
  return points.reduce((acc, [x, y], i) => acc + `${i === 0 ? 'M' : 'L'}${x},${y} `, '')
}

const STATS = [
  { icon: CheckCircle2, value: 128, suffix: '', label: 'Tasks completed' },
  { icon: Clock, value: 34, suffix: 'h', label: 'Focus time' },
  { icon: Bot, value: 76, suffix: '%', label: 'AI assisted' },
]

export default function MiniDashboard() {
  const rootRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current
      if (path) {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%', once: true },
        })
      }

      gsap.utils.toArray('.dash-stat-value').forEach((el) => {
        const target = Number(el.dataset.value)
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 75%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          },
        })
      })

      gsap.from('.dash-day', {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.06,
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%', once: true },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="px-4 py-20 md:py-28 bg-terminal-black" ref={rootRef}>
      <div className="max-w-4xl mx-auto rounded-sm border border-white/10 bg-terminal-gray/40 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-mono-heading text-lg text-white">Tiempo recuperado</h3>
          <span className="text-[10px] tracking-widest text-white/30">DEMO · DATOS ILUSTRATIVOS</span>
        </div>

        <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="w-full h-auto" role="img" aria-label="Gráfico ilustrativo de tiempo recuperado por día">
          <line x1={PADDING} y1={CHART_H - PADDING} x2={CHART_W - PADDING} y2={CHART_H - PADDING} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path ref={pathRef} d={buildPath()} fill="none" stroke="#00FF41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="grid grid-cols-7 gap-1 mt-2 mb-8">
          {DAYS.map((d) => (
            <div key={d} className="dash-day text-center text-[10px] text-white/40">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon size={16} className="text-matrix mx-auto mb-2" />
              <div
                className="dash-stat-value font-mono-heading font-bold text-xl md:text-2xl text-white"
                data-value={s.value}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </div>
              <div className="text-[10px] md:text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

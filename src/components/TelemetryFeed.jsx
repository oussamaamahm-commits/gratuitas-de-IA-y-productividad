import { useEffect, useRef, useState } from 'react'
import { Activity } from 'lucide-react'

const MESSAGES = [
  'analyzing_input...',
  'extracting_context...',
  'optimizing_output...',
  'task_completed',
  'ready_for_next_task',
]

const TYPE_SPEED = 32
const HOLD_AFTER_LINE = 500
const HOLD_AFTER_CYCLE = 1400

export default function TelemetryFeed() {
  const [lines, setLines] = useState([])
  const visibleRef = useRef(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleVisibility = () => {
      visibleRef.current = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisibility)

    let mounted = true
    let msgIndex = 0
    let charIndex = 0
    let currentLines = []

    const step = () => {
      if (!mounted) return
      if (!visibleRef.current) {
        timeoutRef.current = setTimeout(step, 400)
        return
      }

      const msg = MESSAGES[msgIndex]
      charIndex += 1
      const partial = msg.slice(0, charIndex)
      const draft = [...currentLines.slice(0, -1), partial]
      setLines(draft.slice(-5))

      if (charIndex >= msg.length) {
        currentLines = [...currentLines.slice(0, -1), msg]
        msgIndex += 1
        charIndex = 0

        if (msgIndex >= MESSAGES.length) {
          timeoutRef.current = setTimeout(() => {
            currentLines = []
            msgIndex = 0
            setLines([])
            timeoutRef.current = setTimeout(step, 300)
          }, HOLD_AFTER_CYCLE)
          return
        }

        currentLines = [...currentLines, '']
        timeoutRef.current = setTimeout(step, HOLD_AFTER_LINE)
        return
      }

      timeoutRef.current = setTimeout(step, TYPE_SPEED)
    }

    currentLines = ['']
    timeoutRef.current = setTimeout(step, TYPE_SPEED)

    return () => {
      mounted = false
      clearTimeout(timeoutRef.current)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <section className="px-4 py-16 md:py-20 bg-terminal-black">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-sm border border-matrix/15 bg-terminal-gray/40 p-6 md:p-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-white/70 text-sm font-mono-heading">
              <Activity size={15} className="text-matrix" />
              AI ACTIVITY FEED
            </div>
            <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-matrix">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-matrix" />
              </span>
              FEED EN VIVO
            </div>
          </div>

          <div className="min-h-[140px] font-code text-xs md:text-sm text-matrix/80 leading-loose">
            {lines.length === 0 && <div className="text-white/20">esperando actividad...</div>}
            {lines.map((line, i) => (
              <div key={i}>
                &gt; {line}
                {i === lines.length - 1 && <span className="blink-cursor" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const TONES = [
  { key: 'neutral', label: 'Neutro (solo limpieza)' },
  { key: 'professional', label: 'Profesional' },
  { key: 'concise', label: 'Conciso' },
]

const FILLERS = [
  [/\bo sea,?\s*/gi, ''],
  [/^\s*bueno,\s*/i, ''],
  [/\bla verdad es que\s*/gi, ''],
  [/\bmuy muy\b/gi, 'muy'],
]

const WORDY = [
  [/\bcon el fin de\b/gi, 'para'],
  [/\bdebido a que\b/gi, 'porque'],
  [/\ba pesar de que\b/gi, 'aunque'],
  [/\bllevar a cabo\b/gi, 'hacer'],
  [/\ben la actualidad\b/gi, 'hoy'],
  [/\bcon respecto a\b/gi, 'sobre'],
  [/\bla mayor parte de las veces\b/gi, 'normalmente'],
]

const INFORMAL_TO_FORMAL = [
  [/\bpa\b/gi, 'para'],
  [/\b(xq|porq|pq)\b/gi, 'porque'],
  [/\b(tb|tmb)\b/gi, 'también'],
  [/\bq\b/gi, 'que'],
  [/\bok\b/gi, 'de acuerdo'],
]

const INTENSIFIERS = /\b(realmente|básicamente|simplemente|en realidad|obviamente)\b,?\s*/gi

function tidy(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/([.!?])\s*,\s*/g, '$1 ')
    .replace(/,\s*,/g, ',')
    .replace(/^[,;\s]+/, '')
    .trim()
}

function capitalizeSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s))
    .join(' ')
}

function applyRules(text, rules) {
  return rules.reduce((out, [pattern, replacement]) => out.replace(pattern, replacement), text)
}

export function rewrite(text, tone, withGreeting = false) {
  let out = applyRules(text, FILLERS)
  out = applyRules(out, WORDY)
  if (tone === 'professional') out = applyRules(out, INFORMAL_TO_FORMAL)
  if (tone === 'concise') out = out.replace(INTENSIFIERS, '')
  out = capitalizeSentences(tidy(out))
  if (out && !/[.!?]$/.test(out)) out += '.'
  if (withGreeting) {
    const hello = tone === 'professional' ? 'Estimado/a:' : 'Hola:'
    const bye = tone === 'professional' ? 'Saludos cordiales.' : 'Un saludo.'
    return `${hello}\n\n${out}\n\n${bye}`
  }
  return out
}

export default function AiWriterDemo() {
  const [text, setText] = useState('')
  const [tone, setTone] = useState('neutral')
  const [greeting, setGreeting] = useState(false)
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setOutput(rewrite(text, tone, greeting))
  }

  const handleReset = () => {
    setText('')
    setTone('neutral')
    setGreeting(false)
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="TEXTO ORIGINAL" htmlFor="aw-text">
          <textarea
            id="aw-text"
            className={`${inputClass} min-h-[140px] resize-y`}
            placeholder="Pega aquí el texto que quieres limpiar y ajustar..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={1200}
          />
        </Field>

        <Field label="TONO" htmlFor="aw-tone">
          <select id="aw-tone" className={inputClass} value={tone} onChange={(e) => setTone(e.target.value)}>
            {TONES.map((t) => (
              <option key={t.key} value={t.key}>{t.label}</option>
            ))}
          </select>
        </Field>

        <label className="flex items-center gap-2 text-xs text-white/60 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={greeting}
            onChange={(e) => setGreeting(e.target.checked)}
            className="accent-[#00FF41]"
          />
          Añadir saludo y despedida (para mensajes y correos)
        </label>

        <button type="submit" className={runButtonClass} disabled={!text.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Mejorar texto</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Pega un texto y elige un tono para ver la versión limpia." />
    </div>
  )
}

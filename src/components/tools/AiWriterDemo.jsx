import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const TONES = ['Professional', 'Concise', 'Creative', 'Friendly']

const FILLER_REPLACEMENTS = [
  [/\bo sea\b/gi, ''],
  [/\ben plan\b/gi, ''],
  [/\ba ver\b/gi, ''],
  [/\bbueno,\s*/gi, ''],
  [/\bla verdad es que\b/gi, ''],
  [/\bcomo que\b/gi, ''],
  [/\bmuy muy\b/gi, 'muy'],
  [/\bcosa\b/gi, 'elemento'],
]

const TONE_PREFIX = {
  Professional: 'Estimado/a,\n\n',
  Concise: '',
  Creative: '',
  Friendly: '¡Hola!\n\n',
}

const TONE_SUFFIX = {
  Professional: '\n\nSaludos cordiales.',
  Concise: '',
  Creative: '',
  Friendly: '\n\n¡Un saludo!',
}

function capitalizeSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s))
    .join(' ')
}

function condense(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.replace(/,\s*(que|el cual|la cual)\s+/gi, '. '))
    .join(' ')
}

function rewrite(text, tone) {
  let out = text.trim().replace(/\s+/g, ' ')
  FILLER_REPLACEMENTS.forEach(([pattern, replacement]) => {
    out = out.replace(pattern, replacement)
  })
  out = out.replace(/\s+/g, ' ').trim()
  out = capitalizeSentences(out)

  if (tone === 'Concise') {
    out = condense(out)
  }

  return `${TONE_PREFIX[tone]}${out}${TONE_SUFFIX[tone]}`
}

export default function AiWriterDemo() {
  const [text, setText] = useState('')
  const [tone, setTone] = useState('Professional')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setOutput(rewrite(text, tone))
  }

  const handleReset = () => {
    setText('')
    setTone('Professional')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="TEXTO ORIGINAL" htmlFor="aw-text">
          <textarea
            id="aw-text"
            className={`${inputClass} min-h-[140px] resize-y`}
            placeholder="Pega aquí el texto que quieres mejorar..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={1200}
          />
        </Field>

        <Field label="TONO" htmlFor="aw-tone">
          <select id="aw-tone" className={inputClass} value={tone} onChange={(e) => setTone(e.target.value)}>
            {TONES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <button type="submit" className={runButtonClass} disabled={!text.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Mejorar texto</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Pega un texto y elige un tono para ver la versión mejorada." />
    </div>
  )
}

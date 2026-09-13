import { useState } from 'react'
import { Play, Loader2 } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'Inglés' },
  { code: 'fr', label: 'Francés' },
  { code: 'de', label: 'Alemán' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Portugués' },
]

async function translate(text, from, to) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('network')
  const data = await res.json()
  if (!data?.responseData?.translatedText) throw new Error('empty')
  return data.responseData.translatedText
}

export default function TextTranslatorDemo() {
  const [text, setText] = useState('')
  const [from, setFrom] = useState('es')
  const [to, setTo] = useState('en')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async (e) => {
    e.preventDefault()
    if (!text.trim() || from === to) return
    setLoading(true)
    setError('')
    try {
      const result = await translate(text.slice(0, 480), from, to)
      setOutput(result)
    } catch {
      setError('No se pudo completar la traducción. Comprueba tu conexión e inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setText('')
    setOutput('')
    setError('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="TEXTO A TRADUCIR" htmlFor="tt-text">
          <textarea
            id="tt-text"
            className={`${inputClass} min-h-[120px] resize-y`}
            placeholder="Escribe o pega el texto (máx. 480 caracteres)..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={480}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="DESDE" htmlFor="tt-from">
            <select id="tt-from" className={inputClass} value={from} onChange={(e) => setFrom(e.target.value)}>
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </Field>
          <Field label="HACIA" htmlFor="tt-to">
            <select id="tt-to" className={inputClass} value={to} onChange={(e) => setTo(e.target.value)}>
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </Field>
        </div>

        {from === to && <p className="text-[11px] text-amber-400/80 mb-3">Elige dos idiomas diferentes.</p>}
        {error && <p className="text-[11px] text-red-400/80 mb-3">{error}</p>}

        <button type="submit" className={runButtonClass} disabled={!text.trim() || from === to || loading}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2">
            {loading ? <Loader2 size={13} className="animate-spin" /> : <Play size={13} />}
            {loading ? 'Traduciendo...' : 'Traducir'}
          </span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Escribe un texto y pulsa Traducir para ver el resultado." />
    </div>
  )
}

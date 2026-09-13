import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const LENGTHS = [
  { key: 'short', label: 'Breve (2 frases)', count: 2 },
  { key: 'medium', label: 'Medio (4 frases)', count: 4 },
  { key: 'long', label: 'Detallado (6 frases)', count: 6 },
]

const STOPWORDS = new Set([
  'el','la','los','las','de','del','a','y','o','en','un','una','unos','unas','que','se','por','con',
  'para','es','al','como','su','sus','lo','no','si','más','pero','sobre','entre','esta','este','estos',
  'estas','ya','muy','sin','cuando','donde','fue','ser','son','han','ha','hay','le','les','tu','yo',
  'nos','les','desde','hasta','also','the','and','of','to','a','in','is','it','that','this',
])

function splitSentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}

function wordFrequencies(sentences) {
  const freq = {}
  sentences.forEach((s) => {
    s.toLowerCase()
      .replace(/[^\p{L}\s]/gu, '')
      .split(/\s+/)
      .forEach((word) => {
        if (!word || STOPWORDS.has(word)) return
        freq[word] = (freq[word] || 0) + 1
      })
  })
  return freq
}

function summarize(text, count) {
  const sentences = splitSentences(text)
  if (sentences.length <= count) return sentences.join(' ')

  const freq = wordFrequencies(sentences)
  const scored = sentences.map((s, index) => {
    const words = s.toLowerCase().replace(/[^\p{L}\s]/gu, '').split(/\s+/).filter(Boolean)
    const score = words.reduce((sum, w) => sum + (freq[w] || 0), 0) / (words.length || 1)
    return { s, index, score }
  })

  const top = scored.sort((a, b) => b.score - a.score).slice(0, count)
  return top.sort((a, b) => a.index - b.index).map((t) => t.s).join(' ')
}

export default function AiSummarizerDemo() {
  const [text, setText] = useState('')
  const [length, setLength] = useState('medium')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    const count = LENGTHS.find((l) => l.key === length)?.count || 4
    setOutput(summarize(text, count))
  }

  const handleReset = () => {
    setText('')
    setLength('medium')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="TEXTO A RESUMIR" htmlFor="sm-text">
          <textarea
            id="sm-text"
            className={`${inputClass} min-h-[160px] resize-y`}
            placeholder="Pega aquí el artículo, informe o documento que quieres resumir..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={4000}
          />
        </Field>

        <Field label="LONGITUD DEL RESUMEN" htmlFor="sm-length">
          <select id="sm-length" className={inputClass} value={length} onChange={(e) => setLength(e.target.value)}>
            {LENGTHS.map((l) => (
              <option key={l.key} value={l.key}>{l.label}</option>
            ))}
          </select>
        </Field>

        <button type="submit" className={runButtonClass} disabled={!text.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Resumir texto</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Pega un texto largo para extraer las ideas más relevantes." />
    </div>
  )
}

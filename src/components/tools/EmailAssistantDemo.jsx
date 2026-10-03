import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const TONES = ['Formal', 'Cercano', 'Directo']

export function buildEmail(reason, recipient, tone) {
  const name = recipient.trim()
  const trimmed = reason.trim().replace(/[.\s]+$/, '')
  const cleaned = trimmed.charAt(0).toLowerCase() + trimmed.slice(1)
  const subjectText = trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
  const subject = `Asunto: ${subjectText.length > 70 ? subjectText.slice(0, 67) + '…' : subjectText}`

  const greetings = {
    Formal: name ? `Estimado/a ${name}:` : 'Buenos días:',
    Cercano: name ? `Hola ${name},` : 'Hola:',
    Directo: name ? `${name},` : '',
  }

  const bodies = {
    Formal: `Le escribo para ${cleaned}.`,
    Cercano: `Te escribo para ${cleaned}.`,
    Directo: `Quería ${cleaned}.`,
  }

  const closings = {
    Formal: 'Quedo a su disposición para cualquier aclaración.\n\nAtentamente,',
    Cercano: 'Cualquier cosa que necesites, dímelo.\n\nUn saludo,',
    Directo: 'Avísame si necesitas algo más.\n\nGracias,',
  }

  return [subject, greetings[tone], bodies[tone], closings[tone]].filter(Boolean).join('\n\n')
}

export default function EmailAssistantDemo() {
  const [reason, setReason] = useState('')
  const [recipient, setRecipient] = useState('')
  const [tone, setTone] = useState('Formal')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!reason.trim()) return
    setOutput(buildEmail(reason, recipient, tone))
  }

  const handleReset = () => {
    setReason('')
    setRecipient('')
    setTone('Formal')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="¿PARA QUÉ ESCRIBES? (empieza con un verbo en infinitivo)" htmlFor="ea-reason">
          <textarea
            id="ea-reason"
            className={`${inputClass} min-h-[90px] resize-y`}
            placeholder="Ej: confirmar la reunión del jueves y pedir el orden del día"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            maxLength={400}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="DESTINATARIO (opcional)" htmlFor="ea-recipient">
            <input
              id="ea-recipient"
              type="text"
              className={inputClass}
              placeholder="Ej: Laura"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              maxLength={60}
            />
          </Field>
          <Field label="TONO" htmlFor="ea-tone">
            <select id="ea-tone" className={inputClass} value={tone} onChange={(e) => setTone(e.target.value)}>
              {TONES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>

        <button type="submit" className={runButtonClass} disabled={!reason.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Generar email</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Indica para qué escribes y genera un borrador listo para editar." />
    </div>
  )
}

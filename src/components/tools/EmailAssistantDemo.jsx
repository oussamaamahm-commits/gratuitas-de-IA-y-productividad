import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const TONES = ['Formal', 'Cercano', 'Directo']

function buildEmail(reason, recipient, tone) {
  const who = recipient.trim() || 'nombre del destinatario'

  const greetings = {
    Formal: `Estimado/a ${who}:`,
    Cercano: `Hola ${who},`,
    Directo: `${who},`,
  }

  const openings = {
    Formal: 'Le escribo en relación a',
    Cercano: 'Te escribo porque',
    Directo: 'Asunto:',
  }

  const closings = {
    Formal: 'Quedo a su disposición para cualquier aclaración.\n\nAtentamente,',
    Cercano: 'Cualquier cosa que necesites, aquí estoy.\n\n¡Un saludo!',
    Directo: 'Avísame si necesitas algo más.',
  }

  const subject = `Asunto: ${reason.trim().slice(0, 70)}${reason.length > 70 ? '…' : ''}`

  const body = `${greetings[tone]}\n\n${openings[tone]} ${reason.trim()}.\n\n${closings[tone]}`

  return `${subject}\n\n${body}`
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
        <Field label="MOTIVO DEL EMAIL" htmlFor="ea-reason">
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

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Describe el motivo del email para generar el borrador." />
    </div>
  )
}

import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const ACTION_VERBS = [
  'enviar', 'revisar', 'preparar', 'contactar', 'actualizar', 'crear', 'organizar', 'confirmar',
  'entregar', 'planificar', 'elaborar', 'definir', 'coordinar', 'llamar', 'escribir', 'programar',
  'terminar', 'finalizar', 'compartir', 'agendar', 'validar', 'revisemos', 'enviemos', 'hay que',
  'necesitamos', 'debemos', 'quedamos en', 'pendiente',
]

function extractTasks(notes) {
  const lines = notes
    .split(/\n|(?<=[.])\s+(?=[A-ZÁÉÍÓÚÑ])/)
    .map((l) => l.replace(/^[-•*]\s*/, '').trim())
    .filter(Boolean)

  const tasks = lines.filter((line) => {
    const lower = line.toLowerCase()
    return ACTION_VERBS.some((verb) => lower.includes(verb))
  })

  return tasks.length > 0 ? tasks : lines.slice(0, 5)
}

export default function MeetingToTasksDemo() {
  const [notes, setNotes] = useState('')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!notes.trim()) return
    const tasks = extractTasks(notes)
    setOutput(tasks.map((t) => `[ ] ${t}`).join('\n'))
  }

  const handleReset = () => {
    setNotes('')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="NOTAS DE LA REUNIÓN" htmlFor="mt-notes">
          <textarea
            id="mt-notes"
            className={`${inputClass} min-h-[180px] resize-y`}
            placeholder={'Ej:\nLaura va a enviar el informe el viernes.\nHay que revisar el presupuesto antes de la próxima reunión.\nSe comentó el estado general del proyecto, sin cambios.'}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            maxLength={2000}
          />
        </Field>

        <button type="submit" className={runButtonClass} disabled={!notes.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Extraer tareas</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Pega las notas de tu reunión para extraer las tareas accionables." />
    </div>
  )
}

import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const GOALS = ['Writing', 'Marketing', 'Study', 'Business', 'Productivity']
const TONES = ['Professional', 'Concise', 'Creative', 'Friendly']

const GOAL_CONTEXT = {
  Writing: 'redacción y composición de texto',
  Marketing: 'marketing y comunicación persuasiva',
  Study: 'estudio y comprensión de contenido',
  Business: 'contexto profesional y de negocio',
  Productivity: 'organización y productividad personal',
}

const TONE_INSTRUCTIONS = {
  Professional: 'Usa un tono profesional, claro y sin coloquialismos.',
  Concise: 'Sé extremadamente conciso: sin relleno, directo al punto.',
  Creative: 'Usa un tono creativo, con lenguaje vivo y ejemplos originales.',
  Friendly: 'Usa un tono cercano y cordial, como si hablaras con un colega.',
}

function buildPrompt(description, goal, tone) {
  const lines = [
    `ROL: Actúa como un especialista en ${GOAL_CONTEXT[goal]}.`,
    '',
    `OBJETIVO: ${description.trim()}`,
    '',
    `TONO: ${TONE_INSTRUCTIONS[tone]}`,
    '',
    'FORMATO DE SALIDA:',
    '- Estructura la respuesta en párrafos o puntos claros.',
    '- No incluyas introducciones innecesarias ni disculpas.',
    '- Si falta información relevante, indícalo explícitamente antes de responder.',
    '',
    'RESTRICCIONES:',
    '- Máximo el espacio necesario para cubrir el objetivo, sin extenderte de más.',
    '- No inventes datos que no se hayan proporcionado.',
  ]
  return lines.join('\n')
}

export default function PromptBuilderDemo() {
  const [description, setDescription] = useState('')
  const [goal, setGoal] = useState('Writing')
  const [tone, setTone] = useState('Professional')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!description.trim()) return
    setOutput(buildPrompt(description, goal, tone))
  }

  const handleReset = () => {
    setDescription('')
    setGoal('Writing')
    setTone('Professional')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="DESCRIBE LO QUE QUIERES CONSEGUIR" htmlFor="pb-desc">
          <textarea
            id="pb-desc"
            className={`${inputClass} min-h-[100px] resize-y`}
            placeholder="Ej: Necesito un prompt para generar descripciones de producto para una tienda online de decoración..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={600}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="OBJETIVO" htmlFor="pb-goal">
            <select id="pb-goal" className={inputClass} value={goal} onChange={(e) => setGoal(e.target.value)}>
              {GOALS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </Field>
          <Field label="TONO" htmlFor="pb-tone">
            <select id="pb-tone" className={inputClass} value={tone} onChange={(e) => setTone(e.target.value)}>
              {TONES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>

        <button type="submit" className={runButtonClass} disabled={!description.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Generate Prompt</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel='Completa la descripción y pulsa "Generate Prompt" para ver tu prompt estructurado.' />
    </div>
  )
}

import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

const SCOPES = ['Semana', 'Mes', 'Proyecto']

const SCOPE_STEPS = {
  Semana: [
    (goal) => `Define qué significa "${goal}" en términos concretos y medibles para esta semana.`,
    () => 'Divide el objetivo en 2-3 tareas diarias realistas.',
    () => 'Bloquea franjas de tiempo específicas en tu calendario para cada tarea.',
    () => 'Revisa el progreso a mitad de semana y ajusta si hace falta.',
    () => 'Cierra la semana evaluando qué avanzó y qué queda pendiente.',
  ],
  Mes: [
    (goal) => `Concreta "${goal}" en un resultado final verificable a 30 días.`,
    () => 'Divide el mes en 4 bloques semanales con un hito por semana.',
    () => 'Identifica qué recursos o información necesitas antes de empezar.',
    () => 'Prioriza las 3 tareas de mayor impacto de cada semana.',
    () => 'Haz una revisión semanal corta para reajustar el plan.',
    () => 'Evalúa el resultado final frente al objetivo original.',
  ],
  Proyecto: [
    (goal) => `Define el alcance y el criterio de éxito de "${goal}".`,
    () => 'Desglosa el proyecto en fases con entregables claros.',
    () => 'Identifica dependencias: qué tareas bloquean a otras.',
    () => 'Asigna una estimación de tiempo realista a cada fase.',
    () => 'Define puntos de revisión entre fases antes de avanzar.',
    () => 'Cierra con una fase de revisión final y aprendizajes.',
  ],
}

function buildPlan(goal, scope) {
  const steps = SCOPE_STEPS[scope].map((fn) => fn(goal.trim()))
  const header = `PLAN — ${scope.toUpperCase()}\nObjetivo: ${goal.trim()}\n`
  const body = steps.map((s, i) => `${i + 1}. ${s}`).join('\n')
  return `${header}\n${body}`
}

export default function SmartPlannerDemo() {
  const [goal, setGoal] = useState('')
  const [scope, setScope] = useState('Semana')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!goal.trim()) return
    setOutput(buildPlan(goal, scope))
  }

  const handleReset = () => {
    setGoal('')
    setScope('Semana')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <Field label="¿QUÉ OBJETIVO QUIERES LOGRAR?" htmlFor="sp-goal">
          <textarea
            id="sp-goal"
            className={`${inputClass} min-h-[90px] resize-y`}
            placeholder="Ej: lanzar la primera versión de mi portfolio"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            maxLength={200}
          />
        </Field>

        <Field label="ALCANCE" htmlFor="sp-scope">
          <select id="sp-scope" className={inputClass} value={scope} onChange={(e) => setScope(e.target.value)}>
            {SCOPES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <button type="submit" className={runButtonClass} disabled={!goal.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Generar plan</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Describe tu objetivo para generar un plan de pasos accionables." />
    </div>
  )
}

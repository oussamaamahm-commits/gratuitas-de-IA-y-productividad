import { useState } from 'react'
import { Play } from 'lucide-react'
import Field, { inputClass, runButtonClass } from './Field'
import ToolOutputCard from './ToolOutputCard'

function toBullets(text) {
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => `  • ${l}`)
    .join('\n')
}

function buildCV(name, role, experience, education, skills) {
  const lines = [
    name.trim().toUpperCase(),
    role.trim(),
    '─'.repeat(32),
    '',
    'EXPERIENCIA',
    toBullets(experience) || '  • (añade tu experiencia)',
    '',
    'FORMACIÓN',
    toBullets(education) || '  • (añade tu formación)',
    '',
    'HABILIDADES',
    skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .join(' · ') || '(añade tus habilidades separadas por comas)',
  ]
  return lines.join('\n')
}

export default function CvBuilderDemo() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [experience, setExperience] = useState('')
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState('')
  const [output, setOutput] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!name.trim() || !role.trim()) return
    setOutput(buildCV(name, role, experience, education, skills))
  }

  const handleReset = () => {
    setName('')
    setRole('')
    setExperience('')
    setEducation('')
    setSkills('')
    setOutput('')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form onSubmit={handleGenerate} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="NOMBRE" htmlFor="cv-name">
            <input id="cv-name" type="text" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
          </Field>
          <Field label="PUESTO OBJETIVO" htmlFor="cv-role">
            <input id="cv-role" type="text" className={inputClass} value={role} onChange={(e) => setRole(e.target.value)} maxLength={60} placeholder="Ej: Diseñador UX" />
          </Field>
        </div>

        <Field label="EXPERIENCIA (una línea por puesto)" htmlFor="cv-exp">
          <textarea
            id="cv-exp"
            className={`${inputClass} min-h-[80px] resize-y`}
            placeholder={'Diseñador UX en Acme (2022-2024)\nFreelance en proyectos de marca (2020-2022)'}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            maxLength={600}
          />
        </Field>

        <Field label="FORMACIÓN (una línea por título)" htmlFor="cv-edu">
          <textarea
            id="cv-edu"
            className={`${inputClass} min-h-[60px] resize-y`}
            placeholder="Grado en Diseño, Universidad X (2020)"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            maxLength={400}
          />
        </Field>

        <Field label="HABILIDADES (separadas por comas)" htmlFor="cv-skills">
          <input
            id="cv-skills"
            type="text"
            className={inputClass}
            placeholder="Figma, investigación de usuarios, prototipado"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            maxLength={200}
          />
        </Field>

        <button type="submit" className={runButtonClass} disabled={!name.trim() || !role.trim()}>
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2"><Play size={13} /> Generar CV</span>
        </button>
      </form>

      <ToolOutputCard content={output} onReset={handleReset} emptyLabel="Completa tus datos para generar una estructura de CV limpia." />
    </div>
  )
}

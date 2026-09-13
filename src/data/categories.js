export const categories = [
  {
    slug: 'writing',
    name: 'WRITING',
    label: 'Escritura',
    icon: 'PenLine',
    description: 'Escribe mejor en menos tiempo.',
    longDescription:
      'Herramientas para redactar, reescribir y traducir texto con estructura y tono claros.',
  },
  {
    slug: 'productivity',
    name: 'PRODUCTIVITY',
    label: 'Productividad',
    icon: 'ListChecks',
    description: 'Convierte objetivos en acción.',
    longDescription:
      'Planifica tareas, organiza tu semana y convierte ideas en pasos concretos.',
  },
  {
    slug: 'study',
    name: 'STUDY',
    label: 'Estudio',
    icon: 'BookOpen',
    description: 'Procesa información más rápido.',
    longDescription:
      'Resume documentos largos y extrae lo esencial sin perder contexto.',
  },
  {
    slug: 'business',
    name: 'BUSINESS',
    label: 'Negocio',
    icon: 'Briefcase',
    description: 'Comunicación profesional al instante.',
    longDescription:
      'Emails, currículums y documentos con el formato que espera un entorno profesional.',
  },
  {
    slug: 'ai',
    name: 'AI',
    label: 'Inteligencia Artificial',
    icon: 'Sparkles',
    description: 'Estructura la forma en que hablas con la IA.',
    longDescription:
      'Construye prompts claros y reutilizables para cualquier modelo de lenguaje.',
  },
  {
    slug: 'automation',
    name: 'AUTOMATION',
    label: 'Automatización',
    icon: 'Workflow',
    description: 'Elimina trabajo manual repetitivo.',
    longDescription:
      'Convierte notas y procesos en tareas y flujos accionables.',
  },
]

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug)
}

export const tools = [
  {
    slug: 'ai-writer',
    name: 'AI Writer',
    shortDescription: 'Mejora, reescribe y adapta cualquier texto.',
    description:
      'Reestructura tus textos aplicando un tono y un objetivo concretos: profesional, directo, cercano o persuasivo, sin perder tu mensaje original.',
    icon: 'PenLine',
    category: 'writing',
    howItWorks: [
      { title: 'Pega tu texto', description: 'Introduce el borrador que quieres mejorar, por corto o largo que sea.' },
      { title: 'Elige tono y objetivo', description: 'Selecciona cómo quieres que suene y para qué contexto se usará.' },
      { title: 'Recibe la versión mejorada', description: 'QuickMotionAI reestructura frases, ajusta el tono y elimina relleno.' },
    ],
    useCases: [
      'Adaptar un email informal a un tono profesional.',
      'Reescribir la descripción de un producto para que sea más directa.',
      'Ajustar el tono de un mensaje antes de enviarlo a un cliente.',
    ],
    tips: [
      'Cuanto más contexto des sobre el objetivo del texto, mejor será el resultado.',
      'Revisa siempre el resultado antes de usarlo: la IA propone, tú decides.',
    ],
    faq: [
      { q: '¿Cambia el significado de mi texto?', a: 'No. Reestructura la forma, no el contenido. Debes revisar el resultado para confirmar que refleja lo que querías decir.' },
      { q: '¿Funciona con textos largos?', a: 'Sí, aunque para documentos muy extensos es recomendable trabajar por secciones.' },
    ],
  },
  {
    slug: 'ai-summarizer',
    name: 'AI Summarizer',
    shortDescription: 'Convierte textos largos en información útil.',
    description:
      'Extrae las ideas más relevantes de un texto extenso y las presenta en un resumen breve y accionable.',
    icon: 'FileText',
    category: 'study',
    howItWorks: [
      { title: 'Pega el texto', description: 'Introduce el documento, artículo o informe que quieres resumir.' },
      { title: 'Elige la longitud', description: 'Define si necesitas un resumen breve o más detallado.' },
      { title: 'Obtén las ideas clave', description: 'Se extraen las frases con mayor peso informativo del texto.' },
    ],
    useCases: [
      'Resumir un artículo largo antes de una reunión.',
      'Extraer los puntos clave de un informe académico.',
      'Preparar un resumen rápido de una noticia extensa.',
    ],
    tips: [
      'Los textos bien estructurados en párrafos producen resúmenes más precisos.',
      'Usa el resumen como punto de partida, no como sustituto de la lectura completa.',
    ],
    faq: [
      { q: '¿Cómo decide qué frases son importantes?', a: 'Analiza la frecuencia y relevancia de los términos dentro del propio texto para identificar las frases con más peso informativo.' },
      { q: '¿Guarda mis documentos?', a: 'No. El procesamiento ocurre en tu sesión y no se almacena el contenido.' },
    ],
  },
  {
    slug: 'prompt-builder',
    name: 'Prompt Builder',
    shortDescription: 'Crea prompts claros y estructurados.',
    description:
      'Convierte una idea suelta en un prompt bien estructurado, con objetivo, tono y contexto definidos para obtener mejores resultados de cualquier IA.',
    icon: 'Sparkles',
    category: 'ai',
    howItWorks: [
      { title: 'Describe tu objetivo', description: 'Explica qué quieres conseguir con el prompt.' },
      { title: 'Selecciona objetivo y tono', description: 'Ajusta el contexto de uso y el estilo de respuesta que buscas.' },
      { title: 'Genera el prompt', description: 'Obtén una estructura lista para pegar en tu asistente de IA favorito.' },
    ],
    useCases: [
      'Crear un prompt reutilizable para generar contenido de marketing.',
      'Estructurar una consulta técnica compleja para un modelo de IA.',
      'Preparar prompts consistentes para un equipo de trabajo.',
    ],
    tips: [
      'Sé específico en la descripción: los prompts vagos generan resultados vagos.',
      'Guarda tus prompts más usados para reutilizarlos en el futuro.',
    ],
    faq: [
      { q: '¿Necesito saber de IA para usarlo?', a: 'No. La herramienta traduce tu objetivo a una estructura de prompt clara automáticamente.' },
      { q: '¿Funciona con cualquier modelo de IA?', a: 'Sí, el prompt generado es independiente del proveedor y puede usarse en cualquier asistente de texto.' },
    ],
  },
  {
    slug: 'email-assistant',
    name: 'Email Assistant',
    shortDescription: 'Escribe emails profesionales en segundos.',
    description:
      'Genera la estructura completa de un email profesional a partir del motivo, el destinatario y el tono que necesitas.',
    icon: 'Mail',
    category: 'business',
    howItWorks: [
      { title: 'Indica el motivo', description: 'Describe brevemente de qué trata el email.' },
      { title: 'Define destinatario y tono', description: 'Ajusta el nivel de formalidad según el contexto.' },
      { title: 'Copia el resultado', description: 'Obtén un email completo con asunto, cuerpo y cierre.' },
    ],
    useCases: [
      'Redactar un email de seguimiento a un cliente.',
      'Escribir una respuesta formal a una consulta.',
      'Preparar un email de presentación profesional.',
    ],
    tips: [
      'Incluye el nombre del destinatario si quieres un resultado más personalizado.',
      'Revisa siempre los datos concretos (fechas, cifras, nombres) antes de enviar.',
    ],
    faq: [
      { q: '¿Puedo editar el resultado?', a: 'Sí, el texto generado es un punto de partida editable, no un envío automático.' },
      { q: '¿Envía el email por mí?', a: 'No. QuickMotionAI nunca envía comunicaciones en tu nombre; solo genera el contenido.' },
    ],
  },
  {
    slug: 'smart-planner',
    name: 'Smart Planner',
    shortDescription: 'Convierte objetivos en planes accionables.',
    description:
      'Introduce un objetivo y obtén un plan estructurado en pasos concretos, priorizados y listos para ejecutar.',
    icon: 'CalendarCheck',
    category: 'productivity',
    howItWorks: [
      { title: 'Describe tu objetivo', description: 'Explica qué quieres lograr y en cuánto tiempo.' },
      { title: 'Ajusta el alcance', description: 'Define si es un objetivo semanal, mensual o de proyecto.' },
      { title: 'Recibe el plan', description: 'Obtén una lista de pasos ordenados por prioridad.' },
    ],
    useCases: [
      'Planificar el lanzamiento de un proyecto personal.',
      'Organizar los pasos de un objetivo de estudio.',
      'Estructurar una semana de trabajo con prioridades claras.',
    ],
    tips: [
      'Cuanto más concreto sea el objetivo, más útil será el plan.',
      'Revisa y ajusta el plan cada semana según tu progreso real.',
    ],
    faq: [
      { q: '¿El plan se sincroniza con mi calendario?', a: 'Todavía no, pero la arquitectura está preparada para integrarlo en una fase posterior.' },
      { q: '¿Sirve para proyectos de equipo?', a: 'Sí, aunque está optimizado para planificación individual.' },
    ],
  },
  {
    slug: 'cv-builder',
    name: 'CV Builder',
    shortDescription: 'Transforma experiencia en un CV más claro.',
    description:
      'Estructura tu experiencia, formación y habilidades en un formato de currículum limpio y profesional.',
    icon: 'FileUser',
    category: 'business',
    howItWorks: [
      { title: 'Añade tus datos', description: 'Introduce experiencia, formación y habilidades clave.' },
      { title: 'Elige el enfoque', description: 'Selecciona el sector o tipo de puesto al que te diriges.' },
      { title: 'Genera el formato', description: 'Obtén una estructura de CV clara, lista para adaptar.' },
    ],
    useCases: [
      'Ordenar experiencia dispersa en un formato coherente.',
      'Adaptar un CV existente a un nuevo sector.',
      'Preparar una primera versión de CV desde cero.',
    ],
    tips: [
      'Prioriza los logros medibles sobre las tareas genéricas.',
      'Adapta el CV a cada oferta a la que apliques.',
    ],
    faq: [
      { q: '¿Puedo descargar el CV en PDF?', a: 'Puedes copiar el resultado y darle formato en tu editor de documentos preferido.' },
      { q: '¿Guarda mis datos personales?', a: 'No, el procesamiento es local a tu sesión.' },
    ],
  },
  {
    slug: 'meeting-to-tasks',
    name: 'Meeting → Tasks',
    shortDescription: 'Convierte notas en tareas concretas.',
    description:
      'Pega las notas de una reunión y obtén una lista de tareas accionables, separadas de los puntos informativos.',
    icon: 'ClipboardList',
    category: 'automation',
    howItWorks: [
      { title: 'Pega tus notas', description: 'Introduce las notas o el acta de la reunión, en cualquier formato.' },
      { title: 'Procesa el contenido', description: 'Se identifican los fragmentos con acciones pendientes.' },
      { title: 'Obtén tu lista de tareas', description: 'Recibe una lista clara, lista para tu gestor de tareas.' },
    ],
    useCases: [
      'Convertir el acta de una reunión en tareas para el equipo.',
      'Extraer compromisos de una llamada con un cliente.',
      'Organizar próximos pasos tras una sesión de brainstorming.',
    ],
    tips: [
      'Las notas con verbos de acción (enviar, revisar, preparar) generan mejores resultados.',
      'Revisa la lista final para confirmar responsables y fechas.',
    ],
    faq: [
      { q: '¿Detecta quién es responsable de cada tarea?', a: 'Si el nombre aparece junto a la acción en tus notas, se incluye en la tarea generada.' },
      { q: '¿Funciona con notas desordenadas?', a: 'Sí, aunque cuanto más clara sea la nota original, más precisa será la lista de tareas.' },
    ],
  },
  {
    slug: 'text-translator',
    name: 'Text Translator',
    shortDescription: 'Adapta textos a diferentes idiomas y tonos.',
    description:
      'Traduce tu texto a otro idioma manteniendo el sentido original, como base para adaptarlo después al tono que necesites.',
    icon: 'Languages',
    category: 'writing',
    howItWorks: [
      { title: 'Escribe o pega tu texto', description: 'Introduce el contenido que quieres traducir.' },
      { title: 'Elige idioma de origen y destino', description: 'Selecciona los idiomas con los que quieres trabajar.' },
      { title: 'Obtén la traducción', description: 'Recibe el texto traducido, listo para revisar y adaptar.' },
    ],
    useCases: [
      'Traducir un email antes de enviarlo a un cliente internacional.',
      'Adaptar una descripción de producto a otro idioma.',
      'Entender rápidamente un texto en un idioma que no dominas.',
    ],
    tips: [
      'Revisa siempre la traducción de textos con contenido técnico o legal.',
      'Para textos muy largos, traduce por párrafos para mayor precisión.',
    ],
    faq: [
      { q: '¿Qué motor de traducción utiliza?', a: 'Utiliza un servicio de traducción externo de terceros. La calidad puede variar según el idioma y la longitud del texto.' },
      { q: '¿Guarda el texto que traduzco?', a: 'No, el texto se envía únicamente al servicio de traducción para procesar la solicitud puntual.' },
    ],
  },
]

export function getToolBySlug(slug) {
  return tools.find((t) => t.slug === slug)
}

export function getToolsByCategory(categorySlug) {
  return tools.filter((t) => t.category === categorySlug)
}

export function getRelatedTools(slug, limit = 3) {
  const current = getToolBySlug(slug)
  if (!current) return []
  return tools.filter((t) => t.slug !== slug && t.category === current.category).slice(0, limit).concat(
    tools.filter((t) => t.slug !== slug && t.category !== current.category)
  ).slice(0, limit)
}

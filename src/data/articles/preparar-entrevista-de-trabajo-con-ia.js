export default {
  slug: 'preparar-entrevista-de-trabajo-con-ia',
  title: 'Cómo preparar una entrevista de trabajo con ayuda de IA',
  excerpt:
    'La IA no puede hacer la entrevista por ti, pero sí ayudarte a preparar preguntas probables, estructurar tus respuestas y ensayar. Método paso a paso con prompts.',
  category: 'Negocio',
  date: '2026-10-01',
  body: [
    { type: 'p', content: 'Preparar una entrevista suele significar imaginar preguntas al azar y repasarlas mentalmente la noche anterior. Usada con criterio, la IA puede convertir esa preparación en algo más estructurado: generar preguntas probables para el puesto concreto, ayudarte a ordenar ejemplos de tu experiencia y hacer de entrevistador para que ensayes. Lo que no puede hacer es vivir tu experiencia por ti ni sonar como tú, y una entrevista se nota enseguida cuando las respuestas están memorizadas.' },
    { type: 'p', content: 'Este método tiene cuatro pasos. Necesitas tres cosas a mano: la descripción de la oferta, tu CV y media hora.' },

    { type: 'h2', content: 'Paso 1: entiende qué busca la empresa' },
    { type: 'p', content: 'Lee la oferta y subraya lo que se repite: competencias, herramientas, tipo de equipo. Después pide a la IA que te ayude a ver qué se está valorando en realidad:' },
    { type: 'example', title: 'Prompt para analizar la oferta', content: 'Esta es la oferta de empleo: [pega la oferta].\n\nExtrae: 1) las 5 competencias más importantes que parecen buscar, 2) los requisitos imprescindibles frente a los deseables, 3) qué problema probable tiene el equipo que contrata. Basa todo únicamente en el texto; si algo es una suposición tuya, márcalo como tal.' },

    { type: 'h2', content: 'Paso 2: genera preguntas probables para este puesto' },
    { type: 'p', content: 'Buscar "preguntas de entrevista" en general da listas genéricas. Es mucho más útil pedir preguntas ajustadas a la oferta y a tu perfil, incluidas las incómodas:' },
    { type: 'example', title: 'Prompt para generar preguntas', content: 'Con la oferta anterior y este resumen de mi CV [pega un resumen], propón 12 preguntas que podrían hacerme: 4 sobre mi experiencia, 3 técnicas o de situaciones reales del puesto, 3 de comportamiento ("cuéntame una vez que...") y 2 incómodas (por ejemplo, sobre huecos en el CV o falta de experiencia en algún requisito).' },
    { type: 'p', content: 'Presta atención especial a las preguntas incómodas. Son las que más conviene preparar de antemano y las que menos ensayamos por instinto.' },

    { type: 'h2', content: 'Paso 3: construye respuestas con ejemplos reales' },
    { type: 'p', content: 'Para las preguntas de comportamiento, una estructura muy utilizada es situación, tarea, acción y resultado. Se trata de contar una historia breve y concreta, no de enumerar cualidades. Primero escribe tú, con tus palabras, los cuatro puntos; después, si quieres, pide ayuda para ordenarlos:' },
    { type: 'example', title: 'Respuesta estructurada', content: 'Pregunta: Cuéntame una vez que tuviste que gestionar un conflicto en un equipo.\n\nSituación: En un proyecto de rediseño, dos compañeros no se ponían de acuerdo sobre prioridades.\nTarea: Yo coordinaba el calendario y necesitaba desbloquearlo.\nAcción: Hablé con cada uno por separado, reuní las dos posturas en una tabla y propuse una prueba de una semana con cada enfoque.\nResultado: Elegimos uno con datos y entregamos con dos días de margen.' },
    { type: 'p', content: 'Importante: la historia debe ser verdadera. Pide a la IA que te ayude a ordenarla y acortarla, no a inventarla. Un entrevistador experimentado hará una pregunta de seguimiento, y si la historia no es tuya, se notará.' },

    { type: 'h2', content: 'Paso 4: ensaya con la IA como entrevistador' },
    { type: 'p', content: 'Practicar en voz alta es lo que más mejora el resultado, y una IA puede hacer de entrevistador paciente:' },
    { type: 'example', title: 'Prompt para ensayar', content: 'Quiero hacer un simulacro de entrevista para el puesto de [puesto] en una empresa de [sector]. Hazme una pregunta cada vez, espera mi respuesta y luego: 1) dime qué ha funcionado, 2) señala qué faltaba o era vago, 3) hazme una pregunta de seguimiento como lo haría un entrevistador real. Empieza por la primera pregunta.' },
    { type: 'p', content: 'Responde en voz alta antes de escribir la respuesta; así entrenas lo que realmente ocurrirá. Después de cada ronda, anota las dos cosas que mejorarías.' },

    { type: 'h2', content: 'Prepara tus propias preguntas' },
    { type: 'p', content: 'Una entrevista funciona en dos direcciones, y llevar preguntas propias demuestra interés genuino. Pide ideas, pero elige las que de verdad te importen: cómo es un día normal en el puesto, cómo se mide el éxito en los primeros seis meses, cómo está formado el equipo y cómo se toman las decisiones.' },

    { type: 'h2', content: 'Qué evitar' },
    { type: 'ul', items: [
      'Memorizar respuestas generadas: suenan artificiales y se descomponen ante una pregunta inesperada.',
      'Inventar logros o cifras. Cualquier dato puede comprobarse o sondearse.',
      'Pegar documentos internos o confidenciales de anteriores empleos en una herramienta externa.',
      'Usar la IA durante la entrevista si el proceso no lo permite: puede estar prohibido y es fácil de detectar.',
    ] },
    { type: 'p', content: 'La preparación con IA funciona mejor como un entrenador, no como un guionista. Si además quieres mejorar el CV con el que vas a la entrevista, CV Builder te ayuda a ordenar tu experiencia en una estructura clara.' },
    { type: 'cta', to: '/tools/cv-builder', label: 'Ordenar mi CV' },
  ],
}

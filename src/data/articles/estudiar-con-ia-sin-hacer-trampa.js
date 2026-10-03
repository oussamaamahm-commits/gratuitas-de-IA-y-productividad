export default {
  slug: 'estudiar-con-ia-sin-hacer-trampa',
  title: 'Cómo estudiar con IA sin hacer trampa a tu propio aprendizaje',
  excerpt:
    'La IA puede acelerar la comprensión o sustituirla por completo. Técnicas de estudio que funcionan con IA: explicar, practicar, preguntarte y comprobar.',
  category: 'Estudio',
  date: '2026-10-02',
  body: [
    { type: 'p', content: 'La IA puede ser una herramienta de estudio muy potente o una forma sofisticada de evitar aprender. La diferencia no está en usarla o no, sino en qué haces con ella: si le pides respuestas para copiar, estás delegando justo lo que necesitas entrenar; si la usas para que te explique, te pregunte y te corrija, funciona como un tutor siempre disponible.' },
    { type: 'p', content: 'Hay una idea de fondo respaldada por la investigación sobre aprendizaje: se aprende más recuperando información de memoria y explicándola que releyendo o subrayando. Las técnicas que siguen usan la IA para facilitar precisamente eso.' },

    { type: 'h2', content: 'Técnica 1: pide explicaciones, no solo respuestas' },
    { type: 'p', content: 'Preguntar "¿cuál es la respuesta?" produce un dato. Preguntar "¿por qué funciona así?" produce comprensión. Cuando algo no te cuadra, pídelo en el nivel que necesitas:' },
    { type: 'example', title: 'Prompt para entender', content: 'Explícame [concepto] como si fuera alguien que lo ve por primera vez. Usa un ejemplo de la vida cotidiana y después uno técnico. Termina con tres preguntas para comprobar si lo he entendido. No me des las respuestas todavía.' },

    { type: 'h2', content: 'Técnica 2: explícalo tú primero' },
    { type: 'p', content: 'Después de estudiar un tema, intenta explicarlo con tus palabras, en voz alta o por escrito, sin mirar los apuntes. Los huecos que descubras son lo que realmente tienes que estudiar. Después puedes pedir a la IA que actúe como corrector:' },
    { type: 'example', title: 'Prompt para corregir tu explicación', content: 'Voy a explicarte [tema] con mis palabras. Léelo y dime: 1) qué está correcto, 2) qué está incorrecto o impreciso, 3) qué se me ha olvidado de lo esencial. No reescribas mi explicación; solo señala los puntos.\n\nMi explicación: [escribe aquí]' },
    { type: 'p', content: 'Con esta técnica la IA no hace el trabajo por ti: lo evalúa. Por eso funciona.' },

    { type: 'h2', content: 'Técnica 3: practica la recuperación con preguntas' },
    { type: 'p', content: 'Pedir preguntas de repaso sobre algo que acabas de estudiar es mucho más efectivo que pedir directamente un resumen. Intentar recordar fortalece la memoria; releer, mucho menos.' },
    { type: 'example', title: 'Prompt para practicar', content: 'Estoy estudiando [asignatura y tema]. Hazme 8 preguntas de repaso, de una en una, mezclando definiciones, aplicación y "por qué". Espera mi respuesta antes de hacerme la siguiente. Al final dime en qué subtemas he fallado más.' },

    { type: 'h2', content: 'Técnica 4: resume con tus propias palabras después' },
    { type: 'p', content: 'Leer un resumen generado por una IA no equivale a haber entendido el tema. Un buen orden es leer el material original, escribir tú un resumen de unas tres líneas sin mirar, y usar el de la IA solo para contrastar qué se te escapó. Así el resumen es una herramienta de corrección y no un sustituto del esfuerzo.' },

    { type: 'h2', content: 'Técnica 5: espaciar el repaso' },
    { type: 'p', content: 'Repasar a intervalos crecientes (al día siguiente, a los tres días, a la semana) funciona mejor que estudiar todo de una vez. Puedes pedir a la IA que prepare un calendario de repaso a partir de tus fechas de examen y de los temas pendientes, y que genere nuevas preguntas para cada sesión en lugar de repetir siempre las mismas.' },

    { type: 'h2', content: 'Qué no debes dejar que haga la IA' },
    { type: 'ul', items: [
      'Los trabajos o ejercicios que deben evaluar tu aprendizaje, salvo que el profesor lo permita expresamente. Muchos centros tienen normas sobre el uso de IA; conócelas.',
      'Las citas y la bibliografía: puede inventar autores, títulos y referencias que parecen reales y no existen. Comprueba cada fuente en una base fiable.',
      'La confirmación de que algo es verdad. Contrasta datos importantes con tus apuntes, el libro de texto o fuentes académicas.',
    ] },

    { type: 'h2', content: 'Un ejemplo de sesión de estudio' },
    { type: 'ol', items: [
      'Lee el tema una vez y subraya lo que no entiendas (20 minutos).',
      'Pide explicaciones solo de los puntos subrayados (10 minutos).',
      'Escribe tu propio resumen sin mirar (10 minutos).',
      'Pide que te corrija y que te haga preguntas de repaso (15 minutos).',
      'Anota los tres fallos de la sesión y empieza por ellos mañana.',
    ] },
    { type: 'p', content: 'Con esta rutina, la IA ahorra el tiempo de buscar explicaciones y de preparar preguntas, pero el esfuerzo de recordar y explicar sigue siendo tuyo, que es lo que realmente produce aprendizaje. Para trabajar con textos largos, AI Summarizer te devuelve las frases clave de un documento para contrastarlas con tu propio resumen.' },
    { type: 'cta', to: '/tools/ai-summarizer', label: 'Probar AI Summarizer' },
  ],
}

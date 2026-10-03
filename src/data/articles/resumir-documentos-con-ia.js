export default {
  slug: 'resumir-documentos-con-ia',
  title: 'Cómo resumir documentos con IA (y cuándo no fiarte del resumen)',
  excerpt:
    'Resumir bien es decidir qué importa. Diferencias entre resumir y sintetizar, prompts que funcionan, y cómo comprobar que el resumen no distorsiona el original.',
  category: 'Estudio',
  date: '2026-09-24',
  body: [
    { type: 'p', content: 'Un buen resumen no elimina palabras al azar: conserva lo que el lector necesita para entender o decidir y descarta lo demás. Eso es verdad si lo haces a mano, y también si lo hace una IA. La diferencia es que a mano sabes qué criterio has aplicado, y con una IA tienes que dárselo tú.' },

    { type: 'h2', content: 'Resumir y sintetizar no son lo mismo' },
    { type: 'p', content: 'Se usan como sinónimos, pero responden a necesidades distintas, y elegir mal hace perder tiempo.' },
    { type: 'ul', items: [
      'Resumir toma un único documento y lo reduce conservando sus ideas principales, en el mismo orden y sin añadir nada externo. Sirve para decidir si vale la pena leerlo entero o para recordar su contenido.',
      'Sintetizar combina varias fuentes en una idea nueva: identifica coincidencias, contradicciones y patrones entre ellas. Sirve para tomar una decisión informada o para escribir un informe.',
    ] },
    { type: 'p', content: 'Si tienes cinco artículos sobre un mismo tema, cinco resúmenes no son una síntesis: son cinco resúmenes. La síntesis responde a una pregunta ("¿qué dicen en común y en qué discrepan?") y para eso tienes que formularla.' },

    { type: 'h2', content: 'Dos formas de resumir: extractiva y abstractiva' },
    { type: 'p', content: 'Conviene conocer la diferencia porque cambia lo que puedes esperar de cada herramienta:' },
    { type: 'ul', items: [
      'Extractiva: selecciona las frases más relevantes del texto original y las junta. No inventa nada, pero puede quedar entrecortada. La herramienta AI Summarizer de este sitio funciona así: puntúa las frases según la frecuencia de los términos importantes y devuelve las mejores respetando su orden.',
      'Abstractiva: reescribe con palabras nuevas, como haría una persona. Resulta más fluida, pero puede introducir imprecisiones o matices que no estaban en el original. Es lo que hacen los modelos de lenguaje.',
    ] },
    { type: 'p', content: 'Ninguna es mejor en todos los casos. Para contenido en el que cada dato importa (un contrato, un informe técnico), la extractiva es más segura. Para entender rápido un artículo largo, la abstractiva suele ser más cómoda.' },

    { type: 'h2', content: 'Prompts que producen mejores resúmenes' },
    { type: 'p', content: 'La instrucción "resume esto" deja demasiadas decisiones a la IA. Prueba con estructuras como estas:' },
    { type: 'example', title: 'Resumen para decidir', content: 'Resume el siguiente texto en 5 puntos de una línea cada uno. Lector: [cargo o perfil], que necesita decidir si [decisión]. Prioriza datos, plazos y consecuencias. Si falta información relevante para decidir, indícalo al final.\n\n[pega el texto]' },
    { type: 'example', title: 'Resumen para estudiar', content: 'Resume este capítulo para repasarlo antes de un examen. Incluye: las 5 ideas principales, las definiciones clave con sus propias palabras y 3 preguntas de repaso con su respuesta.\n\n[pega el texto]' },
    { type: 'example', title: 'Síntesis de varias fuentes', content: 'Te paso tres textos sobre [tema]. No los resumas por separado. Dime: 1) en qué coinciden, 2) en qué se contradicen, 3) qué pregunta queda sin responder en ninguno. Cita de qué texto sale cada afirmación.\n\n[texto 1] [texto 2] [texto 3]' },

    { type: 'h2', content: 'Cómo comprobar que el resumen es fiel' },
    { type: 'p', content: 'Un resumen que suena bien puede estar equivocado. Antes de usarlo para algo importante, haz estas comprobaciones, que llevan pocos minutos:' },
    { type: 'ol', items: [
      'Cifras y nombres: busca en el original cada dato que aparezca en el resumen. Es el tipo de error más frecuente.',
      'Matices: revisa las palabras que cambian el sentido ("podría", "en algunos casos", "salvo que"). Los resúmenes tienden a eliminarlas y convertir una posibilidad en una afirmación.',
      'Omisiones: pregúntate qué quedó fuera. Pide a la IA "qué información importante del texto no has incluido y por qué".',
      'Atribuciones: si el texto cita a alguien, comprueba que el resumen no le atribuya algo que no dijo.',
    ] },

    { type: 'h2', content: 'Cuándo no deberías confiar solo en un resumen' },
    { type: 'p', content: 'Hay documentos para los que un resumen no sustituye a la lectura: contratos, condiciones de servicio, informes médicos, sentencias, documentación técnica de seguridad. Úsalo para orientarte y localizar las partes que merecen atención, pero lee íntegras las cláusulas o secciones que afecten a una decisión importante, y consulta a un profesional cuando corresponda.' },

    { type: 'h2', content: 'Resumir para aprender, no solo para ahorrar tiempo' },
    { type: 'p', content: 'Si lo que quieres es entender un tema, leer un resumen ajeno es una forma pasiva de estudiar. Funciona mejor este orden: lee el original, escribe tú un resumen de tres líneas sin mirar, y usa el de la IA solo para contrastar qué se te escapó. Así el resumen se convierte en una herramienta de corrección y no en un sustituto del esfuerzo de comprender.' },
    { type: 'p', content: 'Si quieres probar el enfoque extractivo, puedes pegar un texto en AI Summarizer, elegir la longitud y comparar el resultado con tu propio resumen.' },
    { type: 'cta', to: '/tools/ai-summarizer', label: 'Probar AI Summarizer' },
  ],
}

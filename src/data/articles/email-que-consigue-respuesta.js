export default {
  slug: 'email-que-consigue-respuesta',
  title: 'Cómo escribir un email profesional que consiga respuesta',
  excerpt:
    'Asunto, primeras líneas, petición concreta y tono: la estructura que hace fácil responder, con ejemplos antes y después y una plantilla reutilizable.',
  category: 'Negocio',
  date: '2026-09-29',
  body: [
    { type: 'p', content: 'Un email bien escrito no es el más largo ni el más formal: es el que hace fácil para la otra persona entender qué le pides y responder rápido. La mayoría de los correos que se quedan sin respuesta no fallan en el tono, fallan en la estructura: el asunto no dice nada, el motivo aparece al final y la petición es tan vaga que contestar exige pensar.' },
    { type: 'p', content: 'Imagina a alguien que abre su bandeja con cuarenta correos. Decide en segundos cuáles lee ahora, cuáles después y cuáles nunca. Todo lo que sigue consiste en facilitar que el tuyo sea de los primeros.' },

    { type: 'h2', content: 'El asunto decide si se abre' },
    { type: 'p', content: 'El asunto es lo único que ve el destinatario antes de decidir. Un asunto genérico compite con decenas de correos parecidos; uno específico se distingue. Tres reglas sencillas:' },
    { type: 'ul', items: [
      'Sé específico: "Reunión" dice mucho menos que "Confirmación reunión jueves 10 h — proyecto web".',
      'Indica la acción si la hay: "Necesito tu confirmación antes del viernes" se prioriza distinto a un asunto neutro.',
      'Evita las mayúsculas sostenidas y los signos de exclamación: generan desconfianza y pueden acabar en la carpeta de spam.',
    ] },
    { type: 'example', title: 'Asuntos: antes y después', content: 'Antes: Consulta\nDespués: Duda sobre la factura 2024-118 (fecha de vencimiento)\n\nAntes: Información\nDespués: Propuesta de calendario para la formación de octubre\n\nAntes: URGENTE!!!\nDespués: Necesito tu OK al presupuesto antes del miércoles' },

    { type: 'h2', content: 'Ve al grano en las dos primeras líneas' },
    { type: 'p', content: 'La mayoría decide en las dos primeras líneas si va a leer el resto. Empieza por el motivo, no por un saludo extenso ni por el contexto completo. Si hace falta contexto, va después de la petición. Compara:' },
    { type: 'example', title: 'Estructura habitual (floja)', content: 'Hola Marta, espero que estés bien. Como sabes, hace unas semanas empezamos a trabajar en el rediseño de la web y ha habido varias reuniones en las que se comentaron distintas opciones. Quería comentarte que estoy preparando la propuesta final y que...' },
    { type: 'example', title: 'Estructura clara', content: 'Hola Marta:\n\nNecesito que me confirmes antes del viernes cuál de las dos propuestas de diseño prefieres para poder entregar la versión final el lunes.\n\nTe adjunto ambas con un resumen de diferencias en una página.' },

    { type: 'h2', content: 'Pide una acción concreta' },
    { type: 'p', content: '"Avísame si te parece bien" genera menos respuestas que "¿Puedes confirmarme antes del viernes si el jueves a las 10 h te viene bien?". Cuanto más concreta es la petición, más fácil es contestar en diez segundos. Algunas pautas:' },
    { type: 'ul', items: [
      'Una petición principal por correo. Si necesitas tres cosas distintas, quizá sean tres correos o una lista numerada.',
      'Facilita la respuesta: ofrece dos opciones concretas en lugar de preguntar "¿cuándo te va bien?".',
      'Incluye una fecha límite y explica brevemente por qué existe.',
      'Si la respuesta puede ser un "sí" o un "no", plantéalo así.',
    ] },

    { type: 'h2', content: 'El tono importa más que la longitud' },
    { type: 'p', content: 'Un correo corto y cordial suele funcionar mejor que uno largo y excesivamente formal. Ajusta el tono a la relación real, no a la que crees que "toca". Con un cliente nuevo o un cargo superior, mantén un registro más formal; con un compañero con el que hablas a diario, un "Hola, Laura" y frases directas son perfectamente profesionales. Evita las fórmulas vacías ("espero que este mensaje te encuentre bien") salvo que de verdad aporten calidez.' },

    { type: 'h2', content: 'Una plantilla reutilizable' },
    { type: 'example', title: 'Plantilla básica', content: 'Asunto: [tema concreto] — [acción o fecha]\n\nHola [nombre]:\n\n[Petición en una frase, con fecha si hay plazo].\n\n[Contexto mínimo necesario, en 1-3 frases].\n\n[Si procede: opciones concretas o archivos adjuntos].\n\nGracias de antemano.\n[Tu nombre]' },

    { type: 'h2', content: 'Cómo usar la IA para redactar emails' },
    { type: 'p', content: 'La IA es útil para dar forma a un borrador, ajustar el tono o acortar un mensaje largo. Para obtener un resultado aprovechable, dale los datos reales y dile qué quieres conseguir:' },
    { type: 'example', title: 'Prompt para un borrador', content: 'Redacta un email para [destinatario y cargo]. Objetivo: [lo que necesito conseguir]. Datos que debes incluir tal cual: [fechas, cifras, nombres]. Tono: [formal/cercano]. Máximo 120 palabras. No añadas datos que no te he dado y deja la petición en la primera frase.' },
    { type: 'p', content: 'Antes de enviar, revisa nombres, fechas, cifras y adjuntos. Es el tipo de error que más daño hace y que más fácil se cuela en un borrador generado automáticamente. Email Assistant, la herramienta de este sitio, genera la estructura básica de un correo (asunto, saludo, motivo y cierre) a partir del motivo y el tono, y nunca envía nada por ti.' },

    { type: 'h2', content: 'Antes de pulsar enviar' },
    { type: 'ol', items: [
      '¿El asunto describe el contenido y, si procede, la acción?',
      '¿La petición está en las dos primeras líneas?',
      '¿Se entiende qué tiene que hacer el destinatario y para cuándo?',
      '¿He revisado nombres, cifras, fechas y adjuntos?',
      '¿Lo leería yo hasta el final si lo recibiera?',
    ] },
    { type: 'cta', to: '/tools/email-assistant', label: 'Probar Email Assistant' },
  ],
}

export default {
  slug: 'traducir-sin-perder-el-tono',
  title: 'Cómo traducir textos sin perder el tono original',
  excerpt:
    'Una traducción correcta puede sonar distinta al original. Cómo traducir el sentido y no las palabras, ajustar el registro y saber cuándo hace falta un profesional.',
  category: 'Escritura',
  date: '2026-10-03',
  body: [
    { type: 'p', content: 'Traducir bien no es cambiar las palabras de un idioma a otro: es conseguir que el texto produzca el mismo efecto en el lector. Un mensaje cercano en español puede volverse frío o excesivamente formal si se traduce palabra por palabra al inglés, y un correo directo en alemán puede sonar brusco si se traslada tal cual al español. Las traducciones automáticas han mejorado mucho, pero el tono sigue siendo lo primero que se pierde.' },
    { type: 'p', content: 'Esta guía explica qué hacer antes, durante y después de traducir un texto para que se entienda y suene como debe, y señala los casos en los que no debes fiarte solo de una herramienta automática.' },

    { type: 'h2', content: 'Antes de traducir: simplifica el original' },
    { type: 'p', content: 'Un texto ambiguo en el idioma de origen produce una traducción ambigua. Si puedes editar el original, hazlo antes: frases más cortas, sin dobles sentidos y sin expresiones que solo tienen sentido en tu cultura. Compara:' },
    { type: 'example', title: 'Original difícil de traducir', content: 'Nos vamos a poner las pilas para que, sin que sirva de precedente, tengáis el informe el lunes a primera hora, que luego pasa lo que pasa.' },
    { type: 'example', title: 'Original claro', content: 'Haremos un esfuerzo extra para entregar el informe el lunes a primera hora. Es una excepción, porque normalmente necesitamos más plazo.' },
    { type: 'p', content: 'La segunda versión se traduce mejor porque dice exactamente lo que quiere decir. Las expresiones coloquiales, los refranes y las ironías son los puntos donde las traducciones automáticas más fallan.' },

    { type: 'h2', content: 'Traduce el sentido, no la estructura' },
    { type: 'p', content: 'Cada idioma organiza las ideas a su manera, y un calco literal suena extraño aunque cada palabra esté bien traducida. Algunas diferencias frecuentes entre español e inglés:' },
    { type: 'ul', items: [
      'El inglés tolera menos la repetición de pronombres y de estructuras largas; el español admite oraciones más extensas.',
      'Muchas expresiones no se pueden traducir literalmente: "estar en las nubes" no es "to be in the clouds" en el sentido habitual.',
      'Los falsos amigos engañan incluso a hablantes avanzados: "actually" no es "actualmente", "embarrassed" no es "embarazada".',
      'El nivel de formalidad cambia: el "usted" y el "tú" no tienen un equivalente exacto en inglés, así que el registro se transmite con otras elecciones de vocabulario.',
    ] },

    { type: 'h2', content: 'Después de traducir: revisa el registro' },
    { type: 'p', content: 'Una traducción automática tiende a un registro neutro. Si el original era informal, divertido o muy directo, el resultado puede perder esa personalidad. Léela en voz alta pensando en el lector final y pregúntate si así lo diría un hablante nativo en esa situación. Ajusta las frases que suenen rígidas y comprueba que el nivel de cortesía encaja con el contexto: un correo a un cliente no es igual que un mensaje a un compañero.' },

    { type: 'h2', content: 'Un método práctico en cuatro pasos' },
    { type: 'ol', items: [
      'Revisa y simplifica el texto original.',
      'Traduce con una herramienta, por frases o párrafos cortos, no en un único bloque enorme.',
      'Haz una traducción inversa de las partes clave: vuelve a traducir el resultado a tu idioma y comprueba que el sentido se mantiene.',
      'Pide a un hablante nativo que lo lea, si el texto es importante.',
    ] },
    { type: 'p', content: 'La traducción inversa no es perfecta, pero detecta con rapidez las frases que cambian de significado, y cuesta apenas un minuto.' },

    { type: 'h2', content: 'Usar IA para ajustar el tono' },
    { type: 'p', content: 'Los modelos de lenguaje son útiles para adaptar el registro de un texto ya traducido. Dile para quién es y qué tono quieres:' },
    { type: 'example', title: 'Prompt para ajustar el tono', content: 'Este es un texto traducido del español al inglés para un cliente de [sector] con el que tengo una relación cercana: [pega el texto].\n\nRevísalo para que suene natural para un hablante nativo, con un tono profesional pero cálido. No cambies datos, cifras ni nombres. Marca con [?] cualquier frase donde dudes del sentido original.' },

    { type: 'h2', content: 'Cuándo no deberías fiarte solo de una traducción automática' },
    { type: 'ul', items: [
      'Contratos, documentos legales y normativa: un matiz mal traducido puede cambiar una obligación.',
      'Textos médicos o de seguridad, donde un error puede tener consecuencias graves.',
      'Material publicitario o de marca, donde el tono y los juegos de palabras son parte del mensaje.',
      'Documentos oficiales que requieren traducción jurada.',
    ] },
    { type: 'p', content: 'Para correos del día a día, mensajes comerciales sencillos o para entender el contenido de un texto en otro idioma, una traducción automática revisada es más que suficiente. La herramienta Text Translator de este sitio usa un servicio de traducción externo de terceros para textos cortos y puedes usarla como punto de partida para aplicar este método; el texto que introduces se envía a ese servicio únicamente para procesar la traducción puntual.' },
    { type: 'cta', to: '/tools/text-translator', label: 'Probar Text Translator' },
  ],
}

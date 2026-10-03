export default {
  slug: 'como-escribir-mejores-prompts',
  title: 'Cómo escribir mejores prompts: guía práctica con ejemplos',
  excerpt:
    'Un prompt es un encargo. Aprende a estructurarlo con rol, contexto, tarea, formato y restricciones, con ejemplos antes y después que puedes copiar.',
  category: 'IA',
  date: '2026-09-21',
  body: [
    { type: 'p', content: 'Un prompt es un encargo de trabajo. Si le dices a un compañero "hazme algo sobre marketing", volverá con preguntas o con algo que no era lo que querías. Una IA casi nunca pregunta: rellena los huecos con lo más probable, y lo más probable es un texto genérico. Escribir buenos prompts consiste, sobre todo, en cerrar esos huecos antes de que se rellenen solos.' },
    { type: 'p', content: 'Esta guía no promete trucos mágicos. Explica una estructura sencilla, la aplica a un ejemplo real con su versión floja y su versión mejorada, y termina con una lista de comprobación que puedes usar cada vez que escribas una instrucción.' },

    { type: 'h2', content: 'La anatomía de un prompt que funciona' },
    { type: 'p', content: 'Casi todos los prompts útiles contienen las mismas cinco piezas. No necesitas usarlas todas siempre, pero cuando el resultado no te convence, lo normal es que falte una de ellas:' },
    { type: 'ul', items: [
      'Rol: quién debería responder. "Actúa como editor de un blog de cocina" orienta el vocabulario y el nivel de detalle.',
      'Contexto: la situación, el público y el material de partida. Es la pieza que más se olvida y la que más cambia el resultado.',
      'Tarea: qué hay que hacer, expresado con un verbo claro (redactar, resumir, comparar, ordenar, revisar).',
      'Formato: cómo quieres recibir la respuesta (una lista, una tabla, tres párrafos, un máximo de 120 palabras).',
      'Restricciones: lo que debe evitarse, lo que no se puede inventar y el tono que se espera.',
    ] },

    { type: 'h2', content: 'Un ejemplo, antes y después' },
    { type: 'p', content: 'Imagina que vendes velas artesanales y necesitas la descripción de un producto para tu tienda online. Este es el prompt que la mayoría escribe al principio:' },
    { type: 'example', title: 'Prompt flojo', content: 'Escribe una descripción para una vela.' },
    { type: 'p', content: 'El resultado suele ser correcto y completamente intercambiable: "una vela acogedora, perfecta para cualquier ocasión". Podría describir cualquier vela del mundo porque la IA no sabe nada de la tuya. Ahora la misma petición con las cinco piezas:' },
    { type: 'example', title: 'Prompt mejorado', content: 'Actúa como redactor de una tienda online de velas artesanales de cera de soja.\n\nEscribe la descripción de producto de la vela "Bosque de noche": aroma a pino, cedro y un toque de vainilla, 40 horas de duración, tarro de vidrio reutilizable.\n\nPúblico: personas de 25 a 45 años que compran para regalar o para decorar su casa.\n\nTono cálido y sencillo. Evita frases hechas como "perfecta para cualquier ocasión". Máximo 90 palabras y termina con una frase que invite a comprar sin presionar.' },
    { type: 'p', content: 'Qué ha cambiado: hay un rol que fija el registro, un producto con datos reales que la IA no tiene que inventar, un público concreto, un tono definido, una lista de frases prohibidas y un límite de extensión. Ninguna de esas piezas es sofisticada; todas son información que tú ya tenías y que la IA no podía adivinar.' },

    { type: 'h2', content: 'Cinco reglas que mejoran casi cualquier prompt' },
    { type: 'h3', content: '1. Empieza por el objetivo, no por el formato' },
    { type: 'p', content: 'Antes de decidir cuántas palabras quieres, define para qué servirá el texto. No es lo mismo "un texto sobre nuestro servicio" que "un párrafo que explique a alguien que no nos conoce qué problema resolvemos y qué tiene que hacer para probarlo". El segundo da a la IA un criterio para decidir qué incluir y qué dejar fuera.' },
    { type: 'h3', content: '2. Da el material, no solo el tema' },
    { type: 'p', content: 'Si quieres que la IA resuma, reescriba o responda sobre algo concreto, pega el texto o los datos en el propio prompt. Pedir "resume el informe de ventas" sin adjuntarlo obliga a la IA a inventar un informe plausible, y ese es el origen de muchos errores que luego se atribuyen a la herramienta.' },
    { type: 'h3', content: '3. Di también lo que no quieres' },
    { type: 'p', content: 'Las restricciones negativas son baratas y eficaces: "sin tecnicismos", "sin introducción ni despedida", "no inventes cifras; si falta un dato, dilo". Una instrucción como la última reduce de forma notable las afirmaciones inventadas, aunque no las elimina del todo, así que sigue siendo necesario comprobar los datos.' },
    { type: 'h3', content: '4. Pide el formato exacto' },
    { type: 'p', content: 'Si vas a pegar el resultado en una hoja de cálculo, pide una tabla con columnas concretas. Si vas a leerlo en una reunión, pide cinco puntos de una línea. El formato es parte del encargo y te ahorra la edición posterior.' },
    { type: 'h3', content: '5. Enseña con un ejemplo' },
    { type: 'p', content: 'Cuando tienes un estilo muy concreto en mente, un ejemplo vale más que tres párrafos de descripción. Pega uno o dos modelos de lo que consideras bueno y pide que mantenga el mismo estilo:' },
    { type: 'example', title: 'Prompt con ejemplo', content: 'Voy a darte dos asuntos de email que me gustan. Escribe cinco más para una newsletter sobre productividad, con el mismo estilo (corto, concreto, sin mayúsculas ni signos de exclamación).\n\nEjemplo 1: tres tareas que puedes borrar hoy\nEjemplo 2: el correo que llevas una semana sin contestar' },

    { type: 'h2', content: 'Cómo iterar sin empezar de cero' },
    { type: 'p', content: 'El primer resultado casi nunca es el definitivo, y no pasa nada. Lo importante es corregir de forma concreta en lugar de reescribir todo el prompt. Algunas instrucciones de refinamiento que funcionan bien:' },
    { type: 'ul', items: [
      '"Hazlo un tercio más corto sin perder los datos."',
      '"Mantén la estructura pero cambia el tono a uno más directo."',
      '"Dame tres versiones distintas del primer párrafo."',
      '"Quita las frases que podrían aparecer en cualquier otro texto del sector."',
      '"¿Qué información te falta para hacerlo mejor?"',
    ] },
    { type: 'note', content: 'La última pregunta es de las más útiles. Si la IA te responde con tres datos que no le diste, ya sabes qué incluir en la siguiente versión del prompt.' },

    { type: 'h2', content: 'Errores frecuentes' },
    { type: 'ul', items: [
      'Pedir demasiadas cosas a la vez. Si necesitas un resumen, una crítica y una versión reescrita, hazlo en tres pasos; cada paso saldrá mejor.',
      'Instrucciones contradictorias, como "breve pero exhaustivo". La IA tendrá que elegir y no sabes cuál elegirá.',
      'Dar por hecho que conoce tu contexto: tu empresa, tu público, tus plazos. No lo conoce salvo que se lo cuentes.',
      'Copiar datos concretos del resultado (cifras, fechas, nombres, citas) sin comprobarlos.',
      'Pegar información confidencial o datos personales de terceros en herramientas externas sin saber cómo se tratan.',
    ] },

    { type: 'h2', content: 'Lista de comprobación antes de enviar' },
    { type: 'ol', items: [
      '¿Digo para qué se usará el resultado y quién lo leerá?',
      '¿He incluido el material de partida en lugar de solo nombrarlo?',
      '¿Está claro el formato y la extensión que espero?',
      '¿He indicado el tono y lo que debe evitarse?',
      '¿Sé cómo voy a comprobar los datos del resultado?',
    ] },
    { type: 'p', content: 'Si quieres practicar sin partir de una página en blanco, Prompt Builder convierte una descripción corta de tu objetivo en un prompt con rol, objetivo, tono y formato, y puedes copiarlo directamente para usarlo en el asistente que prefieras.' },
    { type: 'cta', to: '/tools/prompt-builder', label: 'Probar Prompt Builder' },
  ],
}

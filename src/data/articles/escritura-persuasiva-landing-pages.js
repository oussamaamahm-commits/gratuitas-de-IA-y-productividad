export default {
  slug: 'escritura-persuasiva-landing-pages',
  title: 'Escritura persuasiva para páginas de aterrizaje: qué decir y en qué orden',
  excerpt:
    'Una landing page convierte por cómo está escrita, no por lo bonita que sea. Titular, estructura por objeciones, prueba y llamada a la acción, con ejemplos.',
  category: 'Escritura',
  date: '2026-10-03',
  body: [
    { type: 'p', content: 'El diseño de una página de aterrizaje importa, pero lo que decide si alguien actúa o se va suele ser el texto: qué promete, en qué orden lo cuenta y qué pide al final. Persuadir, en este contexto, no significa manipular: significa ayudar a alguien a decidir con la información adecuada, explicada con claridad y sin trucos.' },
    { type: 'p', content: 'Una página de aterrizaje es una sola página con un solo objetivo (por ejemplo, que alguien pida un presupuesto o pruebe una herramienta). Este artículo recorre sus partes en el orden en que suele convenir contarlas.' },

    { type: 'h2', content: 'El titular debe responder "¿qué gano yo?"' },
    { type: 'p', content: 'El visitante decide en pocos segundos si se queda. Un titular centrado en tu producto ("La nueva plataforma de gestión integral") describe lo que eres; uno centrado en el resultado ("Entrega tus presupuestos en la mitad de tiempo") describe lo que el lector consigue. Compara:' },
    { type: 'example', title: 'Titulares: antes y después', content: 'Centrado en el producto: Software de facturación en la nube para pymes.\nCentrado en el resultado: Factura en dos minutos y cobra antes, sin hojas de cálculo.\n\nCentrado en la característica: Editor con plantillas inteligentes.\nCentrado en el resultado: Empieza tu próximo informe con el 70 % ya escrito.' },
    { type: 'p', content: 'Si usas cifras en un titular, deben ser reales y demostrables. Una promesa que no puedes cumplir se paga después en reembolsos, mala reputación y, en algunos sectores, en problemas legales.' },

    { type: 'h2', content: 'El subtítulo aclara cómo y para quién' },
    { type: 'p', content: 'Debajo del titular, una o dos frases deben dejar claro qué es, para quién es y cómo funciona. Es el sitio para la concreción: "Una herramienta gratuita que convierte tus notas de reunión en una lista de tareas con responsable y fecha, sin registrarte." Quien lea solo el titular y el subtítulo debería entender la oferta.' },

    { type: 'h2', content: 'Ordena el contenido por objeciones, no por características' },
    { type: 'p', content: 'En lugar de listar funciones en el orden que se te ocurre, ordénalas respondiendo a las dudas que tendría alguien antes de decidirse. Las objeciones más comunes se repiten en casi todos los sectores:' },
    { type: 'ul', items: [
      '¿Funciona para mi caso concreto?',
      '¿Es difícil de usar o de contratar?',
      '¿Cuánto cuesta y qué incluye exactamente?',
      '¿Qué pasa si no me convence?',
      '¿Puedo fiarme de vosotros?',
    ] },
    { type: 'p', content: 'Cada sección de la página puede contestar una de estas preguntas con un encabezado claro. Habla con clientes reales o revisa los correos que recibes: las preguntas que más se repiten son las objeciones que debes resolver en la página.' },

    { type: 'h2', content: 'Prueba, no adjetivos' },
    { type: 'p', content: 'Decir que tu producto es "innovador" o "líder" no convence a nadie, porque cualquiera puede decirlo. Convencen los hechos comprobables: un ejemplo de resultado, una captura de cómo funciona, una garantía clara, el nombre de un cliente que haya aceptado ser citado. Si todavía no tienes testimonios, no los inventes; es mejor mostrar el producto en acción o explicar con transparencia cómo trabajas.' },

    { type: 'h2', content: 'Una sola llamada a la acción' },
    { type: 'p', content: 'Varias llamadas a la acción distintas diluyen la decisión. Una página con un único objetivo claro suele funcionar mejor que otra que intenta conseguir varias cosas a la vez. La llamada a la acción debe describir lo que ocurre al pulsar, no un genérico:' },
    { type: 'ul', items: [
      'Mejor: "Pedir presupuesto en 2 minutos", "Probar la herramienta gratis".',
      'Peor: "Enviar", "Más información", "Haz clic aquí".',
    ] },
    { type: 'p', content: 'Repite la misma llamada a la acción al principio, a la mitad y al final de la página, para que esté a mano cuando el lector esté convencido.' },

    { type: 'h2', content: 'Estilo: claro, concreto y honesto' },
    { type: 'ul', items: [
      'Frases cortas y palabras sencillas. Si puedes decirlo con menos, hazlo.',
      'Verbos activos y datos concretos en lugar de abstracciones.',
      'Nada de urgencia falsa ("¡solo quedan 2!") si no es cierta.',
      'Cuenta los límites: decir para quién no es tu producto genera confianza y evita clientes frustrados.',
    ] },

    { type: 'h2', content: 'Cómo usar la IA en este proceso' },
    { type: 'p', content: 'La IA es una buena ayuda para generar variantes de titulares, simplificar párrafos y detectar frases vacías. Dale información real sobre tu producto y tu público, y revisa siempre que no haya añadido promesas:' },
    { type: 'example', title: 'Prompt para revisar una landing', content: 'Este es el texto de mi página de aterrizaje para [producto]: [pega el texto]. El público es [perfil] y el objetivo de la página es [acción].\n\nSeñala: 1) frases vagas o que podrían aparecer en cualquier otra web, 2) objeciones habituales que la página no responde, 3) afirmaciones que necesitarían una prueba. No reescribas aún; solo haz el diagnóstico en una lista.' },
    { type: 'p', content: 'Con el diagnóstico en la mano, reescribe tú las partes clave y pide a la IA solo variantes y revisiones. Y recuerda: una página de aterrizaje se mejora midiendo. Prueba dos versiones del titular durante un tiempo razonable y quédate con la que mejor funcione. Si necesitas un punto de partida para tus instrucciones, Prompt Builder estructura el encargo por ti.' },
    { type: 'cta', to: '/tools/prompt-builder', label: 'Generar un prompt' },
  ],
}

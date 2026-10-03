// Extended content for each tool page. Example outputs are the real output of each
// tool's own logic for the shown input (see src/components/tools/*).

export const toolGuides = {
  'ai-writer': {
    inside: [
      'AI Writer no es un modelo de lenguaje: aplica un conjunto de reglas de limpieza que se ejecutan en tu navegador y tu texto no sale de él. Eso lo hace rápido, predecible y gratuito, pero también limitado: no entiende tu texto, así que no reescribe ideas ni mejora el argumento.',
      'Lo que sí hace: elimina muletillas habituales ("o sea", "la verdad es que"), sustituye expresiones largas por otras más cortas ("con el fin de" por "para", "debido a que" por "porque"), corrige espacios y signos de puntuación sueltos y pone mayúscula al inicio de cada frase. El tono profesional además cambia abreviaturas de chat ("xq", "tb", "pa") por su forma completa, y el tono conciso elimina intensificadores como "realmente" o "básicamente".',
    ],
    example: {
      input: 'bueno, la verdad es que el informe esta casi listo. o sea, solo falta revisar los numeros con el fin de mandarlo, debido a que el cliente lo espera.',
      output: 'El informe esta casi listo. Solo falta revisar los numeros para mandarlo, porque el cliente lo espera.',
      note: 'La herramienta no corrige tildes ni ortografía ("esta" sigue sin tilde): conviene pasar el corrector de tu editor después.',
    },
    mistakes: [
      'Esperar que mejore el contenido. Si el texto es confuso, seguirá siendo confuso: primero aclara la idea y después limpia la forma.',
      'Pegar textos muy largos de una vez. Funciona mejor por párrafos, para revisar cada cambio.',
      'No releer el resultado. Las sustituciones automáticas pueden dejar frases que necesiten un ajuste a mano.',
    ],
    limits: [
      'Solo trabaja con español.',
      'No corrige ortografía, tildes ni concordancia.',
      'Para una reescritura profunda, usa un asistente de IA con un buen prompt: Prompt Builder te ayuda a prepararlo.',
    ],
  },

  'ai-summarizer': {
    inside: [
      'AI Summarizer genera un resumen extractivo: selecciona las frases más importantes del texto que pegas y las devuelve en su orden original, sin reescribirlas. Funciona así: divide el texto en frases, cuenta cuántas veces aparece cada palabra relevante (descartando palabras vacías como "el", "de" o "que"), da a cada frase una puntuación según la frecuencia media de sus términos y se queda con las mejores.',
      'La ventaja de este enfoque es que nunca inventa nada: todo lo que aparece en el resumen estaba en el original. La desventaja es que las frases se leen sueltas, a veces sin los conectores que las unían, y que no entiende el sentido del texto, solo qué términos se repiten.',
    ],
    example: {
      input: 'La inteligencia artificial está cambiando la forma en que trabajamos. Cada vez más empresas adoptan herramientas de IA para automatizar tareas repetitivas. Sin embargo, no todo el mundo sabe usarla de forma efectiva. Muchos usuarios pierden tiempo escribiendo instrucciones vagas que generan resultados mediocres. La clave está en dar contexto claro y objetivos concretos. Cuando se usa bien, la IA puede ahorrar horas de trabajo cada semana. Por eso cada vez más profesionales invierten tiempo en aprender a formular mejores instrucciones.',
      output: 'Cada vez más empresas adoptan herramientas de IA para automatizar tareas repetitivas. Muchos usuarios pierden tiempo escribiendo instrucciones vagas que generan resultados mediocres.',
      note: 'Resultado con la longitud "Breve (2 frases)". Con "Medio (4 frases)" añade las frases sobre el ahorro de horas y sobre aprender a formular mejores instrucciones.',
    },
    mistakes: [
      'Usarlo con textos muy cortos: si el original ya tiene pocas frases, el resumen será prácticamente el mismo texto.',
      'Pegar listas, tablas o textos sin puntuación. Necesita frases completas terminadas en punto para separarlas.',
      'Dar por bueno el resumen sin comparar con el original cuando se trata de datos importantes.',
    ],
    limits: [
      'No sintetiza varias fuentes: resume un único texto cada vez.',
      'No reordena ni parafrasea; para eso necesitas un modelo de lenguaje.',
      'Funciona mejor con prosa bien estructurada (artículos, informes, apuntes) que con diálogos o notas telegráficas.',
    ],
  },

  'prompt-builder': {
    inside: [
      'Prompt Builder convierte una descripción corta en un prompt con la estructura que suele dar mejores resultados: un rol, un objetivo, un tono, un formato de salida y unas restricciones. No consulta ningún modelo ni envía tu texto a ningún sitio; ensambla la plantilla en tu navegador a partir de lo que escribes y de las opciones que eliges.',
      'Su utilidad está en la disciplina que impone: te obliga a decidir para qué es el texto, qué tono quieres y qué no debe hacer la IA, que son justo las piezas que más se olvidan. El resultado es un punto de partida: lo recomendable es añadir después el contexto específico de tu caso (datos reales, público, ejemplos).',
    ],
    example: {
      input: 'Escribir descripciones de producto para una tienda online de decoración, de unas 80 palabras cada una (Objetivo: Marketing · Tono: Friendly)',
      output: 'ROL: Actúa como un especialista en marketing y comunicación persuasiva.\n\nOBJETIVO: Escribir descripciones de producto para una tienda online de decoración, de unas 80 palabras cada una\n\nTONO: Usa un tono cercano y cordial, como si hablaras con un colega.\n\nFORMATO DE SALIDA:\n- Estructura la respuesta en párrafos o puntos claros.\n- No incluyas introducciones innecesarias ni disculpas.\n- Si falta información relevante, indícalo explícitamente antes de responder.\n\nRESTRICCIONES:\n- Máximo el espacio necesario para cubrir el objetivo, sin extenderte de más.\n- No inventes datos que no se hayan proporcionado.',
      note: 'Para un resultado mejor, añade a ese prompt los datos del producto (materiales, medidas, precio) antes de enviarlo.',
    },
    mistakes: [
      'Describir lo que quieres como si hablaras del prompt ("necesito un prompt para...") en lugar de la tarea que debe hacer la IA.',
      'Dejar la descripción demasiado vaga: "escribir un texto" da un prompt igual de vago.',
      'No incluir en el prompt final el material de partida (el texto, los datos) sobre el que debe trabajar la IA.',
    ],
    limits: [
      'La plantilla es genérica; no sustituye el contexto propio de cada tarea.',
      'No ejecuta el prompt: lo copias y lo pegas en el asistente que uses.',
      'El texto generado está en español.',
    ],
  },

  'email-assistant': {
    inside: [
      'Email Assistant genera la estructura de un correo profesional a partir del motivo y del tono: un asunto, un saludo adecuado, una frase de apertura, una despedida y una firma. Todo se hace en tu navegador mediante plantillas; no envía nada ni se conecta a tu cuenta de correo.',
      'La clave para que el resultado suene bien es escribir el motivo empezando por un verbo en infinitivo ("confirmar la reunión del jueves", "pedir el presupuesto actualizado"). La herramienta lo encaja en frases como "Le escribo para…", "Te escribo para…" o "Quería…" según el tono.',
    ],
    example: {
      input: 'Motivo: confirmar la reunión del jueves y pedir el orden del día · Destinatario: Laura · Tono: Formal',
      output: 'Asunto: Confirmar la reunión del jueves y pedir el orden del día\n\nEstimado/a Laura:\n\nLe escribo para confirmar la reunión del jueves y pedir el orden del día.\n\nQuedo a su disposición para cualquier aclaración.\n\nAtentamente,',
      note: 'Es un borrador: añade los detalles concretos (hora, lugar, adjuntos) y tu firma antes de enviarlo.',
    },
    mistakes: [
      'Escribir el motivo como una frase completa en lugar de empezar por un verbo; la frase resultante suena forzada.',
      'Enviar el borrador sin añadir los datos concretos. Una plantilla sin fechas ni detalles no cierra nada.',
      'Elegir un tono demasiado formal para alguien con quien ya hablas con confianza.',
    ],
    limits: [
      'Genera una estructura breve; para correos largos o delicados, escribe tú el cuerpo.',
      'No adapta el contenido a conversaciones previas.',
      'Revisa siempre nombres, fechas y cifras antes de enviar.',
    ],
  },

  'smart-planner': {
    inside: [
      'Smart Planner convierte un objetivo en una secuencia de pasos según el alcance que elijas: semana, mes o proyecto. No analiza tu objetivo ni conoce tu situación; aplica una estructura de planificación (definir el resultado, dividir en bloques, priorizar, revisar y evaluar) personalizada con el texto que escribes.',
      'Es útil sobre todo para arrancar: te da un esqueleto que puedes ajustar. Los planes buenos salen de combinar ese esqueleto con lo que solo tú sabes: tu tiempo disponible, tus plazos y tus dependencias. Si quieres profundizar, la guía sobre cómo planificar un proyecto personal del blog explica el método paso a paso.',
    ],
    example: {
      input: 'Objetivo: lanzar la primera versión de mi portfolio · Alcance: Mes',
      output: 'PLAN — MES\nObjetivo: lanzar la primera versión de mi portfolio\n\n1. Concreta "lanzar la primera versión de mi portfolio" en un resultado final verificable a 30 días.\n2. Divide el mes en 4 bloques semanales con un hito por semana.\n3. Identifica qué recursos o información necesitas antes de empezar.\n4. Prioriza las 3 tareas de mayor impacto de cada semana.\n5. Haz una revisión semanal corta para reajustar el plan.\n6. Evalúa el resultado final frente al objetivo original.',
      note: 'El siguiente paso es sustituir cada punto genérico por tareas concretas: qué proyectos incluirás, qué páginas tendrá, qué fecha límite pones a cada hito.',
    },
    mistakes: [
      'Escribir objetivos vagos ("mejorar mi negocio"). Cuanto más verificable sea el objetivo, más útil será el plan.',
      'Elegir un alcance equivocado: un objetivo grande en "Semana" produce un plan irreal.',
      'Tratar el plan como definitivo. Revísalo y ajústalo cada semana.',
    ],
    limits: [
      'No genera fechas ni se sincroniza con tu calendario.',
      'Los pasos son una estructura general, no tareas específicas de tu sector.',
      'Pensado para planificación individual, no para gestión de equipos.',
    ],
  },

  'cv-builder': {
    inside: [
      'CV Builder ordena tu experiencia, formación y habilidades en una estructura de currículum limpia, de una sola columna y en texto plano: justo el formato que mejor leen tanto las personas como los sistemas de selección automáticos. Todo ocurre en tu navegador y no se guarda ningún dato personal.',
      'Escribe una línea por cada puesto o título y las habilidades separadas por comas. La herramienta pone los títulos de sección estándar (Experiencia, Formación, Habilidades), convierte cada línea en un punto y une las habilidades en una sola línea. Después puedes copiar el resultado y darle formato en tu editor de documentos.',
    ],
    example: {
      input: 'Nombre: Ana Pérez · Puesto: Diseñadora UX · Experiencia: "Diseñadora UX en Acme (2022-2024)" y "Freelance en proyectos de marca (2020-2022)" · Formación: "Grado en Diseño, Universidad X (2020)" · Habilidades: Figma, investigación de usuarios, prototipado',
      output: 'ANA PÉREZ\nDiseñadora UX\n────────────────────────────────\n\nEXPERIENCIA\n  • Diseñadora UX en Acme (2022-2024)\n  • Freelance en proyectos de marca (2020-2022)\n\nFORMACIÓN\n  • Grado en Diseño, Universidad X (2020)\n\nHABILIDADES\nFigma · investigación de usuarios · prototipado',
      note: 'La herramienta ordena, no redacta: el valor del CV está en lo que escribas en cada línea. Mejor "Reduje el tiempo de respuesta de 48 a 24 horas" que "Responsable de atención al cliente".',
    },
    mistakes: [
      'Escribir tareas en lugar de logros. Añade un resultado cuando lo puedas medir con honestidad.',
      'Incluir habilidades que no puedas demostrar en una entrevista.',
      'Enviar el mismo CV a todas las ofertas sin adaptar las palabras clave.',
    ],
    limits: [
      'No genera un archivo PDF ni diseño: entrega texto que copias a tu editor.',
      'No redacta ni mejora el contenido de cada puesto.',
      'No incluye foto, contacto ni resumen: añádelos tú según el formato que quieras.',
    ],
  },

  'meeting-to-tasks': {
    inside: [
      'Meeting → Tasks recorre las notas que pegas frase a frase y conserva las que contienen una acción: busca verbos y expresiones habituales de compromiso ("enviar", "revisar", "preparar", "hay que", "debe", "pendiente", entre otros). Las frases puramente informativas ("se comentó el estado del proyecto") quedan fuera. El resultado es una lista con casillas lista para copiar a tu gestor de tareas.',
      'Es una detección por reglas, no una comprensión del texto: funciona muy bien con notas escritas con verbos claros y peor con frases ambiguas. Si no encuentra ninguna acción reconocible, devuelve las primeras líneas de las notas para que las revises. Todo ocurre en tu navegador.',
    ],
    example: {
      input: 'Laura va a enviar el informe el viernes.\nHay que revisar el presupuesto antes de la próxima reunión.\nSe comentó el estado general del proyecto, sin cambios.\nMarcos debe contactar al proveedor esta semana.',
      output: '[ ] Laura va a enviar el informe el viernes.\n[ ] Hay que revisar el presupuesto antes de la próxima reunión.\n[ ] Marcos debe contactar al proveedor esta semana.',
      note: 'La línea informativa se descartó. Después de copiar las tareas, añade la fecha límite a las que no la tengan.',
    },
    mistakes: [
      'Pegar transcripciones enteras sin editar: cuanto más ruido, más falsos positivos.',
      'No revisar el resultado. Una frase con un verbo de acción puede no ser una tarea real.',
      'Olvidar asignar responsable y fecha a las tareas que no los traían en las notas.',
    ],
    limits: [
      'Detecta acciones por palabras clave; puede dejar fuera tareas redactadas de forma poco habitual.',
      'No extrae fechas ni responsables como campos separados.',
      'Pensado para notas en español.',
    ],
  },

  'text-translator': {
    inside: [
      'Text Translator envía el texto que escribes a un servicio de traducción externo de terceros (MyMemory) y muestra el resultado. A diferencia de las demás herramientas de este sitio, esta no procesa el texto solo en tu navegador: lo necesita enviar al servicio únicamente para realizar la traducción puntual, y por eso conviene no incluir información confidencial.',
      'Admite español, inglés, francés, alemán, italiano y portugués, con un límite de 480 caracteres por traducción. La calidad es buena para frases y párrafos cortos de uso cotidiano, y desigual con textos técnicos, expresiones coloquiales o juegos de palabras. Para textos más largos, traduce por párrafos.',
    ],
    example: {
      input: 'Hola, ¿cómo estás? (Español → Inglés)',
      output: 'Hello, how are you?',
      note: 'Cuando el texto es importante, comprueba la traducción volviendo a traducirla al idioma original para verificar que el sentido se mantiene.',
    },
    mistakes: [
      'Traducir textos legales, médicos o contractuales sin revisión profesional.',
      'Pegar información confidencial o datos personales de terceros.',
      'Traducir expresiones coloquiales literalmente: reescríbelas en un lenguaje más neutro antes.',
    ],
    limits: [
      'Máximo 480 caracteres por traducción.',
      'Depende de un servicio externo: si no está disponible, la herramienta muestra un error.',
      'No ajusta el tono ni el registro; para eso, revisa el resultado a mano. La guía del blog sobre traducir sin perder el tono explica cómo.',
    ],
  },
}

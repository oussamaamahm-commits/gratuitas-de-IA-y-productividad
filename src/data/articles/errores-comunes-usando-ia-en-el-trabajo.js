export default {
  slug: 'errores-comunes-usando-ia-en-el-trabajo',
  title: 'Errores al usar IA en el trabajo y cómo delegar sin perder el control',
  excerpt:
    'Los fallos más habituales al usar IA no son técnicos: son de expectativas y de proceso. Una guía para decidir qué delegar, cómo revisar y qué datos no compartir.',
  category: 'IA',
  date: '2026-09-23',
  body: [
    { type: 'p', content: 'Usar IA no garantiza ahorrar tiempo. Si dedicas veinte minutos a corregir un borrador que habrías escrito tú en quince, la herramienta se ha convertido en un obstáculo. Y si publicas sin revisar un dato que la IA se inventó, el problema ya no es de tiempo, sino de credibilidad.' },
    { type: 'p', content: 'La mayoría de los problemas se repiten en casi todos los equipos y se resuelven con hábitos sencillos. Este artículo recoge los errores más comunes, propone un criterio para decidir qué delegar y qué no, y explica cómo revisar un resultado sin convertirlo en un trabajo doble.' },

    { type: 'h2', content: 'Error 1: tratar el primer resultado como definitivo' },
    { type: 'p', content: 'Un modelo de lenguaje genera texto plausible, no necesariamente correcto. El primer resultado es un buen borrador: ordena ideas, propone estructura y rompe la página en blanco. Pero la fluidez engaña. Un párrafo bien escrito con un dato falso se lee igual de bien que uno verdadero, y por eso los errores llegan a clientes, informes y documentos oficiales.' },
    { type: 'p', content: 'Una regla práctica: cuanto más fluido y seguro suena un resultado, más tienes que comprobar las partes verificables. Cifras, fechas, nombres propios, citas, normativa y enlaces deben contrastarse con una fuente primaria antes de usarse.' },

    { type: 'h2', content: 'Error 2: pedir sin dar contexto' },
    { type: 'p', content: 'Una instrucción como "mejora este texto" obliga a la IA a adivinar para quién es, qué se quiere conseguir y qué se considera "mejor". El resultado será una versión pulida y genérica. Indicar el público, el objetivo, el tono y lo que no debe cambiar reduce las vueltas de corrección y suele ahorrar más tiempo del que cuesta escribir un buen encargo.' },

    { type: 'h2', content: 'Error 3: delegar decisiones, no solo borradores' },
    { type: 'p', content: 'La IA es buena generando opciones, ordenando información y dando una primera versión. Es mala asumiendo responsabilidad. Cuando una decisión tiene consecuencias contractuales, económicas, legales o sobre personas, la IA puede aportar alternativas, pero la decisión y su justificación tienen que ser tuyas.' },

    { type: 'h2', content: 'Error 4: compartir datos que no deberías' },
    { type: 'p', content: 'Es muy fácil pegar un correo de un cliente, un contrato o una hoja con datos personales en una herramienta externa para "que lo resuma". Antes de hacerlo, comprueba qué política de datos tiene la herramienta y si tu empresa permite ese uso. Cuando tengas dudas, anonimiza: sustituye nombres, importes y datos identificativos por marcadores como [CLIENTE] o [IMPORTE] y trabaja con el texto limpio.' },

    { type: 'h2', content: 'Qué delegar y qué no: un criterio simple' },
    { type: 'p', content: 'No todas las tareas necesitan el mismo nivel de supervisión. Una forma práctica de decidir es cruzar dos preguntas: cuánto cuesta equivocarse y lo fácil que es comprobar el resultado.' },
    { type: 'ul', items: [
      'Riesgo bajo y fácil de comprobar (reformatear una lista, proponer títulos, resumir tus propias notas): delega y revisa por encima.',
      'Riesgo bajo pero difícil de comprobar (explicaciones de temas que no dominas): úsalo para orientarte y contrasta con fuentes fiables antes de dar nada por cierto.',
      'Riesgo alto y fácil de comprobar (un email importante a un cliente): pide el borrador, pero léelo entero y cámbialo con tus palabras.',
      'Riesgo alto y difícil de comprobar (cláusulas legales, cálculos fiscales, consejos médicos): no delegues; consulta a un profesional cualificado.',
    ] },

    { type: 'h2', content: 'Cómo revisar sin hacer el trabajo dos veces' },
    { type: 'p', content: 'Revisar bien no significa releer todo con la misma atención. Funciona mejor separar la revisión en capas:' },
    { type: 'ol', items: [
      'Hechos: subraya todo lo que se pueda comprobar (cifras, fechas, nombres) y verifícalo.',
      'Contexto: comprueba que no se ha añadido nada que no le diste ni se ha omitido algo esencial.',
      'Tono: léelo en voz alta; si no lo dirías así, reescribe esa frase.',
      'Riesgos: busca promesas, comparaciones o afirmaciones que podrían causarte un problema.',
    ] },
    { type: 'p', content: 'Para facilitarlo, añade al prompt una instrucción como "si no tienes un dato, escribe [REVISAR] en lugar de suponerlo". Así los puntos débiles quedan señalados y no hace falta cazarlos.' },

    { type: 'h2', content: 'Error 5: medir la sensación, no el tiempo' },
    { type: 'p', content: 'Una herramienta nueva da sensación de avance incluso cuando no ahorra tiempo. Si quieres saber si te compensa, mide: cronometra cuánto tardas en una tarea concreta sin IA y con IA durante dos semanas, incluyendo el tiempo de revisión. Es posible que descubras que ahorra mucho en unas tareas (resúmenes, primeros borradores, reformateos) y casi nada en otras.' },

    { type: 'h2', content: 'Un método para empezar bien' },
    { type: 'ol', items: [
      'Elige una tarea repetitiva y de riesgo bajo, como resumir reuniones o redactar respuestas tipo.',
      'Escribe un prompt reutilizable con rol, contexto, formato y restricciones, y guárdalo.',
      'Úsalo durante dos semanas anotando cuánto tiempo ahorras realmente y qué errores aparecen.',
      'Ajusta el prompt con lo aprendido y, solo entonces, amplía a otra tarea.',
    ] },
    { type: 'p', content: 'La clave no es usar más IA, sino usarla en el punto del proceso donde realmente ahorra trabajo y mantener tu criterio donde importa. Si quieres un punto de partida para escribir esos prompts reutilizables, Prompt Builder ayuda a estructurarlos.' },
    { type: 'cta', to: '/tools/prompt-builder', label: 'Crear un prompt reutilizable' },
  ],
}

export default {
  slug: 'notas-de-reunion-que-sirven',
  title: 'Cómo tomar notas de reunión que de verdad sirvan',
  excerpt:
    'La mayoría de las notas de reunión no se vuelven a leer. Un formato sencillo para separar decisiones, tareas y contexto, y convertirlas en acciones el mismo día.',
  category: 'Automatización',
  date: '2026-09-28',
  body: [
    { type: 'p', content: 'Tomar notas durante una reunión no garantiza que sean útiles después. La mayoría se escriben para el momento, en un orden que solo entiende quien estaba presente, y acaban en una carpeta que nadie abre. El problema no es la falta de esfuerzo, sino el formato: las notas útiles se escriben pensando en quien las leerá dentro de una semana, que puede ser tu yo del futuro.' },

    { type: 'h2', content: 'Qué debe quedar escrito siempre' },
    { type: 'p', content: 'Aunque la reunión sea larga y dispersa, casi todo lo valioso cabe en cuatro categorías. Anotarlas por separado es el cambio que más mejora las notas:' },
    { type: 'ul', items: [
      'Decisiones: lo que se acordó, con una frase clara. "Se aprueba el presupuesto de 3.000 € para la campaña de octubre".',
      'Tareas: acciones concretas, cada una con responsable y fecha.',
      'Dudas abiertas: lo que quedó sin resolver y quién debe resolverlo.',
      'Contexto: la información relevante que se comentó, por si hace falta recordarla.',
    ] },
    { type: 'p', content: 'Mezclar "se comentó que el proyecto va bien" con "hay que enviar el informe el viernes" en el mismo bloque hace que las tareas se pierdan entre el contexto. Si las separas desde el principio, convertir la nota en un plan es cuestión de minutos.' },

    { type: 'h2', content: 'Una plantilla que funciona' },
    { type: 'example', title: 'Plantilla de acta breve', content: 'REUNIÓN: [nombre] · FECHA: [fecha] · ASISTENTES: [nombres]\n\nDECISIONES\n- [decisión 1]\n- [decisión 2]\n\nTAREAS\n[ ] [acción] — [responsable] — [fecha límite]\n[ ] [acción] — [responsable] — [fecha límite]\n\nDUDAS ABIERTAS\n- [duda] — [quién la resuelve]\n\nCONTEXTO\n- [dato relevante]' },
    { type: 'p', content: 'No necesitas rellenarla durante la reunión con todo el detalle: anota en bruto y pasa a la plantilla después. Lo importante es que el resultado final tenga esta estructura.' },

    { type: 'h2', content: 'Anota quién, qué y para cuándo' },
    { type: 'p', content: 'Una tarea sin responsable rara vez se completa. Si en la reunión no queda claro quién se encarga, pregúntalo ahí mismo: "¿quién lo lleva?" es una de las frases más útiles que puedes decir. Lo mismo con la fecha: "lo antes posible" no es una fecha. Una tarea bien escrita responde a tres preguntas: qué hay que hacer, quién lo hace y para cuándo.' },
    { type: 'ul', items: [
      'Mal: "Revisar el presupuesto".',
      'Bien: "Laura revisa el presupuesto de la campaña y envía comentarios antes del jueves 12".',
    ] },

    { type: 'h2', content: 'Revisa las notas en las primeras 24 horas' },
    { type: 'p', content: 'Unas notas que no se revisan hasta la siguiente reunión pierden la mitad de su utilidad, porque con el paso de los días olvidas qué significaba cada abreviatura. Dedica diez minutos al final del día a limpiar y enviar la nota a los asistentes. Enviar las tareas por escrito, con responsable y fecha, multiplica la probabilidad de que se cumplan.' },

    { type: 'h2', content: 'Cómo ayuda la IA, y dónde no conviene confiar' },
    { type: 'p', content: 'Si grabas la reunión (con permiso de los asistentes) o tomas notas rápidas, una IA puede ordenarlas con la plantilla anterior. Un prompt razonable:' },
    { type: 'example', title: 'Prompt para ordenar notas', content: 'Estas son mis notas en bruto de una reunión: [pega las notas].\n\nOrdénalas en cuatro secciones: decisiones, tareas (con responsable y fecha solo si aparecen en las notas), dudas abiertas y contexto. No inventes responsables ni fechas: si faltan, escribe [FALTA]. No añadas información que no esté en las notas.' },
    { type: 'p', content: 'Dos precauciones importantes. Primero, graba o transcribe solo si todos los asistentes lo saben y lo permiten; en muchos entornos es obligatorio informar. Segundo, no pegues información confidencial (datos de clientes, cifras internas) en herramientas cuyo tratamiento de datos no conozcas.' },
    { type: 'p', content: 'La herramienta Meeting → Tasks de este sitio hace una versión sencilla de este paso: separa las líneas que contienen acciones de las informativas y las devuelve como lista de tareas, todo en tu navegador. Funciona mejor cuando las notas usan verbos de acción (enviar, revisar, preparar).' },

    { type: 'h2', content: 'Errores frecuentes al tomar notas' },
    { type: 'ul', items: [
      'Transcribir todo lo que se dice en lugar de anotar lo que cambia algo.',
      'Dejar las tareas sin responsable asignado.',
      'Guardar las notas en un sitio distinto a donde se gestionan las tareas.',
      'No volver a mirarlas hasta la siguiente reunión.',
    ] },
    { type: 'p', content: 'Si cada reunión termina con una nota que cualquiera pueda leer en un minuto y entender qué se decidió y quién hace qué, ya estás por delante de la mayoría.' },
    { type: 'cta', to: '/tools/meeting-to-tasks', label: 'Convertir notas en tareas' },
  ],
}

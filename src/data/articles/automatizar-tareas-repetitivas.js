export default {
  slug: 'automatizar-tareas-repetitivas',
  title: 'Cómo automatizar tareas repetitivas: detectarlas y montar un flujo simple',
  excerpt:
    'Qué tareas merece la pena automatizar, cómo diseñar un flujo con entradas y salidas claras, y dónde dejar siempre una revisión humana.',
  category: 'Automatización',
  date: '2026-09-27',
  body: [
    { type: 'p', content: 'Automatizar no consiste en instalar herramientas, sino en identificar trabajo que se repite con la misma forma y decidir que una máquina lo haga. La mayoría de la gente no necesita una infraestructura compleja: necesita descubrir dos o tres tareas que le roban tiempo cada semana y tratarlas con un proceso sencillo.' },
    { type: 'p', content: 'Este artículo explica cómo detectar esas tareas, cómo describir un flujo antes de construirlo y qué puntos de control conviene mantener. Los ejemplos funcionan con cualquier herramienta, desde una plantilla de texto hasta una automatización completa.' },

    { type: 'h2', content: 'Cómo detectar qué merece automatizarse' },
    { type: 'p', content: 'Una tarea es buena candidata si cumple al menos tres de estas condiciones:' },
    { type: 'ul', items: [
      'Se repite con frecuencia (al menos semanalmente).',
      'Siempre tiene la misma estructura: mismos datos de entrada, mismo tipo de resultado.',
      'Es aburrida y mecánica, sin demasiado criterio.',
      'Un error cuesta poco o es fácil de detectar.',
      'Consume más de diez minutos cada vez.',
    ] },
    { type: 'p', content: 'Un ejercicio sencillo: durante una semana apunta cada tarea que hagas más de una vez y cuánto te lleva. Al final, ordena por tiempo total (frecuencia por duración). Las tres primeras son tus candidatas. Suele sorprender lo mucho que pesan tareas que "no llevan nada", como reenviar el mismo correo, copiar datos de una hoja a otra o preparar siempre el mismo informe.' },

    { type: 'h2', content: 'Antes de automatizar, estandariza' },
    { type: 'p', content: 'Si hoy haces una tarea de tres maneras distintas según el día, no se puede automatizar: primero hay que decidir cuál es la forma correcta. Escribe los pasos tal cual los haces, elimina los que sobren y fija el orden. A menudo, solo con esa estandarización ya ahorras tiempo, y lo que queda es mucho más fácil de automatizar.' },

    { type: 'h2', content: 'Describe el flujo como entrada, pasos y salida' },
    { type: 'p', content: 'Cualquier flujo, por simple o complejo que sea, se describe con tres elementos. Escríbelos antes de abrir ninguna herramienta:' },
    { type: 'ol', items: [
      'Entrada: qué dispara el proceso y qué datos llegan (un correo, una nota de reunión, un formulario).',
      'Pasos: qué se hace con esos datos, en qué orden y quién o qué lo hace.',
      'Salida: qué se produce y dónde se entrega (una tarea creada, un correo enviado, una fila en una hoja).',
    ] },
    { type: 'example', title: 'Ejemplo: de la reunión a las tareas', content: 'Entrada: notas de una reunión pegadas en un documento.\n\nPaso 1: separar lo informativo de lo accionable.\nPaso 2: para cada acción, identificar responsable y fecha si aparecen en las notas.\nPaso 3: revisar la lista (humano).\nPaso 4: enviar las tareas al gestor de tareas del equipo.\n\nSalida: una lista de tareas con responsable y fecha, lista para el equipo.' },
    { type: 'p', content: 'Este es justo el flujo que cubre la herramienta Meeting → Tasks en sus pasos 1 y 2. Los pasos 3 y 4 los dejas tú, y no es casual.' },

    { type: 'h2', content: 'Encadena herramientas pequeñas' },
    { type: 'p', content: 'Los flujos más robustos suelen ser cadenas de piezas simples que hacen una sola cosa bien: un resumen, seguido de una extracción de tareas, seguido de un borrador de correo de seguimiento. Cada pieza se puede probar y mejorar por separado, y si una falla, el resto sigue funcionando.' },
    { type: 'p', content: 'Empieza con el nivel más sencillo que resuelva el problema:' },
    { type: 'ul', items: [
      'Plantilla: un texto con huecos que rellenas. Sirve para correos y respuestas tipo.',
      'Prompt guardado: una instrucción reutilizable para una IA, con tus datos como entrada.',
      'Automatización con herramientas: conectar aplicaciones para que un evento dispare una acción sin intervención.',
    ] },
    { type: 'p', content: 'Mucha gente salta directamente al tercer nivel y acaba con un sistema frágil que nadie entiende. Si una plantilla resuelve el 80 % del problema, quédate ahí.' },

    { type: 'h2', content: 'Dónde poner siempre una revisión humana' },
    { type: 'p', content: 'No todo el flujo debe ser automático. Decide de antemano en qué puntos una persona revisa el resultado antes de que avance. Como criterio, exige revisión cuando el resultado:' },
    { type: 'ul', items: [
      'Sale de la organización (correos a clientes, publicaciones).',
      'Afecta a dinero, contratos o datos personales.',
      'Es difícil de deshacer una vez enviado.',
    ] },
    { type: 'p', content: 'Un flujo que genera borradores y los deja listos para aprobar con un clic es casi tan rápido como uno totalmente automático y mucho más seguro.' },

    { type: 'h2', content: 'Empieza pequeño y mide' },
    { type: 'p', content: 'Automatiza primero el proceso más repetitivo y de menor riesgo. Mide cuánto tiempo tardabas antes y cuánto tardas ahora, incluyendo el mantenimiento: arreglar un flujo que se rompe también cuesta tiempo. Si el ahorro es real, amplía; si no, simplifica o vuelve al proceso manual sin remordimientos.' },
    { type: 'p', content: 'Un buen test final: si dentro de seis meses otra persona tuviera que usar tu flujo, ¿podría entenderlo con un párrafo de explicación? Si la respuesta es no, es demasiado complicado.' },
    { type: 'cta', to: '/tools/meeting-to-tasks', label: 'Probar Meeting → Tasks' },
  ],
}

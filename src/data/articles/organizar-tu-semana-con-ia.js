export default {
  slug: 'organizar-tu-semana-con-ia',
  title: 'Cómo organizar tu semana con IA: un método en cuatro pasos',
  excerpt:
    'Planificar no es llenar un calendario, es priorizar. Un método sencillo para usar IA como ayuda en la planificación semanal y una rutina que sobreviva a la semana real.',
  category: 'Productividad',
  date: '2026-09-25',
  body: [
    { type: 'p', content: 'La mayoría de los sistemas de planificación fallan por la misma razón: producen listas largas de tareas sin decidir qué importa. Una semana bien planificada no es la que tiene más casillas marcadas, sino la que avanza en lo que de verdad te interesa. La IA puede ayudarte a estructurar y ordenar, pero la decisión de qué es importante sigue siendo tuya.' },
    { type: 'p', content: 'Este método tiene cuatro pasos y lleva unos veinte minutos el domingo por la tarde o el lunes a primera hora. No requiere una aplicación concreta: sirve una libreta, una hoja de cálculo o cualquier asistente de IA.' },

    { type: 'h2', content: 'Paso 1: vuelca todo lo pendiente, sin ordenar' },
    { type: 'p', content: 'Escribe sin filtrar todo lo que tienes en la cabeza: tareas de trabajo, gestiones personales, cosas que "habría que" hacer. Todavía no clasifiques. El objetivo es sacar la carga mental a un sitio donde puedas mirarla. Una lista de entre 15 y 40 elementos es normal.' },

    { type: 'h2', content: 'Paso 2: define dos o tres objetivos de la semana' },
    { type: 'p', content: 'Un objetivo es un resultado, no una tarea. "Responder correos" es una tarea; "no tener ningún cliente esperando respuesta más de 48 horas" es un objetivo. Limitarlos a dos o tres obliga a elegir, y es la parte más útil de todo el método.' },
    { type: 'p', content: 'Aquí la IA puede ayudarte a afinar. Pega tu lista del paso 1 y pide algo como esto:' },
    { type: 'example', title: 'Prompt para elegir objetivos', content: 'Esta es mi lista de pendientes de la semana: [pega la lista].\n\nMi trabajo consiste en [descripción breve] y lo más importante este mes es [prioridad del mes].\n\nAgrupa las tareas por tema, propón 3 posibles objetivos de la semana formulados como resultados y señala qué tareas de la lista no contribuyen a ninguno (para poder posponerlas o eliminarlas). No inventes tareas nuevas.' },
    { type: 'p', content: 'Revisa la propuesta con espíritu crítico. La IA no sabe qué le preocupa a tu jefe o qué compromiso vence el jueves; tú sí. Úsala para ver la lista agrupada, no para que decida por ti.' },

    { type: 'h2', content: 'Paso 3: convierte los objetivos en tareas concretas' },
    { type: 'p', content: 'Cada objetivo se descompone en acciones que puedas empezar sin pensar. "Preparar la presentación" es demasiado vago; "escribir el índice de la presentación y enviarlo a Marta para validarlo" es una acción. Una buena tarea empieza por un verbo, cabe en una a tres horas y tiene un final reconocible.' },
    { type: 'example', title: 'Prompt para desglosar', content: 'Objetivo: [objetivo].\nTiempo disponible esta semana para esto: [horas].\n\nDivídelo en tareas de 30 a 120 minutos, cada una con un verbo de acción y un resultado verificable. Indica el orden recomendado y qué tareas dependen de otras. Si falta información para estimar, pregúntamela antes.' },

    { type: 'h2', content: 'Paso 4: colócalo en el calendario, con margen' },
    { type: 'p', content: 'Lo que no tiene hora tiende a no hacerse. Reserva bloques para las tareas importantes, empezando por las que requieren concentración, y colócalas en las horas en las que mejor funcionas. Después, y este punto es decisivo, deja margen.' },
    { type: 'p', content: 'Si ocupas el 100 % del tiempo disponible, cualquier imprevisto descoloca el resto de la semana. Una regla práctica es planificar como máximo entre el 60 y el 70 % de tus horas laborables y dejar el resto para lo inesperado, que casi siempre llega.' },

    { type: 'h2', content: 'Diseña la rutina para tu peor semana' },
    { type: 'p', content: 'Las rutinas perfectas en papel casi nunca sobreviven al primer imprevisto, y el motivo no suele ser falta de disciplina: se diseñan para una semana ideal que rara vez ocurre. Una rutina realista tiene estas características:' },
    { type: 'ul', items: [
      'Tiene pocos elementos fijos (dos o tres) en lugar de una agenda minuciosa.',
      'Funciona incluso si pierdes un día entero: las tareas importantes tienen un día de reserva.',
      'Distingue entre lo que debe hacerse en un momento concreto y lo que puede moverse.',
      'Incluye una revisión corta, de diez minutos, al final de la semana.',
    ] },

    { type: 'h2', content: 'La revisión del viernes' },
    { type: 'p', content: 'Al terminar la semana, no te preguntes solo cuántas tareas completaste. Pregúntate si avanzaste en los objetivos. Anota qué salió bien, qué se movió y por qué, y qué cambiarías. Esa nota es el mejor insumo para planificar la semana siguiente, y también para una IA, si le pides que detecte patrones:' },
    { type: 'example', title: 'Prompt para la revisión', content: 'Esta fue mi semana: objetivos [lista], tareas completadas [lista], tareas que se movieron [lista] y motivos que anoté [lista].\n\nSeñala 2 o 3 patrones que veas (por ejemplo, tareas que siempre se posponen o estimaciones demasiado optimistas) y propón un cambio concreto para la próxima semana. No me felicites ni me regañes; solo observa.' },

    { type: 'h2', content: 'Errores habituales' },
    { type: 'ul', items: [
      'Planificar tareas sin objetivo: acabas con una agenda llena y la sensación de no haber avanzado.',
      'Subestimar el tiempo. Si una tarea siempre te lleva el doble de lo previsto, apunta el doble.',
      'No dejar huecos. La planificación sin margen se rompe el martes.',
      'Cambiar de sistema cada semana. Mantén el método al menos un mes antes de juzgarlo.',
    ] },
    { type: 'p', content: 'Si quieres un punto de partida para el paso 3, Smart Planner convierte un objetivo en una lista de pasos ordenados según el alcance que elijas (semana, mes o proyecto).' },
    { type: 'cta', to: '/tools/smart-planner', label: 'Probar Smart Planner' },
  ],
}

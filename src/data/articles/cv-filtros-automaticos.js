export default {
  slug: 'cv-filtros-automaticos',
  title: 'Cómo estructurar un CV que supere los filtros automáticos',
  excerpt:
    'Algunos sistemas de selección leen tu CV antes que una persona. Qué formato lee bien, cómo adaptar las palabras clave y cómo redactar logros con resultados.',
  category: 'Negocio',
  date: '2026-09-30',
  body: [
    { type: 'p', content: 'Muchas empresas, sobre todo las que reciben muchas candidaturas, gestionan los currículums con un sistema de seguimiento de candidatos (ATS, por sus siglas en inglés). Ese software extrae el texto de tu CV, lo organiza en campos y permite a los reclutadores buscar y filtrar. No todas las empresas lo usan ni todos los sistemas funcionan igual, pero conviene preparar un CV que se pueda leer bien tanto por una persona como por una máquina.' },
    { type: 'p', content: 'Importante: nadie puede garantizar que un formato "pase" ningún filtro, porque cada sistema y cada reclutador tienen sus criterios. Lo que sí puedes hacer es evitar los errores que impiden que el texto se lea correctamente y mejorar lo que sí depende de ti: la claridad y la relevancia.' },

    { type: 'h2', content: 'Formato: lo simple se lee mejor' },
    { type: 'p', content: 'Estos sistemas procesan el documento como texto lineal. Los diseños muy elaborados pueden descolocar la información: lo que ves como dos columnas, el programa puede leerlo mezclando líneas.' },
    { type: 'ul', items: [
      'Usa una sola columna y una estructura de arriba abajo.',
      'Evita tablas, cuadros de texto, iconos que sustituyan al texto y gráficos de nivel (barras o estrellas para idiomas y habilidades).',
      'No pongas información importante en cabeceras o pies de página: algunos sistemas no los leen.',
      'Elige una tipografía estándar y un tamaño legible (10-12 puntos).',
      'Envía un PDF con texto seleccionable o el formato que pida la oferta. Un PDF hecho a partir de una imagen escaneada no contiene texto legible.',
    ] },
    { type: 'p', content: 'Una prueba rápida: abre tu PDF, selecciona todo el texto, cópialo y pégalo en un editor de texto sencillo. Si el resultado sale desordenado o incompleto, un sistema automático lo leerá igual.' },

    { type: 'h2', content: 'Títulos de sección claros' },
    { type: 'p', content: '"Experiencia profesional", "Formación" y "Habilidades" son títulos que cualquier sistema y cualquier persona reconocen. Los títulos creativos como "Mi trayectoria" o "Lo que sé hacer" no aportan nada y pueden confundir a un lector automático. En este punto, la claridad gana a la originalidad.' },

    { type: 'h2', content: 'Adapta las palabras de la oferta, sin mentir' },
    { type: 'p', content: 'Los reclutadores suelen buscar términos concretos. Si la oferta pide "gestión de proyectos" y tu CV dice "coordinación de equipos", pueden no relacionarse en una búsqueda. Lee la oferta, identifica las competencias y herramientas que menciona y usa esos mismos términos cuando describas experiencia que realmente tienes.' },
    { type: 'p', content: 'La regla innegociable es no incluir nada que no puedas defender en una entrevista. Añadir una herramienta que nunca has usado solo para que coincida con la oferta suele delatarse en la primera pregunta técnica.' },

    { type: 'h2', content: 'Logros con resultados, no solo tareas' },
    { type: 'p', content: 'Describir tareas ("responsable de redes sociales") dice lo que hacías; describir logros dice lo que conseguías. Una fórmula sencilla: verbo de acción, qué hiciste, y el resultado cuando lo puedas medir con honestidad.' },
    { type: 'example', title: 'De tarea a logro', content: 'Tarea: Responsable de atención al cliente.\nLogro: Reduje de 48 a 24 horas el tiempo medio de respuesta reorganizando la bandeja de entrada y creando 12 respuestas tipo.\n\nTarea: Gestión de redes sociales.\nLogro: Planifiqué y publiqué tres contenidos semanales durante un año y pasé de 800 a 2.300 seguidores.' },
    { type: 'p', content: 'Los números del ejemplo son ilustrativos: usa solo cifras reales y que puedas justificar. Si no tienes un dato medible, describe el alcance con precisión ("gestioné una cartera de 40 clientes") en lugar de inventar un porcentaje.' },

    { type: 'h2', content: 'Estructura recomendada' },
    { type: 'ol', items: [
      'Datos de contacto: nombre, correo, teléfono, ciudad y, si procede, perfil profesional.',
      'Resumen profesional de 2-3 líneas adaptado al puesto.',
      'Experiencia en orden cronológico inverso, con 3-5 logros por puesto.',
      'Formación y certificaciones relevantes.',
      'Habilidades y herramientas, en texto y agrupadas.',
      'Idiomas con el nivel real (por ejemplo, según el marco europeo).',
    ] },
    { type: 'p', content: 'La extensión ideal depende de la trayectoria: una página para perfiles júnior y hasta dos para perfiles con mucha experiencia. Lo que sobra distrae; elimina lo que no ayude al puesto concreto.' },

    { type: 'h2', content: 'Cómo ayuda la IA, y sus límites' },
    { type: 'p', content: 'Una IA es útil para reformular logros, detectar frases vagas o ajustar el resumen a una oferta. Pásale tu experiencia real y la oferta, y pide mejoras sin añadir datos. Revisa después cada línea: los modelos tienden a embellecer y a inventar cifras. CV Builder, la herramienta de este sitio, ordena tu experiencia, formación y habilidades en una estructura limpia lista para copiar y personalizar; el contenido sigue siendo tuyo.' },
    { type: 'cta', to: '/tools/cv-builder', label: 'Probar CV Builder' },
  ],
}

export default {
  slug: 'planificar-un-proyecto-personal',
  title: 'Cómo planificar un proyecto personal de principio a fin',
  excerpt:
    'Los proyectos personales se abandonan por falta de estructura, no de motivación. Un método para definir el final, dividir por fases y mantener el ritmo.',
  category: 'Productividad',
  date: '2026-09-26',
  body: [
    { type: 'p', content: 'Casi todo el mundo ha empezado un proyecto personal con mucho entusiasmo: una web, un curso, aprender un idioma, montar un pequeño negocio. Y casi todo el mundo ha dejado alguno a medias. El motivo rara vez es la falta de ganas. Lo habitual es que, pasado el impulso inicial, no exista una estructura que diga qué hacer el martes por la noche cuando estás cansado.' },
    { type: 'p', content: 'Planificar bien un proyecto personal no requiere herramientas de gestión profesional. Requiere responder cinco preguntas en orden. Este artículo las recorre con un ejemplo y propone un formato para ponerlas por escrito.' },

    { type: 'h2', content: 'Pregunta 1: ¿cómo sabré que he terminado?' },
    { type: 'p', content: 'Define el final antes que el principio. Sin un criterio claro de "hecho", el proyecto se estira indefinidamente porque siempre se le puede añadir algo. Escribe una frase que describa el resultado final de forma verificable.' },
    { type: 'ul', items: [
      'Vago: "Tener un blog".',
      'Verificable: "Tener un blog publicado con 10 artículos de más de 800 palabras y una página de contacto funcionando".',
      'Vago: "Aprender inglés".',
      'Verificable: "Poder mantener una conversación de 15 minutos sobre mi trabajo con un profesor, sin pasar al español".',
    ] },

    { type: 'h2', content: 'Pregunta 2: ¿cuánto tiempo real tengo?' },
    { type: 'p', content: 'Sé honesto con tu disponibilidad. Si tienes tres tardes de dos horas por semana, eso son seis horas, no quince. Un proyecto planificado con horas que no existen está condenado a retrasarse, y los retrasos son la principal causa de abandono porque dan sensación de fracaso.' },
    { type: 'p', content: 'Calcula las horas semanales disponibles, multiplícalas por las semanas que quieres dedicarle y compara con una estimación razonable del trabajo. Si no cuadra, tienes tres opciones: recortar el alcance, ampliar el plazo o dedicar más tiempo. Elegir una es mejor que ignorar la discrepancia.' },

    { type: 'h2', content: 'Pregunta 3: ¿cuáles son las fases?' },
    { type: 'p', content: 'Divide por fases con un orden lógico, no por fechas fijas. Planificar "el día 14 hago esto" genera frustración en cuanto la vida se interpone. Las fases permiten avanzar a tu ritmo sin perder la estructura. Un proyecto de ejemplo, montar una pequeña tienda online:' },
    { type: 'ol', items: [
      'Definición: qué vendo, a quién y con qué precio.',
      'Preparación: dominio, plataforma, fotos de producto y textos.',
      'Prueba: pedido de prueba, revisión del proceso de pago y de envío.',
      'Lanzamiento: publicación, avisar a los primeros contactos y recoger comentarios.',
      'Mejora: ajustes a partir de lo que digan los primeros clientes.',
    ] },
    { type: 'p', content: 'Cada fase termina con un entregable concreto, que es lo que te permite saber si puedes pasar a la siguiente.' },

    { type: 'h2', content: 'Pregunta 4: ¿cuál es el siguiente paso, tan pequeño que no pueda posponerlo?' },
    { type: 'p', content: 'Un proyecto grande se abandona en la fase de planificación si no existe una acción pequeña que puedas hacer ahora mismo. Para cada fase, define el primer paso en el formato más pequeño posible: "abrir un documento y escribir tres opciones de nombre", no "pensar el nombre".' },
    { type: 'p', content: 'Si usas un asistente de IA, esta es una buena petición para pedirle ayuda con el desglose:' },
    { type: 'example', title: 'Prompt para desglosar un proyecto', content: 'Quiero [proyecto] y lo daré por terminado cuando [criterio verificable].\nDispongo de [horas por semana] durante [semanas].\n\nPropón 4-6 fases con un entregable por fase. Para cada fase, enumera las tareas de menos de 2 horas y marca la primera que podría hacer hoy. Señala los riesgos más probables de retraso. No des por hecho conocimientos que no te he dicho: pregúntame antes.' },

    { type: 'h2', content: 'Pregunta 5: ¿cuándo y cómo reviso el avance?' },
    { type: 'p', content: 'Los proyectos largos necesitan puntos de revisión intermedios. Sin ellos es fácil no darse cuenta de que el proyecto se desvió hasta que ya es tarde para corregir. Una revisión de diez minutos cada semana, con tres preguntas, es suficiente:' },
    { type: 'ul', items: [
      '¿Qué avancé desde la última revisión?',
      '¿Qué me bloqueó o me costó más de lo previsto?',
      '¿Cuál es lo único que haré esta semana para avanzar?',
    ] },

    { type: 'h2', content: 'Cuándo recortar, y cómo hacerlo sin sentir que fracasas' },
    { type: 'p', content: 'Recortar el alcance no es abandonar: es adaptarse. Si en la revisión detectas que no llegarás al plan original, decide qué parte es imprescindible para que el proyecto cumpla su propósito y aplaza el resto a una "versión 2". Terminar una versión pequeña enseña más que dejar una versión grande a medias.' },

    { type: 'h2', content: 'Resumen en una página' },
    { type: 'p', content: 'Antes de empezar, escribe en una sola hoja: el resultado final verificable, las horas reales por semana, las fases con su entregable, el primer paso de la primera fase y el día de la revisión semanal. Si no cabe en una página, el proyecto aún no está definido. Si quieres un esqueleto para empezar, Smart Planner genera una lista de pasos ordenados a partir del objetivo que escribas.' },
    { type: 'cta', to: '/tools/smart-planner', label: 'Generar un plan con Smart Planner' },
  ],
}

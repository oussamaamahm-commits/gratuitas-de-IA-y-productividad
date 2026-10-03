import comoEscribirMejoresPrompts from './articles/como-escribir-mejores-prompts.js'
import promptsParaMarketing from './articles/prompts-para-marketing.js'
import erroresComunes from './articles/errores-comunes-usando-ia-en-el-trabajo.js'
import resumirDocumentos from './articles/resumir-documentos-con-ia.js'
import organizarSemana from './articles/organizar-tu-semana-con-ia.js'
import planificarProyecto from './articles/planificar-un-proyecto-personal.js'
import automatizarTareas from './articles/automatizar-tareas-repetitivas.js'
import notasDeReunion from './articles/notas-de-reunion-que-sirven.js'
import emailRespuesta from './articles/email-que-consigue-respuesta.js'
import cvFiltros from './articles/cv-filtros-automaticos.js'
import entrevistaConIA from './articles/preparar-entrevista-de-trabajo-con-ia.js'
import estudiarConIA from './articles/estudiar-con-ia-sin-hacer-trampa.js'
import traducirTono from './articles/traducir-sin-perder-el-tono.js'
import escrituraPersuasiva from './articles/escritura-persuasiva-landing-pages.js'

const WORDS_PER_MINUTE = 200

function countWords(body) {
  return body
    .map((b) => [b.content, ...(b.items || [])].filter(Boolean).join(' '))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}

const articles = [
  comoEscribirMejoresPrompts,
  promptsParaMarketing,
  erroresComunes,
  resumirDocumentos,
  organizarSemana,
  planificarProyecto,
  automatizarTareas,
  notasDeReunion,
  emailRespuesta,
  cvFiltros,
  entrevistaConIA,
  estudiarConIA,
  traducirTono,
  escrituraPersuasiva,
]

export const resources = articles
  .map((a) => {
    const words = countWords(a.body)
    return {
      ...a,
      words,
      readingTime: `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min`,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getResourceBySlug(slug) {
  return resources.find((r) => r.slug === slug)
}

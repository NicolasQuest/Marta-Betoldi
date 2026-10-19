import type { AwardId, ProjectSlug } from '../i18n/es'

export type Award = {
  id: AwardId // nombre del premio y descripción en i18n (es.ts / en.ts → awards.items)
  year: string
  project: ProjectSlug // la obra premiada; el link va a su página en Proyectos
}

// Del más nuevo al más viejo
export const awards: Award[] = [
  { id: 'rose-dor', year: '2010', project: 'ciega-a-citas' },
  { id: 'martin-fierro', year: '2009', project: 'ciega-a-citas' },
  { id: 'argentores', year: '2008', project: 'socias' },
]

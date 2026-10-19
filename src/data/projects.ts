import type { ProjectSlug } from '../i18n/es'

export type Project = {
  slug: ProjectSlug // va en la URL: /proyectos/:slug
  title: string // nombre de la obra; no se traduce
  poster: string
}

export const projects: Project[] = [
  { slug: 'las-gratitudes', title: 'Las Gratitudes', poster: '/fotos/Posters/Gratitudes.jpeg' },
  { slug: 'hasta-el-final-de-la-fiesta', title: 'Hasta el Final de la Fiesta', poster: '/fotos/Posters/Hasta_El_Final.png' },
  { slug: 'contracciones', title: 'Contracciones', poster: '/fotos/Posters/Contracciones.png' },
  { slug: 'simplemente-alicia', title: 'Simplemente Alicia', poster: '/fotos/Posters/Simplemente_Alicia.png' },
  { slug: 'betty-la-fea', title: 'Betty la Fea: La Historia Continúa', poster: '/fotos/Posters/betty.jpg' },
  { slug: 'betty-la-fea-temporada-2', title: 'Betty la Fea: La Historia Continúa (T2)', poster: '/fotos/Posters/betty-2.png' },
  { slug: 'escribiendo-el-fin-del-mundo', title: 'Escribiendo el Fin del Mundo', poster: '/fotos/Posters/EDFMS.jpeg' },
  { slug: 'planners-ii', title: 'Planners II', poster: '/fotos/Posters/planners.avif' },
  { slug: 'el-host-ii', title: 'El Host II', poster: '/fotos/Posters/el host 2.jpg' },
  { slug: 'las-estrellas', title: 'Las Estrellas', poster: '/fotos/Posters/Las_Estrellas_Serie_de_TV_978804109_large.jpg' },
  { slug: 'edha', title: 'Edha', poster: '/fotos/Posters/Edha_Serie_de_TV-520315240-large.jpg' },
  { slug: 'esperanza-mia', title: 'Esperanza Mía', poster: '/fotos/Posters/esperanza mia.jpeg' },
  { slug: 'solamente-vos', title: 'Solamente Vos', poster: '/fotos/Posters/Solamente_vos_Serie_de_TV-675101318-large.jpg' },
  { slug: 'cuando-me-sonreis', title: 'Cuando me Sonreís', poster: '/fotos/Posters/cuando me sonreis.webp' },
  { slug: 'ciega-a-citas', title: 'Ciega a Citas', poster: '/fotos/Posters/Ciega_a_citas_Serie.jpeg' },
  { slug: 'socias', title: 'Socias', poster: '/fotos/Posters/socias.jpg' },
]

export const findProject = (slug: string) => projects.find((p) => p.slug === slug)

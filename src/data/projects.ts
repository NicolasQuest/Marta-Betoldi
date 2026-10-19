import type { ProjectSlug } from '../i18n/es'

export type ProjectCategory = 'series' | 'theater' | 'podcast'

export type Project = {
  slug: ProjectSlug // va en la URL: /proyectos/:slug
  title: string // nombre de la obra; no se traduce
  category: ProjectCategory
  year: string
  poster: string
  link?: string // dónde verla (plataforma / canal)
}

// Orden en que se muestran las categorías en Proyectos
export const categories: ProjectCategory[] = ['series', 'theater', 'podcast']

// Dentro de cada categoría, en este orden: del más nuevo al más viejo
export const projects: Project[] = [
  // Series
  { slug: 'simplemente-alicia', title: 'Simplemente Alicia', category: 'series', year: '2025', poster: '/fotos/Posters/simplemente-alicia.jpg', link: 'https://www.netflix.com/ar/title/81704482' },
  { slug: 'betty-la-fea', title: 'Betty la Fea: La Historia Continúa', category: 'series', year: '2024', poster: '/fotos/Posters/betty-la-fea.jpg', link: 'https://www.primevideo.com/-/es/detail/0TPL3401XZ3BYAF8WQAG79A9DG' },
  { slug: 'planners', title: 'Planners', category: 'series', year: '2023', poster: '/fotos/Posters/planners.jpg', link: 'https://www.disneyplus.com/es-ar/browse/entity-e2534135-91ff-4171-ab06-3a95ae797287' },
  { slug: 'edha', title: 'Edha', category: 'series', year: '2018', poster: '/fotos/Posters/Edha_sin_fecha.jpg', link: 'https://www.netflix.com/ar/title/80112916' },
  { slug: 'el-host', title: 'El Host', category: 'series', year: '2018', poster: '/fotos/Posters/el host 2.jpg', link: 'https://portal.app.flow.com.ar/ver/el-host/iw9gi_XxDUeEoXp9GDPP7w' },
  { slug: 'las-estrellas', title: 'Las Estrellas', category: 'series', year: '2017', poster: '/fotos/Posters/Las_Estrellas_Serie_de_TV_978804109_large.jpg', link: 'https://www.eltrecetv.com.ar/las-estrellas/capitulos/' },
  { slug: 'esperanza-mia', title: 'Esperanza Mía', category: 'series', year: '2015-2016', poster: '/fotos/Posters/esperanza mia.jpeg', link: 'https://www.primevideo.com/detail/0RIHGM4TH48O051MZSE9UQM1GE' },
  { slug: 'solamente-vos', title: 'Solamente Vos', category: 'series', year: '2013-2014', poster: '/fotos/Posters/Solamente_vos_Serie_de_TV-675101318-large.jpg', link: 'https://www.eltrecetv.com.ar/solamente-vos/' },
  { slug: 'cuando-me-sonreis', title: 'Cuando me Sonreís', category: 'series', year: '2011', poster: '/fotos/Posters/cuando me sonreis.webp' },
  { slug: 'ciega-a-citas', title: 'Ciega a Citas', category: 'series', year: '2009', poster: '/fotos/Posters/Ciega_a_citas_Serie.jpeg' },
  { slug: 'socias', title: 'Socias', category: 'series', year: '2008', poster: '/fotos/Posters/socias-poster.jpg', link: 'https://www.eltrecetv.com.ar/socias/capitulos/' },

  // Teatro
  { slug: 'hasta-el-final-de-la-fiesta', title: 'Hasta el Final de la Fiesta', category: 'theater', year: '2026', poster: '/fotos/Posters/Hasta_El_Final.png' },
  { slug: 'las-gratitudes', title: 'Las Gratitudes', category: 'theater', year: '2026', poster: '/fotos/Posters/Gratitudes.jpeg' },
  { slug: 'contracciones', title: 'Contracciones', category: 'theater', year: '2007', poster: '/fotos/Posters/Contracciones.png' },

  // Podcast
  { slug: 'escribiendo-el-fin-del-mundo', title: 'Escribiendo el Fin del Mundo', category: 'podcast', year: '2023', poster: '/fotos/Posters/EDFMS.jpeg' },
]

export const findProject = (slug: string) => projects.find((p) => p.slug === slug)

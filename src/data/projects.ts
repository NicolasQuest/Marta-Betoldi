import type { ProjectSlug } from '../i18n/es'

export type ProjectCategory = 'series' | 'theater' | 'podcast'

export type Trailer = {
  url: string
  kind?: 'teaser' // por defecto es tráiler
}

export type Project = {
  slug: ProjectSlug // va en la URL: /proyectos/:slug
  title: string // nombre de la obra; no se traduce
  category: ProjectCategory
  year: string
  platform?: string // dónde se emitió / estrenó (canal, plataforma o teatro); se muestra junto al año
  poster?: string // sin póster, la card muestra el título
  link?: string // dónde verla (plataforma / canal)
  trailers?: Trailer[]
}

// Orden en que se muestran las categorías en Proyectos
export const categories: ProjectCategory[] = ['series', 'theater', 'podcast']

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`

// Dentro de cada categoría, en este orden: del más nuevo al más viejo
export const projects: Project[] = [
  // Series
  { slug: 'simplemente-alicia', title: 'Simplemente Alicia', category: 'series', year: '2025', platform: 'Netflix', poster: '/fotos/Posters/simplemente-alicia.jpg', link: 'https://www.netflix.com/ar/title/81704482', trailers: [{ url: yt('rSuDiDmJd54'), kind: 'teaser' }] },
  { slug: 'betty-la-fea', title: 'Betty la Fea: La Historia Continúa', category: 'series', year: '2024', platform: 'Amazon Prime', poster: '/fotos/Posters/betty-la-fea.jpg', link: 'https://www.primevideo.com/-/es/detail/0TPL3401XZ3BYAF8WQAG79A9DG', trailers: [{ url: yt('l_u9cmkxe_M') }] },
  { slug: 'planners', title: 'Planners II', category: 'series', year: '2023', platform: 'Disney+', poster: '/fotos/Posters/planners.jpg', link: 'https://www.disneyplus.com/es-ar/browse/entity-e2534135-91ff-4171-ab06-3a95ae797287', trailers: [{ url: yt('O-2nQDB2R0Q') }] },
  { slug: 'el-host', title: 'El Host II', category: 'series', year: '2019', platform: 'Fox', poster: '/fotos/Posters/el host 2.jpg', link: 'https://portal.app.flow.com.ar/ver/el-host/iw9gi_XxDUeEoXp9GDPP7w', trailers: [{ url: yt('zRKKbEh0g9E') }] },
  { slug: 'edha', title: 'Edha', category: 'series', year: '2018', platform: 'Netflix', poster: '/fotos/Posters/Edha_sin_fecha.jpg', link: 'https://www.netflix.com/ar/title/80112916', trailers: [{ url: yt('LMK4Pf2RTvY') }] },
  { slug: 'las-estrellas', title: 'Las Estrellas', category: 'series', year: '2017', platform: 'Canal 13', poster: '/fotos/Posters/las-estrellas.jpg', link: 'https://www.eltrecetv.com.ar/las-estrellas/capitulos/', trailers: [{ url: yt('nIis19CJ8sQ') }] },
  { slug: 'esperanza-mia', title: 'Esperanza Mía', category: 'series', year: '2015-2016', platform: 'Canal 13', poster: '/fotos/Posters/esperanza mia.jpeg', link: 'https://www.primevideo.com/detail/0RIHGM4TH48O051MZSE9UQM1GE', trailers: [{ url: yt('jMBdc9_Ijd0') }] },
  { slug: 'solamente-vos', title: 'Solamente Vos', category: 'series', year: '2013-2014', platform: 'Canal 13', poster: '/fotos/Posters/solamente-vos.jpg', link: 'https://www.eltrecetv.com.ar/solamente-vos/', trailers: [{ url: yt('QW2pE0-Kis0') }] },
  { slug: 'danos-colaterales', title: 'Daños Colaterales', category: 'series', year: '2012', platform: 'Canal 13', poster: '/fotos/Posters/danos-colaterales.jpg', link: 'https://www.eltrecetv.com.ar/programas/danos-colaterales/capitulos-completos/capitulo-1_057757/' },
  { slug: 'cuando-me-sonreis', title: 'Cuando me Sonreís', category: 'series', year: '2011', platform: 'Telefe', poster: '/fotos/Posters/cuando-me-sonreis.jpg', trailers: [{ url: yt('ZOaiAZI15U4') }] },
  { slug: 'ciega-a-citas', title: 'Ciega a Citas', category: 'series', year: '2009', platform: 'Televisión Pública', poster: '/fotos/Posters/ciega-a-citas.jpg', trailers: [{ url: yt('oMSqeVv4peE') }] },
  { slug: 'socias', title: 'Socias', category: 'series', year: '2008', platform: 'Canal 13', poster: '/fotos/Posters/socias.jpg', link: 'https://www.eltrecetv.com.ar/socias/capitulos/', trailers: [{ url: yt('rJKy_F0IbNk') }] },

  // Teatro
  { slug: 'hasta-el-final-de-la-fiesta', title: 'Hasta el Final de la Fiesta', category: 'theater', year: '2026', platform: 'Teatro Infanta Isabel', poster: '/fotos/Posters/Hasta_El_Final.png' },
  { slug: 'las-gratitudes', title: 'Las Gratitudes', category: 'theater', year: '2026', platform: 'Teatro de la Abadía', poster: '/fotos/Posters/Gratitudes.jpeg' },
  // TODO: faltan los pósters de estas tres
  { slug: 'el-relato-de-la-esposa-del-alergologo', title: 'El Relato de la Esposa del Alergólogo', category: 'theater', year: '2011' },
  { slug: 'contracciones', title: 'Contracciones', category: 'theater', year: '2007', platform: 'Teatro x la Identidad', poster: '/fotos/Posters/Contracciones.png' },
  { slug: 'loca-feliz-muy-loca', title: 'Loca Feliz, Muy Loca', category: 'theater', year: '2005' },
  { slug: 'extras', title: 'Extras', category: 'theater', year: '2000', platform: 'Estados Unidos' },

  // Podcast
  { slug: 'escribiendo-el-fin-del-mundo', title: 'Escribiendo el Fin del Mundo', category: 'podcast', year: '2023', platform: 'Sonora', poster: '/fotos/Posters/EDFMS.jpeg' },
]

export const findProject = (slug: string) => projects.find((p) => p.slug === slug)

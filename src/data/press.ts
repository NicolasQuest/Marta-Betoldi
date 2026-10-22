import type { PressId } from '../i18n/es'

export type PressItem = {
  id: PressId // título y descripción en i18n (es.ts / en.ts → press.items)
  outlet: string // medio; es también el texto del link
  year: string
  url: string
}

// Del más nuevo al más viejo
export const pressItems: PressItem[] = [
  { id: 'articulo14-alicia', outlet: 'Artículo14', year: '2025', url: 'https://www.articulo14.es/cultura/el-nuevo-fenomeno-de-netflix-es-una-telenovela-colombiana-sobre-una-mujer-casada-con-dos-hombres-20251105.html' },
  { id: 'esto-no-es-una-entrevista', outlet: 'Esto no es una entrevista', year: '2025', url: 'https://www.youtube.com/watch?v=NlzvsSyim98' },
  { id: 'ntn24-alicia', outlet: 'NTN24', year: '2025', url: 'https://www.instagram.com/reels/DRDT8PwDom5/' },
  { id: 'alicia-creadoras', outlet: 'YouTube', year: '2025', url: 'https://www.youtube.com/watch?v=4PZEw85GGwQ' },
  { id: 'produ-primetime', outlet: 'PRODU', year: '2024', url: 'https://www.produ.com/television/videos/marta-betoldi-escritora-y-actriz/' },
  { id: 'produ-catalogo', outlet: 'PRODU', year: '2024', url: 'https://www.produ.com/television/noticias/escritora-marta-betoldi-con-un-catalogo-de-buenas-historias-femeninas-que-ella-misma-pitchea/' },
  { id: 'pagina12-podcast', outlet: 'Página/12', year: '2023', url: 'https://www.pagina12.com.ar/571854-actuar-y-escribir-en-la-era-de-los-podcast/' },
  { id: 'canal7-teatroxlaidentidad', outlet: 'Canal 7', year: '2021', url: 'https://www.youtube.com/watch?v=lbe9rQT1Qtg' },
  { id: 'eltrece-separadas', outlet: 'El Trece', year: '2019', url: 'https://www.eltrecetv.com.ar/noticias/separadas/marta-betoldi-autora-de-separadas-definir-a-la-mujer-por-su-vinculo-con-un-hombre_122535/' },
  { id: 'fuera-de-libreto', outlet: 'Apple Podcasts', year: '2018', url: 'https://podcasts.apple.com/ar/podcast/6-marta-betoldi-fuera-de-libreto/id1169739275?i=1000419897232' },
  { id: 'con-la-gente', outlet: 'Con La Gente', year: '2018', url: 'https://conlagentenoticias.com/?p=48761' },
  { id: 'la-nacion', outlet: 'La Nación', year: '2017', url: 'https://www.lanacion.com.ar/espectaculos/television/por-que-las-estrellas-gustan-tanto-segun-su-guionista-marta-betoldi-nid2037722/' },
  { id: 'el-dia', outlet: 'El Día', year: '2017', url: 'https://www.eldia.com/nota/2017-6-18-1-57-54-el-fino-arte-de-atar-todo-con-alambre-espectaculos' },
  { id: 'la-once-diez', outlet: 'Radio La Once Diez', year: '2012', url: 'https://www.youtube.com/watch?v=FX-G2dss1UY' },
  { id: 'pagina12-novicia', outlet: 'Página/12', year: '2010', url: 'https://www.pagina12.com.ar/diario/suplementos/las12/13-5491-2010-02-05.html' },
]

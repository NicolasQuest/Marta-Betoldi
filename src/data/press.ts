import type { PressId } from '../i18n/es'

export type PressItem = {
  id: PressId // título y descripción en i18n (es.ts / en.ts → press.items)
  outlet: string // medio; es también el texto del link
  date: string // 'AAAA-MM-DD' o solo 'AAAA' si no se conoce el día
  url: string
}

// Del más nuevo al más viejo
export const pressItems: PressItem[] = [
  { id: 'produ-primetime', outlet: 'PRODU', date: '2024', url: 'https://www.produ.com/television/videos/marta-betoldi-escritora-y-actriz/' },
  { id: 'produ-catalogo', outlet: 'PRODU', date: '2024', url: 'https://www.produ.com/television/noticias/escritora-marta-betoldi-con-un-catalogo-de-buenas-historias-femeninas-que-ella-misma-pitchea/' },
  { id: 'pagina12-podcast', outlet: 'Página/12', date: '2023-07-28', url: 'https://www.pagina12.com.ar/571854-actuar-y-escribir-en-la-era-de-los-podcast/' },
  { id: 'fuera-de-libreto', outlet: 'Apple Podcasts', date: '2018', url: 'https://podcasts.apple.com/ar/podcast/6-marta-betoldi-fuera-de-libreto/id1169739275?i=1000419897232' },
  { id: 'con-la-gente', outlet: 'Con La Gente', date: '2018', url: 'https://conlagentenoticias.com/?p=48761' },
  { id: 'el-dia', outlet: 'El Día', date: '2017-06-18', url: 'https://www.eldia.com/nota/2017-6-18-1-57-54-el-fino-arte-de-atar-todo-con-alambre-espectaculos' },
  { id: 'pagina12-novicia', outlet: 'Página/12', date: '2010-02-05', url: 'https://www.pagina12.com.ar/diario/suplementos/las12/13-5491-2010-02-05.html' },
]

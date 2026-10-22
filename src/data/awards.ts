import type { AwardCategory, AwardName } from '../i18n/es'

export type AwardEntry = {
  year: string // '2013/2014' cuando abarca dos temporadas
  award: AwardName // nombre del premio (traducido en es.ts / en.ts → awards.names)
  work: string // la obra; no se traduce
  category?: AwardCategory // categoría (traducida en awards.categories); algunas nominaciones no tienen
}

// Premios ganados, del más nuevo al más viejo
export const awards: AwardEntry[] = [
  { year: '2025', award: 'indiaCatalina', work: 'Betty, la fea: la historia continúa I', category: 'bestProduction' },
  { year: '2017', award: 'tato', work: 'Las Estrellas', category: 'dailyComedy' },
  { year: '2015', award: 'martinFierro', work: 'Esperanza mía', category: 'production' },
  { year: '2015', award: 'kidsChoice', work: 'Esperanza mía', category: 'production' },
  { year: '2013/2014', award: 'martinFierro', work: 'Solamente vos', category: 'production' },
  { year: '2013/2014', award: 'kidsChoice', work: 'Solamente vos', category: 'production' },
  { year: '2012', award: 'fundTV', work: 'Daños colaterales', category: 'production' },
  { year: '2010', award: 'roseDor', work: 'Ciega a citas', category: 'seriesTelenovelas' },
  { year: '2010', award: 'accolade', work: 'Ciega a citas', category: 'excellenceFiction' },
  { year: '2009', award: 'martinFierro', work: 'Ciega a citas', category: 'sitcom' },
  { year: '2009', award: 'argentores', work: 'Ciega a citas', category: 'bestWriter' },
  { year: '2008', award: 'argentores', work: 'Socias', category: 'writingRecognition' },
  { year: '2008', award: 'clarin', work: 'Socias', category: 'bestWriter' },
]

// Nominaciones, del más nuevo al más viejo
export const nominations: AwardEntry[] = [
  { year: '2026', award: 'produ', work: 'Betty, la fea: la historia continúa', category: 'dramedyScript' },
  { year: '2026', award: 'produ', work: 'Betty, la fea: la historia continúa', category: 'romComSeries' },
  { year: '2026', award: 'produ', work: 'Simplemente Alicia', category: 'familyRomanticDramaScript' },
  { year: '2026', award: 'produ', work: 'Simplemente Alicia', category: 'romDramaSeries' },
  { year: '2026', award: 'indiaCatalina', work: 'Betty, la fea: la historia continúa II', category: 'fictionScript' },
  { year: '2026', award: 'indiaCatalina', work: 'Betty, la fea: la historia continúa II', category: 'fictionSeries' },
  { year: '2025', award: 'indiaCatalina', work: 'Betty, la fea: la historia continúa I', category: 'fictionScript' },
  { year: '2025', award: 'indiaCatalina', work: 'Betty, la fea: la historia continúa I', category: 'fictionSeries' },
  { year: '2017', award: 'tato', work: 'Las Estrellas', category: 'screenwriter' },
  { year: '2017', award: 'martinFierro', work: 'Las Estrellas', category: 'dailyFiction' },
  { year: '2015', award: 'tato', work: 'Esperanza mía' },
  { year: '2015', award: 'fundTV', work: 'Esperanza mía' },
  { year: '2014', award: 'fundTV', work: 'Solamente vos' },
  { year: '2011', award: 'martinFierro', work: 'Cuando me sonreís' },
  { year: '2010', award: 'emmy', work: 'Ciega a citas', category: 'telenovela' },
  { year: '2010', award: 'martinFierro', work: 'Ciega a citas', category: 'authorScriptwriter' },
  { year: '2009', award: 'emmy', work: 'Ciega a citas', category: 'telenovela' },
  { year: '2009', award: 'martinFierro', work: 'Ciega a citas', category: 'authorScriptwriter' },
  { year: '2008', award: 'martinFierro', work: 'Socias', category: 'fictionOrWriting' },
]

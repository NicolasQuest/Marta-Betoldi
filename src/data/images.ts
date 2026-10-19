export type Image = {
  src: string
  alt: string
  mono?: boolean // logo de un solo color (negro): en modo oscuro se invierte a blanco
  srcDark?: string // versión para modo oscuro, cuando invertir no sirve (texto negro + color)
}

export const clients: Image[] = [
  { src: '/fotos/Clientes/netflix.png', alt: 'NETFLIX ICONO' },
  { src: '/fotos/Clientes/Amazon.png', alt: 'AMAZON PRIME ICONO' },
  { src: '/fotos/Clientes/star +.png', alt: 'STAR PLUS ICONO' },
  { src: '/fotos/Clientes/disney.png', alt: 'DISNEY PLUS ICONO', mono: true },
  { src: '/fotos/Clientes/fox-logo.png', alt: 'FOX + ICONO' },
  { src: '/fotos/Clientes/atresmedia.png', srcDark: '/fotos/Clientes/atresmedia-dark.png', alt: 'ATRES MEDIA ICONO' },
  { src: '/fotos/Clientes/Telefe_Internacional.png', alt: 'TELEFE INTERNACIONAL ICONO' },
  { src: '/fotos/Clientes/pol-ka.png', alt: 'POLKA ICONO', mono: true },
  { src: '/fotos/Clientes/rcn.png', alt: 'RCN ICONO' },
  { src: '/fotos/Clientes/sonora.png', alt: 'SONORA ICONO', mono: true },
  { src: '/fotos/Clientes/dori-media.png', alt: 'DORI MEDIA ICONO', mono: true },
  { src: '/fotos/Clientes/el-trece.png', alt: 'EL TRECE ICONO' },
  { src: '/fotos/Clientes/dg-producciones.png', alt: 'DG ICONO' },
  { src: '/fotos/Clientes/television-publica-argentina-logo-ED8C948CF8-seeklogo.com.png', alt: 'TV PUBLICA ICONO' },
  { src: '/fotos/Clientes/flow.png', alt: 'Flow' },
  { src: '/fotos/Clientes/GOODMOOD.png', alt: 'GOOD MOON ICONO' },
  { src: '/fotos/Clientes/pegsa-logo.png', alt: 'Pegsa Group Icono', mono: true },
]

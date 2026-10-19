import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  // h1 para el título de cada página; en Bio el "Autora, Guionista, Dramaturga" va como <p>
  as?: 'h1' | 'p'
}

// Título centrado arriba de cada página, mismo estilo en todas
export default function PageTitle({ children, as: Tag = 'h1' }: Props) {
  return (
    <div className="cajaContenedora3 pageTitle">
      <Tag className="textoSecundario4">{children}</Tag>
    </div>
  )
}

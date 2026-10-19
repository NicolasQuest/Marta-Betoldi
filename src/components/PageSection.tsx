import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children?: ReactNode
}

// Bloque de página (Proyectos, Prensa, Premios): mismo estilo que el bloque del CV
export default function PageSection({ id, title, children }: Props) {
  return (
    <section className="cajaContenedora2 fadeIn" id={id}>
      <div className="container">
        <h2 className="titulosPortfolio">{title}</h2>
        {children}
      </div>
    </section>
  )
}

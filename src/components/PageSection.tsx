import type { ReactNode } from 'react'
import PageTitle from './PageTitle'

type Props = {
  id: string
  title: string
  children?: ReactNode
}

// Página con título centrado (PageTitle) y su contenido debajo
export default function PageSection({ id, title, children }: Props) {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <section className="cajaContenedora2 fadeIn" id={id}>
        <div className="container">{children}</div>
      </section>
    </>
  )
}

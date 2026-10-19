import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

// Lo que se repite en todas las páginas: navbar y footer.
// Con el router, este componente envuelve el <Outlet /> (o las rutas).
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="elBody" id="elBody">
        <div className="conteiner1">
          {children}

          <Footer />
        </div>
      </div>
    </>
  )
}

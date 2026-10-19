import type { ReactNode } from 'react'
import Navbar from './Navbar'

// Lo que se repite en todas las páginas: el navbar.
// Con el router, este componente envuelve el <Outlet /> (o las rutas).
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="elBody" id="elBody">
        <div className="conteiner1">
          {children}
        </div>
      </div>
    </>
  )
}

import Navbar from './Navbar'
import {Outlet} from "react-router";
import RouteEffects from './RouteEffects'

// Lo que se repite en todas las páginas: el navbar.
// La página actual va en <Outlet />
export default function Layout() {
  return (
    <>
      <RouteEffects />
      <Navbar />

      <div className="elBody" id="elBody">
        <div className="conteiner1">
            <Outlet />
        </div>
      </div>
    </>
  )
}

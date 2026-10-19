import Layout from './components/Layout'
import BioPage from './pages/BioPage'
import ProyectosPage from './pages/ProyectosPage'
import ProyectoPage from './pages/ProyectoPage'
import PrensaPage from './pages/PrensaPage'
import PremiosPage from './pages/PremiosPage'
import ContactoPage from './pages/ContactoPage'
import {Route, Routes} from "react-router";

export default function App() {

  return (
      <Routes>
          <Route element={<Layout />}>
              <Route index element={<BioPage />} />
              <Route path="proyectos" element={<ProyectosPage />} />
              <Route path="proyectos/:slug" element={<ProyectoPage />} />
              <Route path="prensa" element={<PrensaPage />} />
              <Route path="premios" element={<PremiosPage />} />
              <Route path="contacto" element={<ContactoPage />} />
              <Route path="*" element={<BioPage />} />
          </Route>
      </Routes>
  )
}

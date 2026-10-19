import Layout from './components/Layout'
import BioPage from './pages/BioPage'
import ProyectosPage from './pages/ProyectosPage'
import ProyectoPage from './pages/ProyectoPage'
import PrensaPage from './pages/PrensaPage'
import PremiosPage from './pages/PremiosPage'
import ContactoPage from './pages/ContactoPage'

// Provisional hasta que esté el router: elige la página según la URL.
// TODO: reemplazar por las rutas (Layout como layout route, cada página en su path)
const pages: Record<string, () => React.JSX.Element> = {
  '/': BioPage,
  '/proyectos': ProyectosPage,
  '/prensa': PrensaPage,
  '/premios': PremiosPage,
  '/contacto': ContactoPage,
}

export default function App() {
  const path = window.location.pathname
  // /proyectos/:slug → detalle del proyecto
  const projectSlug = path.match(/^\/proyectos\/([^/]+)\/?$/)?.[1]
  const Page = pages[path] ?? BioPage

  return (
    <Layout>
      {projectSlug ? <ProyectoPage slug={decodeURIComponent(projectSlug)} /> : <Page />}
    </Layout>
  )
}

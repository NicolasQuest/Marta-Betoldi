import PageSection from '../components/PageSection'
import { findProject } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/ProjectsGrid.css'

// Detalle de un proyecto: /proyectos/:slug
// TODO: con el router, sacar el slug de useParams() en vez de recibirlo por prop
export default function ProyectoPage({ slug }: { slug: string }) {
  const { t } = useLanguage()
  const project = findProject(slug)

  // TODO: con el router, cambiar los <a href> por <Link to>
  const backLink = (
    <a className="link-vision" href="/proyectos">{t.projects.back}</a>
  )

  if (!project) {
    return (
      <PageSection id="proyecto" title={t.projects.notFound}>
        {backLink}
      </PageSection>
    )
  }

  const { genre, description } = t.projects.items[project.slug]

  return (
    <PageSection id="proyecto" title={project.title}>
      <div className="projectDetail">
        <img className="projectDetail-poster" src={project.poster} alt={project.title} />
        <div className="projectDetail-text">
          {genre && <p className="projectDetail-genre">{genre}</p>}
          <p className="textoBio">{description}</p>
          {backLink}
        </div>
      </div>
    </PageSection>
  )
}

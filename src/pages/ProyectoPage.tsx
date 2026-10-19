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
          {/* Año y, si hay, formato / género: "2018 · Serie / Thriller dramático - Netflix" */}
          <p className="projectDetail-genre">
            {[project.year, genre].filter(Boolean).join(' · ')}
          </p>
          <p className="textoBio">{description}</p>
          <div className="projectDetail-links">
            {project.link && (
              <a className="link-vision projectDetail-watch" href={project.link} target="_blank" rel="noreferrer">
                {t.projects.watch}
              </a>
            )}
            {backLink}
          </div>
        </div>
      </div>
    </PageSection>
  )
}

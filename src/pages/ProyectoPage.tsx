import PageSection from '../components/PageSection'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { findProject } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/ProjectsGrid.css'
import { Link, useParams } from 'react-router'

// Detalle de un proyecto: /proyectos/:slug
export default function ProyectoPage() {
    const { slug = '' } = useParams()
    const { t } = useLanguage()
    const project = findProject(slug)

    // Vuelve a Proyectos en la pestaña de este proyecto (Series, Teatro o Podcast)
    const backLink = (
        <Link className="link-vision" to={project ? `/proyectos#${project.category}` : '/proyectos'}>
            {t.projects.back}
        </Link>
    )

  if (!project) {
    return (
      <PageSection id="proyecto" title={t.projects.notFound}>
        {backLink}
      </PageSection>
    )
  }

  const { description } = t.projects.items[project.slug]
  const trailers = project.trailers ?? []

  return (
    <PageSection id="proyecto" title={project.title}>
      <div className="projectDetail">
        {project.poster && <img className="projectDetail-poster" src={project.poster} alt={project.title} />}
        <div className="projectDetail-text">
          {/* Año y plataforma, en gris: "2025 · Netflix" */}
          <p className="projectDetail-genre">
            {[project.year, project.platform].filter(Boolean).join(' · ')}
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

      {/* Tráiler / teaser abajo de todo, embebido de YouTube (carga al hacer clic) */}
      {/* Cada video se chequea por separado: si uno falla, solo ese se oculta */}
      {trailers.map((tr) => {
        const label = tr.kind === 'teaser' ? t.projects.teaser : t.projects.trailer
        return (
          <YouTubeEmbed
            key={tr.url}
            url={tr.url}
            heading={label}
            title={`${label} · ${project.title}`}
            playLabel={t.projects.play}
            youtubeLabel={t.projects.watchOnYoutube}
          />
        )
      })}
    </PageSection>
  )
}

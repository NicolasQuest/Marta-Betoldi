import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import './ProjectsGrid.css'

export default function ProjectsGrid() {
  const { t } = useLanguage()

  return (
    <ul className="projectsGrid">
      {projects.map((p) => (
        <li key={p.slug}>
          {/* TODO: con el router, cambiar por <Link to={`/proyectos/${p.slug}`}> */}
          <a className="projectCard" href={`/proyectos/${p.slug}`} aria-label={`${p.title}: ${t.projects.learnMore}`}>
            <img src={p.poster} alt={p.title} loading="lazy" />
            <span className="projectCard-overlay" aria-hidden="true">
              <span className="projectCard-cta">{t.projects.learnMore}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

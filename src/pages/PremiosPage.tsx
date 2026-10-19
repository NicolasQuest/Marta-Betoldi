import PageSection from '../components/PageSection'
import { awards } from '../data/awards'
import { findProject } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import '../css/entries.css'

// Mismo formato que Prensa, sin link: año · obra, nombre del premio y descripción
export default function PremiosPage() {
  const { t } = useLanguage()

  return (
    <PageSection id="premios" title={t.nav.awards}>
      <ul className="entryList">
        {awards.map((award) => {
          const { title, description } = t.awards.items[award.id]
          const project = findProject(award.project)
          return (
            <li className="entry" key={award.id}>
              <p className="entry-meta">
                {award.year}
                {project && ` · ${project.title}`}
              </p>
              <h2 className="entry-title">{title}</h2>
              <p className="entry-description">{description}</p>
            </li>
          )
        })}
      </ul>
    </PageSection>
  )
}

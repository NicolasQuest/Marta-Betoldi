import { categories, projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import './ProjectsGrid.css'

// Un grid por categoría (Series, Teatro, Podcast), cada una con su título
export default function ProjectsGrid() {
  const { t } = useLanguage()

  return (
    <>
      {categories.map((category) => {
        const items = projects.filter((p) => p.category === category)
        if (items.length === 0) return null

        return (
          <section className="projectsCategory" key={category} aria-labelledby={`cat-${category}`}>
            <h2 className="projectsCategory-title" id={`cat-${category}`}>
              {t.projects.categories[category]}
            </h2>
            <ul className="projectsGrid">
              {items.map((p) => (
                <li key={p.slug}>
                  {/* TODO: con el router, cambiar por <Link to={`/proyectos/${p.slug}`}> */}
                  <a className="projectCard" href={`/proyectos/${p.slug}`} aria-label={`${p.title}: ${t.projects.learnMore}`}>
                    <span className="projectCard-poster">
                      {/* Fondo: el mismo póster ampliado y difuminado, rellena lo que sobra del marco */}
                      <img className="projectCard-bg" src={p.poster} alt="" aria-hidden="true" loading="lazy" />
                      <img className="projectCard-img" src={p.poster} alt={p.title} loading="lazy" />
                      <span className="projectCard-overlay" aria-hidden="true">
                        <span className="projectCard-cta">{t.projects.learnMore}</span>
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </>
  )
}

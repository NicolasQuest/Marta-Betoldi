import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { categories, projects, type ProjectCategory } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import './ProjectsGrid.css'

// La pestaña activa va en el hash (/proyectos#theater) para que "Volver" desde un
// proyecto, o un link compartido, abran la misma categoría.
function categoryFromHash(): ProjectCategory {
  const hash = window.location.hash.slice(1)
  return (categories as string[]).includes(hash) ? (hash as ProjectCategory) : categories[0]
}

// Pestañas Series / Teatro / Podcast: se ve una categoría por vez
export default function ProjectsGrid() {
  const { t } = useLanguage()
  const [active, setActive] = useState<ProjectCategory>(categoryFromHash)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Si el hash cambia sin recargar (atrás/adelante, un link a /proyectos#podcast…)
  useEffect(() => {
    const onHashChange = () => setActive(categoryFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const select = (category: ProjectCategory) => {
    setActive(category)
    history.replaceState(null, '', `#${category}`)
  }

  // Flechas izquierda/derecha para moverse entre pestañas con teclado
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const i = categories.indexOf(active)
    const next = categories[(i + (e.key === 'ArrowRight' ? 1 : -1) + categories.length) % categories.length]
    select(next)
    tabRefs.current[next]?.focus()
  }

  const items = projects.filter((p) => p.category === active)

  return (
    <>
      <div className="projectsTabs" role="tablist" onKeyDown={onKeyDown}>
        {categories.map((category) => {
          const selected = category === active
          return (
            <button
              key={category}
              ref={(el) => { tabRefs.current[category] = el }}
              type="button"
              role="tab"
              id={`tab-${category}`}
              aria-selected={selected}
              aria-controls={`panel-${category}`}
              tabIndex={selected ? 0 : -1}
              className={`projectsTab${selected ? ' active' : ''}`}
              onClick={() => select(category)}
            >
              {t.projects.categories[category]}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
        <ul className="projectsGrid">
          {items.map((p) => (
            <li key={p.slug}>
              {/* TODO: con el router, cambiar por <Link to={`/proyectos/${p.slug}`}> */}
              <a className="projectCard" href={`/proyectos/${p.slug}`} aria-label={`${p.title}: ${t.projects.learnMore}`}>
                <span className="projectCard-poster">
                  <img className="projectCard-img" src={p.poster} alt={p.title} loading="lazy" />
                  <span className="projectCard-overlay" aria-hidden="true">
                    <span className="projectCard-cta">{t.projects.learnMore}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

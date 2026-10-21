import PageSection from '../components/PageSection'
import { pressItems } from '../data/press'
import { useLanguage } from '../i18n/LanguageContext'
import '../css/entries.css'

// Mismo formato que Premios y Proyectos: "año · medio" en gris
export default function PrensaPage() {
  const { t } = useLanguage()

  return (
    <PageSection id="prensa" title={t.nav.press}>
      <ul className="entryList">
        {pressItems.map((item) => {
          const { title, description } = t.press.items[item.id]
          return (
            <li className="entry" key={item.id}>
              <p className="entry-meta">
                {item.year} · {item.outlet}
              </p>
              <h2 className="entry-title">{title}</h2>
              <p className="entry-description">{description}</p>
              <a
                className="link-vision entry-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.outlet}: ${title}`}
              >
                {item.outlet} →
              </a>
            </li>
          )
        })}
      </ul>
    </PageSection>
  )
}

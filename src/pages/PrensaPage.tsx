import PageSection from '../components/PageSection'
import { pressItems } from '../data/press'
import { useLanguage, type Lang } from '../i18n/LanguageContext'
import './PrensaPage.css'

// '2023-07-28' → "28 de julio de 2023" / "July 28, 2023"; '2018' → "2018"
function formatDate(date: string, lang: Lang) {
  const [y, m, d] = date.split('-').map(Number)
  if (!m || !d) return date
  return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(y, m - 1, d)))
}

export default function PrensaPage() {
  const { t, lang } = useLanguage()

  return (
    <PageSection id="prensa" title={t.nav.press}>
      <ul className="pressList">
        {pressItems.map((item) => {
          const { title, description } = t.press.items[item.id]
          return (
            <li className="pressItem" key={item.id}>
              <p className="pressItem-meta">
                {item.outlet} · {formatDate(item.date, lang)}
              </p>
              <h2 className="pressItem-title">{title}</h2>
              <p className="pressItem-description">{description}</p>
              <a
                className="link-vision pressItem-link"
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

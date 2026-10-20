import PageSection from '../components/PageSection'
import { awards, nominations, type AwardEntry } from '../data/awards'
import { useLanguage } from '../i18n/LanguageContext'
import '../css/entries.css'

// Dos bloques (Premios / Nominaciones) con el formato de Prensa:
// "año · obra" en gris, el premio como título y la categoría debajo
export default function PremiosPage() {
  const { t } = useLanguage()

  const list = (items: AwardEntry[]) => (
    <ul className="entryList">
      {items.map((item, i) => (
        <li className="entry" key={`${item.year}-${item.award}-${item.category ?? i}-${item.work}`}>
          <p className="entry-meta">
            {item.year} · {item.work}
          </p>
          <h3 className="entry-title">{t.awards.names[item.award]}</h3>
          {item.category && <p className="entry-description">{t.awards.categories[item.category]}</p>}
        </li>
      ))}
    </ul>
  )

  return (
    <PageSection id="premios" title={t.nav.awards}>
      <h2 className="entryGroup-title">{t.awards.winsTitle}</h2>
      {list(awards)}

      <h2 className="entryGroup-title">{t.awards.nominationsTitle}</h2>
      {list(nominations)}
    </PageSection>
  )
}

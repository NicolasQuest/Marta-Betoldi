import { useLanguage } from '../i18n/LanguageContext'
import RichText from './RichText'

export default function Bio() {
  const { t } = useLanguage()

  return (
    <main className="cajaContenedora1 fadeIn">
      <div className="div" id="bio">
        <a target="_blank" href="https://es.wikipedia.org/wiki/Marta_Betoldi">
          <img src="/fotos/foto menu.png" alt={t.bio.photoAlt} />
        </a>
      </div>
      <div className="cajaItemTres">
        {t.bio.paragraphs.map((p) => (
          <p className="textoBio" key={p}>
            <RichText text={p} />
          </p>
        ))}
      </div>
    </main>
  )
}

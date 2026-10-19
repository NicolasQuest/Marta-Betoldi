import Bio from '../components/Bio'
import ClientsCarousel from '../components/ClientsCarousel'
import { useLanguage } from '../i18n/LanguageContext'

export default function BioPage() {
  const { t } = useLanguage()

  return (
    <>
      <div className="cajaContenedora3 bioSubtitle">
        <p className="textoSecundario4 nav-link">{t.subtitle}</p>
      </div>
      <Bio />
      <ClientsCarousel />
    </>
  )
}

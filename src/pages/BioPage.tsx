import Bio from '../components/Bio'
import ClientsCarousel from '../components/ClientsCarousel'
import PageTitle from '../components/PageTitle'
import { useLanguage } from '../i18n/LanguageContext'

export default function BioPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageTitle as="p">{t.subtitle}</PageTitle>
      <Bio />
      <ClientsCarousel />
    </>
  )
}

import PageSection from '../components/PageSection'
import { useLanguage } from '../i18n/LanguageContext'

export default function PremiosPage() {
  const { t } = useLanguage()

  return (
    <PageSection id="premios" title={t.nav.awards}>
      {/* TODO: contenido de Premios */}
    </PageSection>
  )
}

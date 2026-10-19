import PageSection from '../components/PageSection'
import { useLanguage } from '../i18n/LanguageContext'

export default function PrensaPage() {
  const { t } = useLanguage()

  return (
    <PageSection id="prensa" title={t.nav.press}>
      {/* TODO: contenido de Prensa */}
    </PageSection>
  )
}

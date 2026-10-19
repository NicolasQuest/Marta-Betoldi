import PageSection from '../components/PageSection'
import ProjectsGrid from '../components/ProjectsGrid'
import { useLanguage } from '../i18n/LanguageContext'

export default function ProyectosPage() {
  const { t } = useLanguage()

  return (
    <PageSection id="proyectos" title={t.nav.projects}>
      <ProjectsGrid />
    </PageSection>
  )
}

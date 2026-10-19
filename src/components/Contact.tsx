import PageTitle from './PageTitle'
import { useLanguage } from '../i18n/LanguageContext'

const socials = [
  { href: 'https://www.instagram.com/martabetoldi/?hl=es', icon: 'fa-instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/marta-betoldi-9462bb49/?originalSubdomain=es', icon: 'fa-linkedin', label: 'LinkedIn' },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <PageTitle>{t.contact.title}</PageTitle>
      <div className="cajaContenedora3 fadeIn" id="contacto">
        <div className="portfolio">
          <p className="textoSecundario2">
            Email:{' '}
            <a className="link-vision" href="mailto:martabetoldi@gmail.com">
              Martabetoldi@gmail.com
            </a>
            <br />
            {t.contact.agent}:{' '}
            <a className="link-vision" target="_blank" href="https://www.vision-la.com/">
              Vision Entertainment
            </a>
          </p>
          <div className="contactSocials">
            {socials.map((s) => (
              <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" className={`fa ${s.icon}`} aria-label={s.label}></a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

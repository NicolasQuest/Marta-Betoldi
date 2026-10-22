import PageTitle from './PageTitle'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

const EMAIL = 'martabetoldi@gmail.com'
const AGENT_EMAIL = 'victor@vision-la.com'
const PRESS_EMAIL = 'lumimiceli@gmail.com'

const socials = [
  { href: 'https://www.instagram.com/martabetoldi/?hl=es', icon: 'fa-instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/marta-betoldi-9462bb49/?originalSubdomain=es', icon: 'fa-linkedin', label: 'LinkedIn' },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <PageTitle>{t.contact.title}</PageTitle>
      <section className="contact fadeIn" id="contacto">
        {/* Mismo patrón que Prensa y Proyectos: etiqueta chica en gris + valor */}
        <dl className="contact-list">
          <div className="contact-row">
            <dt>{t.contact.email}</dt>
            <dd>
              <a className="link-vision" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>{t.contact.agent}</dt>
            <dd className="contact-stack">
              <a className="link-vision" href="https://www.vision-la.com/" target="_blank" rel="noreferrer">
                Vision Entertainment
              </a>
              <a className="link-vision" href={`mailto:${AGENT_EMAIL}`}>{AGENT_EMAIL}</a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>{t.contact.press}</dt>
            <dd className="contact-stack">
              <span>Lucia Miceli</span>
              <a className="link-vision" href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a>
            </dd>
          </div>
          <div className="contact-row">
            <dt>{t.contact.socials}</dt>
            <dd className="contact-socials">
              {socials.map((s) => (
                <a key={s.icon} className="link-vision" href={s.href} target="_blank" rel="noreferrer">
                  <i className={`fa ${s.icon}`} aria-hidden="true"></i>
                  {s.label}
                </a>
              ))}
            </dd>
          </div>
        </dl>

        <a className="contact-cta" href={`mailto:${EMAIL}`}>
          {t.contact.writeEmail} →
        </a>
      </section>
    </>
  )
}

import { useLanguage, type Lang } from '../i18n/LanguageContext'

// Rutas de cada página; no se traducen, solo cambia el texto del link.
// TODO: con el router, cambiar <a href> por <Link to> / <NavLink to>
export const sections = [
  { key: 'bio', href: '/' },
  { key: 'projects', href: '/proyectos' },
  { key: 'press', href: '/prensa' },
  { key: 'awards', href: '/premios' },
  { key: 'contact', href: '/contacto' },
] as const

// Cada idioma se nombra en su propio idioma: el que no entiende el actual igual reconoce el suyo
const languages: { code: Lang; label: string; name: string }[] = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()

  return (
    <nav className="navbar navbar-expand-lg fixed-top locura navbar-padded">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">Marta Betoldi</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-end">
            {sections.map((s) => (
              <li className="nav-item" key={s.key}>
                {/* TODO: la clase active la pone NavLink según la ruta actual */}
                <a className="nav-link" href={s.href}>
                  {t.nav[s.key]}
                </a>
              </li>
            ))}
            <li className="nav-item langSwitch" role="group" aria-label={t.nav.language}>
              {languages.map((l, i) => (
                <span key={l.code} className="langSwitch-item">
                  {i > 0 && <span className="langSwitch-sep" aria-hidden="true">|</span>}
                  <button
                    type="button"
                    className={`nav-link${l.code === lang ? ' active' : ''}`}
                    lang={l.code}
                    aria-label={l.name}
                    aria-pressed={l.code === lang}
                    onClick={() => setLang(l.code)}
                  >
                    {l.label}
                  </button>
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

import { clients } from '../data/images'
import { useTheme } from '../theme/ThemeContext'

export default function ClientsCarousel() {
  const { theme } = useTheme()

  return (
    <div className="logos cajaContenedora3">
      {[0, 1].map((copy) => (
        <div className="logos-slide" key={copy} aria-hidden={copy === 1 || undefined}>
          {clients.map((client) => (
            <img
              key={client.src}
              src={theme === 'dark' && client.srcDark ? client.srcDark : client.src}
              alt={client.alt}
              className={client.mono ? 'logo-mono' : undefined}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

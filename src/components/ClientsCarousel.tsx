import { clients } from '../data/images'

export default function ClientsCarousel() {
  return (
    <div className="logos cajaContenedora3">
      {[0, 1].map((copy) => (
        <div className="logos-slide" key={copy} aria-hidden={copy === 1 || undefined}>
          {clients.map((client) => (
            <img key={client.src} src={client.src} alt={client.alt} />
          ))}
        </div>
      ))}
    </div>
  )
}

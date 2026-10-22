import { useEffect, useRef, useState } from 'react'
import './YouTubeEmbed.css'

type Props = {
  url: string // https://www.youtube.com/watch?v=ID
  heading: string // "Tráiler" / "Teaser": título de la sección
  title: string // para el iframe y el botón (accesibilidad)
  playLabel: string // "Reproducir" / "Play"
  youtubeLabel: string // "Ver en YouTube →", si no se puede embeber
}

const videoId = (url: string) => new URL(url).searchParams.get('v') ?? ''

// Reproductor lo más limpio que YouTube permite: controles básicos y pantalla completa,
// sin anotaciones, sin subtítulos automáticos, barra blanca y relacionados solo del mismo canal.
// (El logo y el título de YouTube ya no se pueden ocultar: modestbranding dejó de existir en 2023.)
const PLAYER_PARAMS = new URLSearchParams({
  autoplay: '1',
  controls: '1',
  fs: '1',
  rel: '0',
  iv_load_policy: '3',
  cc_load_policy: '0',
  playsinline: '1',
  color: 'white',
  enablejsapi: '1',
}).toString()

// Cada video se chequea solo; si falla uno, los demás siguen igual:
//   'ok'       → miniatura con play; al hacer clic, el reproductor
//   'missing'  → el video no existe o es privado: no se muestra la sección
//   'blocked'  → existe pero no permite embeberse: link para verlo en YouTube
type Status = 'ok' | 'missing' | 'blocked'

// YouTube no da error si falta una miniatura: devuelve un placeholder gris de 120x90
const isPlaceholder = (img: HTMLImageElement) => img.naturalWidth <= 120

// Muestra la miniatura con un botón de play; el reproductor de YouTube (~1 MB de
// scripts) recién se carga al hacer clic. Usa youtube-nocookie: sin cookies hasta reproducir.
export default function YouTubeEmbed({ url, heading, title, playLabel, youtubeLabel }: Props) {
  const id = videoId(url)
  const [status, setStatus] = useState<Status>('ok')
  const [playing, setPlaying] = useState(false)
  // Primero la miniatura en alta (maxres); no todos los videos la tienen → la estándar (hq)
  const [thumb, setThumb] = useState<'maxres' | 'hq'>('maxres')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Si falla la miniatura en alta probamos la estándar; si también falla, el video ya no está
  const onThumbFailed = () => (thumb === 'maxres' ? setThumb('hq') : setStatus('missing'))

  // Mensajes del reproductor (API de iframe de YouTube): le mandamos "listening",
  // repetido hasta que esté listo, y nos avisa cambios de estado y errores.
  useEffect(() => {
    if (!playing) return
    let answered = false
    const send = () =>
      iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id, channel: 'widget' }), '*')
    const timer = window.setInterval(() => (answered ? window.clearInterval(timer) : send()), 400)

    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframeRef.current?.contentWindow) return
      answered = true
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        // Al terminar volvemos a la miniatura: así no aparece la grilla de "relacionados"
        if (data?.info?.playerState === 0) setPlaying(false)
        // Errores: 100 = no existe / privado; 101 y 150 = no permite embeberse
        if (data?.event === 'onError') {
          setPlaying(false)
          setStatus(data.info === 100 ? 'missing' : 'blocked')
        }
      } catch {
        // mensajes que no son JSON: se ignoran
      }
    }
    window.addEventListener('message', onMessage)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener('message', onMessage)
    }
  }, [playing, id])

  if (status === 'missing') return null

  return (
    <section className="projectTrailer">
      <h2 className="projectTrailer-title">{heading}</h2>

      {status === 'blocked' ? (
        <a className="link-vision projectDetail-watch" href={url} target="_blank" rel="noreferrer">
          {youtubeLabel}
        </a>
      ) : (
        <div className="ytEmbed">
          {playing ? (
            <iframe
              ref={iframeRef}
              src={`https://www.youtube-nocookie.com/embed/${id}?${PLAYER_PARAMS}`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <button type="button" className="ytEmbed-facade" onClick={() => setPlaying(true)} aria-label={`${playLabel}: ${title}`}>
              <img
                key={thumb}
                src={`https://i.ytimg.com/vi/${id}/${thumb}default.jpg`}
                alt=""
                loading="lazy"
                onError={onThumbFailed}
                onLoad={(e) => isPlaceholder(e.currentTarget) && onThumbFailed()}
              />
              <span className="ytEmbed-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      )}
    </section>
  )
}

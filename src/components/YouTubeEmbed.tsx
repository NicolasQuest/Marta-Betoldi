import { useEffect, useRef, useState } from 'react'
import './YouTubeEmbed.css'

type Props = {
  url: string // https://www.youtube.com/watch?v=ID
  title: string // para el iframe y el botón (accesibilidad)
  playLabel: string // "Reproducir" / "Play"
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

// Muestra la miniatura con un botón de play; el reproductor de YouTube (~1 MB de
// scripts) recién se carga al hacer clic. Usa youtube-nocookie: sin cookies hasta reproducir.
export default function YouTubeEmbed({ url, title, playLabel }: Props) {
  const id = videoId(url)
  const [playing, setPlaying] = useState(false)
  // No todos los videos tienen miniatura en alta (maxres); si falla, la estándar
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`)
  const showFallback = () => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Al terminar el video volvemos a la miniatura, así no aparece la grilla de
  // "videos relacionados" que YouTube muestra al final (no se puede desactivar).
  // Protocolo de la API de iframe de YouTube: le mandamos "listening" (repetido hasta
  // que el reproductor esté listo y conteste) y nos avisa cada cambio de estado.
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
        if (data?.info?.playerState === 0) setPlaying(false) // 0 = terminó
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

  return (
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
            src={thumb}
            alt=""
            loading="lazy"
            onError={showFallback}
            // YouTube no da error si falta la miniatura en alta: devuelve un placeholder de 120x90
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth <= 120) showFallback()
            }}
          />
          <span className="ytEmbed-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

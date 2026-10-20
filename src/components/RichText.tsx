import type { ReactNode } from 'react'

// Formato mínimo para textos de las traducciones, sin HTML:
//   **negrita**   *itálica*   ***negrita e itálica***
// La negrita puede tener itálicas adentro: **formato de *Simplemente Alicia* para Netflix**
const TOKEN = /(\*\*\*[^*]+\*\*\*|\*\*.+?\*\*(?!\*)|\*[^*]+\*)/g

export function renderRich(text: string, keyPrefix = 'r'): ReactNode[] {
  return text.split(TOKEN).filter(Boolean).map((part, i) => {
    const key = `${keyPrefix}-${i}`
    if (part.startsWith('***')) {
      return <strong key={key}><em>{part.slice(3, -3)}</em></strong>
    }
    if (part.startsWith('**')) {
      return <strong key={key}>{renderRich(part.slice(2, -2), key)}</strong>
    }
    if (part.startsWith('*') && part.length > 2) {
      return <em key={key}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

export default function RichText({ text }: { text: string }) {
  return <>{renderRich(text)}</>
}

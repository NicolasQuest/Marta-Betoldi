import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { es, type Translations } from './es'
import { en } from './en'

export type Lang = 'es' | 'en'

const translations: Record<Lang, Translations> = { es, en }
const STORAGE_KEY = 'lang'

type LanguageContextValue = {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // localStorage puede no estar disponible (modo privado); seguimos con el default
  }
  return 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // idem: si no se puede guardar, el idioma vale solo para esta visita
    }
  }, [lang])

  return (
    <LanguageContext value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage tiene que usarse dentro de <LanguageProvider>')
  return ctx
}

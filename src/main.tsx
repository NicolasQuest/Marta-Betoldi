import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Mismo orden de estilos que el HTML original: estilo.css va antes que Bootstrap
import './css/estilo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './css/wickedcss.min.css'
// Colores claro / oscuro: va último para pisar a los anteriores
import './css/theme.css'
// Necesario para el collapse del navbar (data-bs-toggle)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)

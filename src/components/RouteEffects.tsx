import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Sin recargar la página, al cambiar de ruta hay que hacer a mano lo que antes pasaba solo:
// volver arriba y cerrar el menú móvil si quedó abierto.
export default function RouteEffects() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)

        const menu = document.getElementById('navbarNav')
        if (menu?.classList.contains('show')) {
            menu.classList.remove('show')
            const toggler = document.querySelector('.navbar-toggler')
            toggler?.classList.add('collapsed')
            toggler?.setAttribute('aria-expanded', 'false')
        }
    }, [pathname])

    return null
}

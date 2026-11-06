import { Link, NavLink } from 'react-router'
import useInventario from '../hooks/useInventario.js'
import { assetUrl } from '../util/assetUrl.js'

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/nuestras-tiendas', label: 'Nuestras tiendas' },
  { to: '/contactanos', label: 'Contáctanos' },
  { to: '/como-comprar', label: 'Cómo comprar' },
  { to: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { to: '/agregar-articulo', label: 'Agregar artículo' },
  { to: '/inventario', label: 'Inventario' },
  { to: '/carrito', label: 'Carrito' },
]

function claseEnlace({ isActive }) {
  return isActive
    ? 'inline-block whitespace-nowrap rounded-md bg-(--color-primario-suave) px-3 py-2 text-sm font-semibold text-(--color-primario)'
    : 'inline-block whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900'
}

function Navigation() {
  const { carrito } = useInventario()
  const totalUnidades = carrito.reduce(
    (suma, entrada) => suma + entrada.cantidad,
    0,
  )

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3">
        <Link to="/" className="flex w-fit items-center gap-3 no-underline">
          <img
            src={assetUrl('img/logo-casa-gourmet.jpg')}
            alt="Logo Casa Gourmet"
            className="h-12 w-12 shrink-0 rounded-xl object-cover shadow-sm"
          />
          <span>
            <span className="block text-lg font-bold leading-tight text-[#143525]">
              Casa Gourmet
            </span>
            <span className="block text-xs font-normal leading-tight text-gray-500">
              Gourmet · Gestión y atención al cliente
            </span>
          </span>
        </Link>

        <nav aria-label="Menú principal" className="w-full">
          <ul className="m-0 flex list-none flex-wrap items-center gap-1 p-0">
            {enlaces.map((enlace) => (
              <li key={enlace.to}>
                <NavLink to={enlace.to} end={enlace.end} className={claseEnlace}>
                  {enlace.to === '/carrito' && totalUnidades > 0
                    ? `${enlace.label} (${totalUnidades})`
                    : enlace.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation

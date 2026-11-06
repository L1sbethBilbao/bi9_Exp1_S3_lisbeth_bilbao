import { Link } from 'react-router'
import PageHeader from '../components/PageHeader.jsx'

function NoEncontrada() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <PageHeader
        etiqueta="Error 404"
        titulo="Página no encontrada"
        descripcion="La dirección que intentas abrir no existe en el sitio. Puedes volver al inicio o revisar el inventario."
      />
      <div className="flex flex-wrap gap-2">
        <Link
          to="/"
          className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:bg-(--color-primario-hover)"
        >
          Ir al inicio
        </Link>
        <Link
          to="/inventario"
          className="inline-block rounded-md border border-(--color-primario) px-3 py-1.5 text-base text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
        >
          Ver inventario
        </Link>
      </div>
    </section>
  )
}

export default NoEncontrada

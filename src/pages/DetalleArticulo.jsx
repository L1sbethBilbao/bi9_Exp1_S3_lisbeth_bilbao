import { useState } from 'react'
import { useParams } from 'react-router'
import useInventario from '../hooks/useInventario.js'
import Boton from '../components/Boton.jsx'
import EnlaceBoton from '../components/EnlaceBoton.jsx'

function DetalleArticulo() {
  const { id } = useParams()
  const { articulos, agregarAlCarrito } = useInventario()
  const [aviso, setAviso] = useState('')

  const articulo = articulos.find(
    (item) => String(item.id) === String(id),
  )

  if (!articulo) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-xl rounded-md bg-white p-6 text-center shadow-sm">
          <h1 className="mb-2 text-3xl font-bold">Artículo no encontrado</h1>
          <p className="mb-4 text-gray-500">
            El artículo que buscas no existe o ya no está disponible.
          </p>
          <EnlaceBoton to="/inventario">Volver al inventario</EnlaceBoton>
        </div>
      </section>
    )
  }

  const sinDisponibilidad = articulo.saldo === 0

  const manejarAgregar = () => {
    agregarAlCarrito(articulo.id)
    setAviso('Artículo agregado al carrito.')
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="mb-6 flex flex-wrap gap-2">
        <EnlaceBoton to="/inventario" variante="secundario">
          Volver al inventario
        </EnlaceBoton>
        <EnlaceBoton to="/carrito">Ir al carrito</EnlaceBoton>
      </div>

      <article className="rounded-md bg-white p-6 shadow-sm">
        <span className="mb-3 inline-flex w-fit rounded-full bg-(--color-primario-suave) px-3 py-1 text-xs font-semibold text-(--color-primario)">
          {articulo.tipo}
        </span>
        <h1 className="mb-2 text-4xl font-bold text-(--color-primario)">
          {articulo.nombre}
        </h1>
        <p className="mb-2 text-lg font-medium text-gray-800">
          Marca: {articulo.marca}
        </p>
        <p className="mb-6 text-gray-500">
          {sinDisponibilidad
            ? 'Sin disponibilidad'
            : `Disponibles: ${articulo.saldo}`}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Boton
            tipo="button"
            onClick={manejarAgregar}
            deshabilitado={sinDisponibilidad}
          >
            Agregar al carrito
          </Boton>
          {sinDisponibilidad && (
            <p className="text-sm text-gray-500">
              Este artículo no tiene disponibilidad por el momento.
            </p>
          )}
        </div>

        <div
          aria-live="polite"
          role="status"
          className="mt-4 text-sm text-(--color-primario)"
        >
          {aviso}
        </div>
      </article>
    </section>
  )
}

export default DetalleArticulo

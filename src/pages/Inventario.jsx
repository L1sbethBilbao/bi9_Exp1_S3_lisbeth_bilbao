import { useId, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import TablaInventario from '../components/TablaInventario.jsx'
import EnlaceBoton from '../components/EnlaceBoton.jsx'
import useInventario from '../hooks/useInventario.js'
import { TIPOS_PRODUCTO } from '../data/tiposProducto.js'
import {
  VALOR_TODOS,
  filtrarArticulosPorTipo,
} from '../util/filtroInventario.js'

function Inventario() {
  const { articulos } = useInventario()
  const [tipoSeleccionado, setTipoSeleccionado] = useState(VALOR_TODOS)
  const idFiltro = useId()

  const articulosVisibles = filtrarArticulosPorTipo(
    articulos,
    tipoSeleccionado,
  )

  const manejarCambioFiltro = (evento) => {
    setTipoSeleccionado(evento.target.value)
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <PageHeader
        etiqueta="Inventario"
        titulo="Consulta de inventario"
        descripcion="Listado completo de artículos disponibles en el estado global. Filtra por tipo sin alterar los datos originales y abre el detalle para agregar al carrito."
      />

      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <label
            htmlFor={idFiltro}
            className="mb-1 block text-sm font-semibold text-gray-800"
          >
            Filtrar por tipo
          </label>
          <select
            id={idFiltro}
            value={tipoSeleccionado}
            onChange={manejarCambioFiltro}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-(--color-primario) focus:outline-none sm:w-auto"
          >
            <option value={VALOR_TODOS}>Todos</option>
            {TIPOS_PRODUCTO.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-gray-500">
            Mostrando <strong className="text-gray-800">{articulosVisibles.length}</strong>{' '}
            de <strong className="text-gray-800">{articulos.length}</strong> artículo
            {articulos.length === 1 ? '' : 's'}
          </p>
        </div>
        <EnlaceBoton to="/agregar-articulo">Agregar artículo</EnlaceBoton>
      </div>

      {articulos.length === 0 ? (
        <p className="rounded-md border border-dashed border-gray-300 bg-white p-6 text-center text-gray-500">
          No hay artículos en el inventario todavía.
        </p>
      ) : articulosVisibles.length === 0 ? (
        <p className="rounded-md border border-dashed border-gray-300 bg-white p-6 text-center text-gray-500">
          No hay artículos en el tipo seleccionado.
        </p>
      ) : (
        <TablaInventario articulos={articulosVisibles} />
      )}
    </section>
  )
}

export default Inventario

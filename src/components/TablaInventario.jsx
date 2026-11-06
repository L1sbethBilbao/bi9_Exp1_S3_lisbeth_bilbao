import { Link } from 'react-router'

function TablaInventario({ articulos }) {
  if (!articulos.length) {
    return (
      <p className="rounded-md border border-dashed border-gray-300 bg-white p-6 text-center text-gray-500">
        No hay artículos en el inventario todavía.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-md bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th scope="col" className="border-b border-gray-200 px-4 py-3 font-semibold">
              Nombre
            </th>
            <th scope="col" className="border-b border-gray-200 px-4 py-3 font-semibold">
              Marca
            </th>
            <th scope="col" className="border-b border-gray-200 px-4 py-3 font-semibold">
              Tipo de producto
            </th>
            <th scope="col" className="border-b border-gray-200 px-4 py-3 font-semibold">
              Saldo
            </th>
            <th scope="col" className="border-b border-gray-200 px-4 py-3 font-semibold">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id} className="hover:bg-gray-50">
              <td className="border-b border-gray-100 px-4 py-3 text-gray-900">
                {articulo.nombre}
              </td>
              <td className="border-b border-gray-100 px-4 py-3 text-gray-600">
                {articulo.marca}
              </td>
              <td className="border-b border-gray-100 px-4 py-3 text-gray-600">
                {articulo.tipo}
              </td>
              <td className="border-b border-gray-100 px-4 py-3 text-gray-600">
                {articulo.saldo > 0
                  ? `Disponibles: ${articulo.saldo}`
                  : 'Sin disponibilidad'}
              </td>
              <td className="border-b border-gray-100 px-4 py-3">
                <Link
                  to={`/inventario/${articulo.id}`}
                  className="font-semibold text-(--color-primario) hover:underline"
                >
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaInventario

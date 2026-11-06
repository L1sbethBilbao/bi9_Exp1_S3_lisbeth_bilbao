import PageHeader from '../components/PageHeader.jsx'
import tiendas from '../data/tiendas.js'

function NuestrasTiendas() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="mb-10 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <PageHeader
            etiqueta="Nuestras tiendas"
            titulo="Cerca de tu barrio"
            descripcion="Contamos con locales pensados para una compra cómoda, con el mismo estándar de frescura y atención en cada punto. Revisa la dirección y el horario del local que te quede más cerca."
          />
        </div>
        <div>
          <img
            src="/img/hero-supermercado.jpg"
            className="w-full rounded-xl shadow-sm"
            alt="Interior de una tienda Casa Gourmet"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiendas.map((tienda) => (
          <article
            key={tienda.nombre}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-(--color-primario)">
              {tienda.nombre}
            </h2>
            <p className="mt-2 text-gray-500">
              <strong className="text-gray-800">Dirección:</strong>{' '}
              {tienda.direccion}
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-800">Horario:</strong> {tienda.horario}
            </p>
            <p className="text-gray-500">
              <strong className="text-gray-800">Teléfono:</strong>{' '}
              {tienda.telefono}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NuestrasTiendas

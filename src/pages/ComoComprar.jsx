import PageHeader from '../components/PageHeader.jsx'
import pasosCompra from '../data/pasosCompra.js'

function ComoComprar() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <PageHeader
        etiqueta="Cómo comprar"
        titulo="Guía simple para tu compra"
        descripcion="En Casa Gourmet buscamos que comprar sea claro y cercano. Sigue estos pasos para aprovechar mejor tu visita al local."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {pasosCompra.map((paso) => (
          <article
            key={paso.numero}
            className="flex gap-3 rounded-xl bg-white p-5 shadow-sm"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-primario) text-sm font-bold text-white">
              {paso.numero}
            </span>
            <div>
              <h2 className="text-lg font-bold text-(--color-primario)">
                {paso.titulo}
              </h2>
              <p className="mt-1 text-gray-500">{paso.texto}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900">Tips útiles</h2>
        <ul className="mt-2 list-disc pl-5 text-gray-500">
          <li>Revisa las ofertas del día en la entrada de cada local.</li>
          <li>Los productos frescos se reponen en la mañana.</li>
          <li>
            Si un artículo no está en sala, consulta al personal de inventario.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ComoComprar

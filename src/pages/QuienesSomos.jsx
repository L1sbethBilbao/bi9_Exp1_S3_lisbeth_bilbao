import PageHeader from '../components/PageHeader.jsx'
import { assetUrl } from '../util/assetUrl.js'

const pilares = [
  {
    titulo: 'Misión',
    texto:
      'Ofrecer una compra confiable, con productos frescos y un servicio cercano que facilite el día a día de cada familia.',
  },
  {
    titulo: 'Visión',
    texto:
      'Ser el supermercado de referencia del sector, reconocido por su calidad, orden en el inventario y experiencia de atención.',
  },
  {
    titulo: 'Valores',
    texto:
      'Honestidad en los precios, respeto por las personas, cuidado de los productos y mejora continua de nuestros procesos.',
  },
]

function QuienesSomos() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="mb-10 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <PageHeader
            etiqueta="Quiénes somos"
            titulo="Calidad selecta, experiencia cercana"
            descripcion="Casa Gourmet nació con la idea de ofrecer un supermercado premium donde cada pasillo invite a descubrir lo mejor: frescos cuidados, despensa gourmet y una atención que se siente personal."
          />
          <p className="text-gray-500">
            Hoy trabajamos para organizar mejor nuestro inventario y la
            experiencia de compra, manteniendo lo que más nos importa: calidad,
            orden y un servicio que invite a volver.
          </p>
        </div>
        <div>
          <img
            src={assetUrl('img/equipo-local.jpg')}
            className="w-full rounded-xl shadow-sm"
            alt="Interior premium de Casa Gourmet con pasillo gourmet"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pilares.map((pilar) => (
          <article
            key={pilar.titulo}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-(--color-primario)">
              {pilar.titulo}
            </h2>
            <p className="mt-2 text-gray-500">{pilar.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default QuienesSomos

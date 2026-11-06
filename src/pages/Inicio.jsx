import { Link } from 'react-router'
import useInventario from '../hooks/useInventario.js'
import EnlaceBoton from '../components/EnlaceBoton.jsx'
import { assetUrl } from '../util/assetUrl.js'

const destacados = [
  {
    imagen: assetUrl('img/frutas-verduras.jpg'),
    alt: 'Frutas y verduras frescas en el mercado',
    titulo: 'Frescos del día',
    texto:
      'Frutas, verduras y panadería seleccionadas cada mañana para llegar a tu mesa con la mejor calidad.',
  },
  {
    imagen: assetUrl('img/abarrotes.jpg'),
    alt: 'Estanterías de abarrotes en el supermercado',
    titulo: 'Abarrotes y despensa',
    texto:
      'Todo lo esencial para el hogar, con precios claros y stock organizado para una compra rápida.',
  },
  {
    imagen: assetUrl('img/atencion.jpg'),
    alt: 'Atención al cliente en caja',
    titulo: 'Atención cercana',
    texto:
      'Un equipo dispuesto a orientarte en tienda y a responder tus consultas desde la sección Contáctanos.',
  },
]

function Inicio() {
  const { articulos } = useInventario()
  const preview = articulos.slice(0, 6)

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-(--color-primario)">
              Bienvenida
            </p>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Tu supermercado gourmet
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              En Casa Gourmet reunimos frescos selectos, despensa gourmet y una
              atención cercana. Este sitio es el punto de partida de nuestra
              gestión de inventario y servicio al cliente: conoce quiénes somos
              y escríbenos cuando lo necesites.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <EnlaceBoton to="/inventario" className="px-4 py-2">
                Ver inventario
              </EnlaceBoton>
              <EnlaceBoton
                to="/agregar-articulo"
                variante="secundario"
                className="px-4 py-2"
              >
                Agregar artículo
              </EnlaceBoton>
            </div>
          </div>
          <div>
            <img
              src={assetUrl('img/hero-supermercado.jpg')}
              className="w-full rounded-xl shadow-sm"
              alt="Interior premium de Casa Gourmet"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900">
          ¿Qué encuentras en Casa Gourmet?
        </h2>
        <p className="mt-2 text-gray-500">
          Ofrecemos una experiencia premium y cercana, pensada para quienes
          buscan calidad, orden y lo mejor en cada compra.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {destacados.map((item) => (
            <article
              key={item.titulo}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <img
                src={item.imagen}
                className="h-[200px] w-full object-cover"
                alt={item.alt}
              />
              <div className="p-4">
                <h3 className="font-bold text-(--color-primario)">{item.titulo}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="inventario" className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Productos en inventario
            </h2>
            <p className="mt-1 text-gray-500">
              Vista rápida del estado global compartido. Hay {articulos.length}{' '}
              artículo{articulos.length === 1 ? '' : 's'} disponibles.
            </p>
          </div>
          <Link
            to="/inventario"
            className="text-sm font-semibold text-(--color-primario) hover:underline"
          >
            Ver tabla completa
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((articulo) => (
            <article
              key={articulo.id}
              className="rounded-xl bg-white p-4 shadow-sm"
            >
              <span className="mb-2 inline-flex w-fit rounded-full bg-(--color-primario-suave) px-3 py-1 text-xs font-semibold text-(--color-primario)">
                {articulo.tipo}
              </span>
              <h3 className="font-bold text-gray-900">{articulo.nombre}</h3>
              <p className="mt-1 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Marca:</span>{' '}
                {articulo.marca}
              </p>
              <p className="text-sm text-gray-500">
                {articulo.saldo > 0
                  ? `Disponibles: ${articulo.saldo}`
                  : 'Sin disponibilidad'}
              </p>
              <Link
                to={`/inventario/${articulo.id}`}
                className="mt-3 inline-block text-sm font-semibold text-(--color-primario) hover:underline"
              >
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Inicio

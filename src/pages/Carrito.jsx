import { useState } from 'react'
import useInventario from '../hooks/useInventario.js'
import Boton from '../components/Boton.jsx'
import EnlaceBoton from '../components/EnlaceBoton.jsx'

function Carrito() {
  const { articulos, carrito, agregarAlCarrito, disminuirCantidadCarrito } =
    useInventario()
  const [aviso, setAviso] = useState('')

  const totalUnidades = carrito.reduce(
    (suma, entrada) => suma + entrada.cantidad,
    0,
  )

  const articuloDe = (articuloId) =>
    articulos.find((articulo) => articulo.id === articuloId)

  const manejarAumentar = (entrada) => {
    const articulo = articuloDe(entrada.articuloId)
    agregarAlCarrito(entrada.articuloId)
    setAviso(`Se aumentó la cantidad de «${articulo?.nombre}».`)
  }

  const manejarDisminuir = (entrada) => {
    const articulo = articuloDe(entrada.articuloId)
    disminuirCantidadCarrito(entrada.articuloId)
    if (entrada.cantidad === 1) {
      setAviso(`«${articulo?.nombre}» fue retirado del carrito.`)
    } else {
      setAviso(`Se disminuyó la cantidad de «${articulo?.nombre}».`)
    }
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
        Carrito
      </h1>

      <p
        aria-live="polite"
        role="status"
        className="mb-4 text-(--color-primario)"
      >
        {aviso}
      </p>

      {carrito.length === 0 ? (
        <div className="rounded-md bg-white p-6 text-center shadow-sm">
          <p className="mb-4 text-gray-500">
            Tu carrito está vacío. Explora el inventario y agrega los productos
            que necesites.
          </p>
          <EnlaceBoton to="/inventario">Ver inventario</EnlaceBoton>
        </div>
      ) : (
        <>
          <p className="mb-4 text-gray-500">
            Unidades reservadas: {totalUnidades}
          </p>

          <ul className="flex flex-col gap-4">
            {carrito.map((entrada) => {
              const articulo = articuloDe(entrada.articuloId)

              if (!articulo) {
                return null
              }

              return (
                <li
                  key={entrada.articuloId}
                  className="rounded-md bg-white p-4 shadow-sm"
                >
                  <span className="mb-2 inline-flex w-fit rounded-full bg-(--color-primario-suave) px-3 py-1 text-xs font-semibold text-(--color-primario)">
                    {articulo.tipo}
                  </span>
                  <h2 className="text-xl font-bold text-(--color-primario)">
                    {articulo.nombre}
                  </h2>
                  <p className="text-sm text-gray-500">Marca: {articulo.marca}</p>
                  <p className="text-sm text-gray-500">
                    Cantidad en el carrito: {entrada.cantidad}
                  </p>
                  <p className="mb-3 text-sm text-gray-500">
                    Disponibles: {articulo.saldo}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Boton
                      tipo="button"
                      onClick={() => manejarAumentar(entrada)}
                      deshabilitado={articulo.saldo === 0}
                      aria-label={`Aumentar cantidad de ${articulo.nombre}`}
                    >
                      +
                    </Boton>
                    <Boton
                      tipo="button"
                      variante="secundario"
                      onClick={() => manejarDisminuir(entrada)}
                      aria-label={`Disminuir cantidad de ${articulo.nombre}`}
                    >
                      −
                    </Boton>
                  </div>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}

export default Carrito

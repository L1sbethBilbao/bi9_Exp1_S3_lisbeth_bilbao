export const TIPOS_ACCION = {
  AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
  AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
  DISMINUIR_CANTIDAD_CARRITO: 'DISMINUIR_CANTIDAD_CARRITO',
}

export function crearEstadoInicial(articulosIniciales) {
  return {
    articulos: articulosIniciales.map((articulo) => ({ ...articulo })),
    carrito: [],
  }
}

export function reducer(estado, accion) {
  switch (accion.type) {
    case TIPOS_ACCION.AGREGAR_ARTICULO: {
      return {
        ...estado,
        articulos: [...estado.articulos, accion.articulo],
      }
    }

    case TIPOS_ACCION.AGREGAR_AL_CARRITO: {
      const articulo = estado.articulos.find(
        (item) => item.id === accion.articuloId,
      )

      if (!articulo || articulo.saldo <= 0) {
        return estado
      }

      const entradaExistente = estado.carrito.find(
        (entrada) => entrada.articuloId === accion.articuloId,
      )

      const articulos = estado.articulos.map((item) =>
        item.id === accion.articuloId ? { ...item, saldo: item.saldo - 1 } : item,
      )

      const carrito = entradaExistente
        ? estado.carrito.map((entrada) =>
            entrada.articuloId === accion.articuloId
              ? { ...entrada, cantidad: entrada.cantidad + 1 }
              : entrada,
          )
        : [...estado.carrito, { articuloId: accion.articuloId, cantidad: 1 }]

      return { ...estado, articulos, carrito }
    }

    case TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO: {
      const entrada = estado.carrito.find(
        (item) => item.articuloId === accion.articuloId,
      )

      if (!entrada) {
        return estado
      }

      const nuevaCantidad = entrada.cantidad - 1

      const articulos = estado.articulos.map((item) =>
        item.id === accion.articuloId ? { ...item, saldo: item.saldo + 1 } : item,
      )

      const carrito =
        nuevaCantidad === 0
          ? estado.carrito.filter(
              (item) => item.articuloId !== accion.articuloId,
            )
          : estado.carrito.map((item) =>
              item.articuloId === accion.articuloId
                ? { ...item, cantidad: nuevaCantidad }
                : item,
            )

      return { ...estado, articulos, carrito }
    }

    default:
      return estado
  }
}

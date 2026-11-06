import { useReducer } from 'react'
import InventarioContext from './InventarioContext.js'
import articulosIniciales from '../data/articulosInventario.json'
import { validarArticulo } from '../util/validarArticulo.js'
import {
  crearEstadoInicial,
  reducer,
  TIPOS_ACCION,
} from './inventarioReducer.js'

function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(
    reducer,
    articulosIniciales,
    crearEstadoInicial,
  )

  const agregarArticulo = (valores) => {
    const { esValido, errores, datos } = validarArticulo(valores)

    if (!esValido) {
      return { exito: false, errores }
    }

    const nuevoArticulo = {
      id: crypto.randomUUID(),
      ...datos,
    }

    dispatch({ type: TIPOS_ACCION.AGREGAR_ARTICULO, articulo: nuevoArticulo })

    return { exito: true }
  }

  const agregarAlCarrito = (articuloId) => {
    dispatch({ type: TIPOS_ACCION.AGREGAR_AL_CARRITO, articuloId })
  }

  const disminuirCantidadCarrito = (articuloId) => {
    dispatch({ type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO, articuloId })
  }

  const valor = {
    articulos: estado.articulos,
    carrito: estado.carrito,
    agregarArticulo,
    agregarAlCarrito,
    disminuirCantidadCarrito,
  }

  return (
    <InventarioContext.Provider value={valor}>{children}</InventarioContext.Provider>
  )
}

export default InventarioProvider

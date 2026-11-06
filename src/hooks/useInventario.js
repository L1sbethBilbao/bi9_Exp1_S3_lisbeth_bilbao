import { useContext } from 'react'
import InventarioContext from '../context/InventarioContext.js'

function useInventario() {
  const contexto = useContext(InventarioContext)

  if (!contexto) {
    throw new Error('useInventario debe utilizarse dentro de un InventarioProvider.')
  }

  return contexto
}

export default useInventario

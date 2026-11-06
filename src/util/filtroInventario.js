export const VALOR_TODOS = 'todos'

export function filtrarArticulosPorTipo(articulos, tipoSeleccionado) {
  if (tipoSeleccionado === VALOR_TODOS) {
    return articulos
  }

  return articulos.filter((articulo) => articulo.tipo === tipoSeleccionado)
}

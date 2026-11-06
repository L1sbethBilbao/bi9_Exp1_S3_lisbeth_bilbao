/** Prefija rutas de public/ con el base de Vite (necesario en GitHub Pages). */
export function assetUrl(ruta) {
  const base = import.meta.env.BASE_URL || '/'
  const limpia = String(ruta).replace(/^\//, '')
  return `${base}${limpia}`
}

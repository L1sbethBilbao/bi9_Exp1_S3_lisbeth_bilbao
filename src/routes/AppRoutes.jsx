import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Inicio from '../pages/Inicio.jsx'
import Inventario from '../pages/Inventario.jsx'
import AgregarArticulo from '../pages/AgregarArticulo.jsx'
import DetalleArticulo from '../pages/DetalleArticulo.jsx'
import Carrito from '../pages/Carrito.jsx'
import NoEncontrada from '../pages/NoEncontrada.jsx'

const QuienesSomos = lazy(() => import('../pages/QuienesSomos.jsx'))
const Contactanos = lazy(() => import('../pages/Contactanos.jsx'))
const NuestrasTiendas = lazy(() => import('../pages/NuestrasTiendas.jsx'))
const ComoComprar = lazy(() => import('../pages/ComoComprar.jsx'))
const PreguntasFrecuentes = lazy(() => import('../pages/PreguntasFrecuentes.jsx'))

function FallbackCarga() {
  return (
    <p className="mx-auto max-w-6xl px-4 py-12 text-gray-500">
      Cargando página…
    </p>
  )
}

function AppRoutes() {
  return (
    <Suspense fallback={<FallbackCarga />}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/agregar-articulo" element={<AgregarArticulo />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/inventario/:id" element={<DetalleArticulo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes

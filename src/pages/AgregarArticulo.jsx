import FormularioArticulo from '../components/FormularioArticulo.jsx'
import PageHeader from '../components/PageHeader.jsx'

function AgregarArticulo() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <PageHeader
        etiqueta="Inventario"
        titulo="Agregar artículo"
        descripcion="Completa el formulario para registrar un nuevo producto en el inventario compartido de Casa Gourmet. El artículo aparecerá de inmediato en la página Inventario y en el resumen del Inicio."
      />
      <FormularioArticulo />
    </section>
  )
}

export default AgregarArticulo

import PageHeader from '../components/PageHeader.jsx'
import preguntasFrecuentes from '../data/preguntasFrecuentes.js'

function PreguntasFrecuentes() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <PageHeader
        etiqueta="Preguntas frecuentes"
        titulo="Resolvemos tus dudas"
        descripcion="Reúne las consultas más comunes de nuestros clientes. Si no encuentras lo que buscas, ve a Contáctanos y te ayudamos."
      />

      <div className="grid gap-3">
        {preguntasFrecuentes.map((item) => (
          <article
            key={item.pregunta}
            className="rounded-xl bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-bold text-(--color-primario)">
              {item.pregunta}
            </h2>
            <p className="mt-2 text-gray-500">{item.respuesta}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes

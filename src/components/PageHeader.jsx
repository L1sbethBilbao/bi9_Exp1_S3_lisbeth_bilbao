function PageHeader({ etiqueta, titulo, descripcion }) {
  return (
    <div className="mb-8 max-w-3xl">
      {etiqueta ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-(--color-primario)">
          {etiqueta}
        </p>
      ) : null}
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{titulo}</h1>
      {descripcion ? (
        <p className="mt-3 text-lg font-light text-gray-500">{descripcion}</p>
      ) : null}
    </div>
  )
}

export default PageHeader

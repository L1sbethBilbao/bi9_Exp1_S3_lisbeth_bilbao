const variantes = {
  primario:
    'border-(--color-primario) bg-(--color-primario) text-white hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)',
  secundario:
    'border-(--color-primario) bg-transparent text-(--color-primario) hover:bg-(--color-primario) hover:text-white',
}

function Boton({
  children,
  tipo = 'button',
  variante = 'primario',
  className = '',
  deshabilitado = false,
  ...props
}) {
  const clasesVariante = variantes[variante] ?? variantes.primario

  return (
    <button
      type={tipo}
      disabled={deshabilitado}
      className={`inline-block rounded-md border px-3 py-1.5 text-base transition-colors disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500 ${clasesVariante} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Boton

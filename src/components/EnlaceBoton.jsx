import { Link } from 'react-router'

const variantes = {
  primario:
    'border-(--color-primario) bg-(--color-primario) text-white hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)',
  secundario:
    'border-(--color-primario) bg-transparent text-(--color-primario) hover:bg-(--color-primario) hover:text-white',
}

function EnlaceBoton({
  children,
  to,
  variante = 'primario',
  className = '',
  ...props
}) {
  const clasesVariante = variantes[variante] ?? variantes.primario

  return (
    <Link
      to={to}
      className={`inline-block rounded-md border px-3 py-1.5 text-base transition-colors ${clasesVariante} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default EnlaceBoton

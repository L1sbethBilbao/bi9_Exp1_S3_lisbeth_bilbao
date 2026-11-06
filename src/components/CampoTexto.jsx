function CampoTexto({
  id,
  name,
  etiqueta,
  tipo = 'text',
  valor,
  onChange,
  referencia,
  error,
  placeholder,
  requerido = false,
  min,
  step,
  filas,
}) {
  const idError = `${id}-error`
  const clasesCampo = error
    ? 'w-full rounded-md border border-red-500 px-3 py-2 text-base focus:border-red-500 focus:outline-none'
    : 'w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-(--color-primario) focus:outline-none'

  const propsComunes = {
    id,
    name,
    value: valor,
    onChange,
    ref: referencia,
    required: requerido,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? idError : undefined,
    className: clasesCampo,
    placeholder,
  }

  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1 block font-semibold text-gray-800">
        {etiqueta}
      </label>
      {tipo === 'textarea' ? (
        <textarea {...propsComunes} rows={filas ?? 4} />
      ) : (
        <input {...propsComunes} type={tipo} min={min} step={step} />
      )}
      {error && (
        <p id={idError} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default CampoTexto

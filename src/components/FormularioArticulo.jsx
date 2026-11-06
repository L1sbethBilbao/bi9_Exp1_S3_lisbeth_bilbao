import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import useInventario from '../hooks/useInventario.js'
import { validarArticulo } from '../util/validarArticulo.js'
import { TIPOS_PRODUCTO } from '../data/tiposProducto.js'
import CampoTexto from './CampoTexto.jsx'
import Boton from './Boton.jsx'
import EnlaceBoton from './EnlaceBoton.jsx'

const valoresIniciales = {
  nombre: '',
  marca: '',
  tipo: '',
  saldo: '',
}

const camposTexto = [
  { id: 'nombre', etiqueta: 'Nombre' },
  { id: 'marca', etiqueta: 'Marca' },
]

const ordenCampos = ['nombre', 'marca', 'tipo', 'saldo']

function FormularioArticulo() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const { agregarArticulo } = useInventario()
  const navigate = useNavigate()

  const nombreRef = useRef(null)
  const marcaRef = useRef(null)
  const tipoRef = useRef(null)
  const saldoRef = useRef(null)

  const referencias = {
    nombre: nombreRef,
    marca: marcaRef,
    tipo: tipoRef,
    saldo: saldoRef,
  }

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((previos) => ({ ...previos, [name]: value }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const { esValido, errores: nuevosErrores, datos } = validarArticulo(valores)

    if (!esValido) {
      setErrores(nuevosErrores)
      const primerInvalido = ordenCampos.find((campo) => nuevosErrores[campo])
      if (primerInvalido) {
        referencias[primerInvalido].current?.focus()
      }
      return
    }

    const resultado = agregarArticulo(datos)

    if (resultado.exito) {
      navigate('/inventario')
    } else {
      setErrores(resultado.errores)
    }
  }

  const clasesSelect = errores.tipo
    ? 'w-full rounded-md border border-red-500 px-3 py-2 text-base focus:border-red-500 focus:outline-none'
    : 'w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-(--color-primario) focus:outline-none'

  return (
    <form
      noValidate
      onSubmit={manejarEnvio}
      className="max-w-3xl rounded-md bg-white p-4 shadow-sm"
    >
      {Object.keys(errores).length > 0 && (
        <div
          role="alert"
          className="mb-4 rounded-md border border-red-300 bg-red-50 p-4 text-red-700"
        >
          <p className="mb-1 font-semibold">Revisa los siguientes errores:</p>
          <ul className="list-disc pl-5 text-sm">
            {Object.values(errores).map((mensaje) => (
              <li key={mensaje}>{mensaje}</li>
            ))}
          </ul>
        </div>
      )}

      {camposTexto.map((campo) => (
        <CampoTexto
          key={campo.id}
          id={campo.id}
          name={campo.id}
          etiqueta={campo.etiqueta}
          valor={valores[campo.id]}
          onChange={manejarCambio}
          referencia={referencias[campo.id]}
          error={errores[campo.id]}
          requerido
        />
      ))}

      <div className="mb-4">
        <label htmlFor="tipo" className="mb-1 block font-semibold text-gray-800">
          Tipo de producto
        </label>
        <select
          id="tipo"
          name="tipo"
          value={valores.tipo}
          onChange={manejarCambio}
          ref={tipoRef}
          required
          aria-invalid={errores.tipo ? true : undefined}
          aria-describedby={errores.tipo ? 'tipo-error' : undefined}
          className={clasesSelect}
        >
          <option value="">Selecciona un tipo</option>
          {TIPOS_PRODUCTO.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
        {errores.tipo && (
          <p id="tipo-error" className="mt-1 text-sm text-red-600">
            {errores.tipo}
          </p>
        )}
      </div>

      <CampoTexto
        id="saldo"
        name="saldo"
        etiqueta="Saldo inicial"
        tipo="number"
        valor={valores.saldo}
        onChange={manejarCambio}
        referencia={saldoRef}
        error={errores.saldo}
        requerido
        min="0"
        step="1"
      />

      <div className="flex flex-wrap gap-2">
        <Boton tipo="submit">Agregar al inventario</Boton>
        <EnlaceBoton to="/inventario" variante="secundario">
          Ver inventario
        </EnlaceBoton>
      </div>
    </form>
  )
}

export default FormularioArticulo

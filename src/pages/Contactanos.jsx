import { useRef, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import CampoTexto from '../components/CampoTexto.jsx'
import Boton from '../components/Boton.jsx'
import { validarContacto } from '../util/validarContacto.js'

const valoresIniciales = {
  nombre: '',
  correo: '',
  mensaje: '',
}

const ordenCampos = ['nombre', 'correo', 'mensaje']

function Contactanos() {
  const [enviado, setEnviado] = useState(false)
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [nombreConfirmacion, setNombreConfirmacion] = useState('')

  const nombreRef = useRef(null)
  const correoRef = useRef(null)
  const mensajeRef = useRef(null)

  const referencias = {
    nombre: nombreRef,
    correo: correoRef,
    mensaje: mensajeRef,
  }

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((previos) => ({ ...previos, [name]: value }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const { esValido, errores: nuevosErrores, datos } = validarContacto(valores)

    if (!esValido) {
      setErrores(nuevosErrores)
      const primerInvalido = ordenCampos.find((campo) => nuevosErrores[campo])
      if (primerInvalido) {
        referencias[primerInvalido].current?.focus()
      }
      return
    }

    setNombreConfirmacion(datos.nombre)
    setEnviado(true)
    setErrores({})
    setValores(valoresIniciales)
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <PageHeader
            etiqueta="Contáctanos"
            titulo="Estamos para ayudarte"
            descripcion="Si tienes consultas sobre productos, horarios o atención en tienda, escríbenos. Responderemos a la brevedad."
          />

          <ul className="space-y-2 text-gray-500">
            <li>
              <strong className="text-gray-800">Dirección:</strong> Av. Los
              Frescos 1250, Santiago
            </li>
            <li>
              <strong className="text-gray-800">Teléfono:</strong> +56 2 2345
              6789
            </li>
            <li>
              <strong className="text-gray-800">Correo:</strong>{' '}
              contacto@casagourmet.cl
            </li>
            <li>
              <strong className="text-gray-800">Horario:</strong> Lun a Dom ·
              08:00 a 21:00
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-lg font-bold text-gray-900">
              Formulario de contacto
            </h2>

            {enviado ? (
              <div
                className="rounded-md border border-green-300 bg-green-50 p-4 text-green-800"
                role="status"
              >
                Gracias, {nombreConfirmacion}. Recibimos tu mensaje (simulación
                en frontend; sin envío a servidor en esta semana).
              </div>
            ) : (
              <form noValidate onSubmit={manejarEnvio} className="space-y-1">
                {Object.keys(errores).length > 0 && (
                  <div
                    role="alert"
                    className="mb-4 rounded-md border border-red-300 bg-red-50 p-4 text-red-700"
                  >
                    <p className="mb-1 font-semibold">
                      Revisa los siguientes errores:
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                      {Object.values(errores).map((mensaje) => (
                        <li key={mensaje}>{mensaje}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <CampoTexto
                  id="nombre"
                  name="nombre"
                  etiqueta="Nombre"
                  valor={valores.nombre}
                  onChange={manejarCambio}
                  referencia={nombreRef}
                  error={errores.nombre}
                  requerido
                />
                <CampoTexto
                  id="correo"
                  name="correo"
                  etiqueta="Correo"
                  tipo="email"
                  valor={valores.correo}
                  onChange={manejarCambio}
                  referencia={correoRef}
                  error={errores.correo}
                  requerido
                />
                <CampoTexto
                  id="mensaje"
                  name="mensaje"
                  etiqueta="Mensaje"
                  tipo="textarea"
                  valor={valores.mensaje}
                  onChange={manejarCambio}
                  referencia={mensajeRef}
                  error={errores.mensaje}
                  requerido
                  filas={4}
                />
                <Boton tipo="submit">Enviar mensaje</Boton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactanos

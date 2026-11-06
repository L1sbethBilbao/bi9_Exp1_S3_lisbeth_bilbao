const REGEX_NOMBRE = /^[\p{L}\s.'-]{2,80}$/u
const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function normalizarContacto(valores) {
  return {
    nombre: typeof valores.nombre === 'string' ? valores.nombre.trim() : '',
    correo: typeof valores.correo === 'string' ? valores.correo.trim() : '',
    mensaje: typeof valores.mensaje === 'string' ? valores.mensaje.trim() : '',
  }
}

export function validarContacto(valores) {
  const datos = normalizarContacto(valores)
  const errores = {}

  if (!datos.nombre) {
    errores.nombre = 'El nombre es obligatorio.'
  } else if (datos.nombre.length < 2 || datos.nombre.length > 80) {
    errores.nombre = 'El nombre debe tener entre 2 y 80 caracteres.'
  } else if (!REGEX_NOMBRE.test(datos.nombre)) {
    errores.nombre = 'El nombre solo admite letras, espacios y signos básicos.'
  }

  if (!datos.correo) {
    errores.correo = 'El correo es obligatorio.'
  } else if (!REGEX_CORREO.test(datos.correo)) {
    errores.correo = 'Ingresa un correo electrónico válido.'
  }

  if (!datos.mensaje) {
    errores.mensaje = 'El mensaje es obligatorio.'
  } else if (datos.mensaje.length < 10 || datos.mensaje.length > 1000) {
    errores.mensaje = 'El mensaje debe tener entre 10 y 1000 caracteres.'
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores,
    datos,
  }
}

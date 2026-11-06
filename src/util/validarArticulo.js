import { TIPOS_PRODUCTO } from '../data/tiposProducto.js'

const REGEX_NOMBRE = /^[\p{L}\p{N}\s.,()\-/°%+]{3,80}$/u
const REGEX_MARCA = /^[\p{L}\p{N}\s.&'-]{2,60}$/u

export function normalizarArticulo(valores) {
  return {
    nombre: typeof valores.nombre === 'string' ? valores.nombre.trim() : '',
    marca: typeof valores.marca === 'string' ? valores.marca.trim() : '',
    tipo: typeof valores.tipo === 'string' ? valores.tipo.trim() : '',
    saldo: valores.saldo,
  }
}

export function validarArticulo(valores) {
  const datos = normalizarArticulo(valores)
  const errores = {}

  if (!datos.nombre) {
    errores.nombre = 'El nombre es obligatorio.'
  } else if (datos.nombre.length < 3 || datos.nombre.length > 80) {
    errores.nombre = 'El nombre debe tener entre 3 y 80 caracteres.'
  } else if (!REGEX_NOMBRE.test(datos.nombre)) {
    errores.nombre =
      'El nombre solo admite letras, números, espacios y signos básicos (. , ( ) - / ° % +).'
  }

  if (!datos.marca) {
    errores.marca = 'La marca es obligatoria.'
  } else if (datos.marca.length < 2 || datos.marca.length > 60) {
    errores.marca = 'La marca debe tener entre 2 y 60 caracteres.'
  } else if (!REGEX_MARCA.test(datos.marca)) {
    errores.marca =
      'La marca solo admite letras, números, espacios y signos básicos (. & \' -).'
  }

  if (!datos.tipo) {
    errores.tipo = 'El tipo de producto es obligatorio.'
  } else if (!TIPOS_PRODUCTO.includes(datos.tipo)) {
    errores.tipo = 'Selecciona un tipo de producto válido.'
  }

  const saldoCrudo = datos.saldo

  if (saldoCrudo === '' || saldoCrudo === null || saldoCrudo === undefined) {
    errores.saldo = 'El saldo inicial es obligatorio.'
  } else {
    const saldo = Number(saldoCrudo)

    if (!Number.isFinite(saldo)) {
      errores.saldo = 'Ingresa un número válido para el saldo inicial.'
    } else if (!Number.isSafeInteger(saldo)) {
      errores.saldo = 'El saldo debe ser un número entero (sin decimales).'
    } else if (saldo < 0) {
      errores.saldo = 'El saldo no puede ser negativo.'
    } else {
      datos.saldo = saldo
    }
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores,
    datos,
  }
}

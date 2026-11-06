# Exp1_S3_Lisbeth_Bilbao — Casa Gourmet

Actividad Sumativa Semana 3 — Desarrollo Frontend II (PFY2202)

Sitio React de **Casa Gourmet** (supermercado) con:

- Navegación con React Router (rutas centralizadas + lazy loading)
- Estado global de inventario y carrito (`Context` + `useReducer`)
- Filtro por tipo sin alterar los datos originales
- Detalle de artículo con ruta dinámica
- Carrito sincronizado con el saldo del inventario
- Formulario para agregar artículos (validación con RegExp)
- Estilos con Tailwind CSS 4

## Pantallas

- `/` — Inicio (preview del inventario)
- `/quienes-somos` — Quiénes somos
- `/nuestras-tiendas` — Nuestras tiendas
- `/contactanos` — Contáctanos (validado y con reinicio)
- `/como-comprar` — Cómo comprar
- `/preguntas-frecuentes` — Preguntas frecuentes
- `/agregar-articulo` — Ingreso de artículos (tipo + saldo)
- `/inventario` — Listado con filtro por tipo
- `/inventario/:id` — Detalle y agregar al carrito
- `/carrito` — Unidades reservadas (+ / −)
- Cualquier otra ruta — Página 404

## Recorrido sugerido para probar

1. Abre **Inventario** y filtra por tipo (Despensa, Lácteos, etc.).
2. Vuelve a **Todos** y comprueba que el listado completo sigue intacto.
3. Entra a **Ver detalle** de un producto con saldo > 0.
4. Pulsa **Agregar al carrito** y verifica que el saldo baja.
5. En **Carrito**, aumenta y disminuye cantidades; el inventario se actualiza.
6. Prueba un producto con saldo 0: el botón queda deshabilitado.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Entrega en GitHub

Nombre requerido: `supermercado-lisbeth-bilbao-PFY2202`

Publicar también con **GitHub Pages** y compartir la URL del repositorio y del sitio en AVA.

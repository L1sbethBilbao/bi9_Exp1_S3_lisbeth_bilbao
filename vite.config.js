import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/bi9_Exp1_S3_lisbeth_bilbao/',
  plugins: [react(), tailwindcss()],
})

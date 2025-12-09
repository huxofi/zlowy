import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/Zlowy/'

// https://vite.dev/config/
export default defineConfig({
  base: repoBase,
  plugins: [react()],
})

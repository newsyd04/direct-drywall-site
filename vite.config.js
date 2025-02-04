import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/direct-drywall-site/',
  plugins: [react()],
})
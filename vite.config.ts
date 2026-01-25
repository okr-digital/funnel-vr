import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WICHTIG: Der base-Pfad muss exakt dem Repository-Namen entsprechen
  base: '/saas-impact-simulator/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
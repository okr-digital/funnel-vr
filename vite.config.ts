import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Nutzung von relativen Pfaden ('./') statt absoluten ('/funnel-vr/').
  // Das verhindert Fehler, falls sich der Repo-Name oder die URL-Struktur leicht unterscheidet.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WICHTIG: Der base-Pfad muss exakt dem Repository-Namen entsprechen
  // damit GitHub Pages die Assets (CSS/JS) korrekt findet.
  base: '/saas-impact-simulator/',
})
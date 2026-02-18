import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WICHTIG: Der base-Pfad muss exakt dem Repository-Namen entsprechen
  // URL: https://okr-digital.github.io/funnel-vr/ -> base: '/funnel-vr/'
  base: '/funnel-vr/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
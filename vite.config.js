import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Changed from 'docs' to 'dist'
    sourcemap: false
  },
  server: {
    port: 8080
  }
})

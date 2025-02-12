import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 4000,
    proxy: {
      '/api/movies':'http://localhost:5555/movies'
    }
  },
})

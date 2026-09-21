import react from '@vitejs/plugin-react-swc' // <-- alterado
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
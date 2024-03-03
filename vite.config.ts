import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unocss()],
  resolve: {
    alias: {
      'types/': resolve(__dirname, './types/'),
    },
  },
})

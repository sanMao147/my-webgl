import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), glsl(), AutoImport(), Components()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
})

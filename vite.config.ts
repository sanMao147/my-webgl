import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    glsl(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
    }),
    Components(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})

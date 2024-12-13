import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components', 'src/components/**', 'src/layouts', 'src/layouts/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      // '/geoserver': {
      //   target: `http://localhost:8080`,
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/geoserver/, '/geoserver'),
      // },
    },
  },
})

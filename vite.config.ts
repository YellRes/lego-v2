import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'pinia', '@vueuse/core'],
      vueTemplate: true,
      dts: true
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    }),
    eslintPlugin({
      failOnError: false
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import ViteComponents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [ AntDesignVueResolver() ],
      dts: true
    })
  ]
})

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

import ViteComponents from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [AntDesignVueResolver({importStyle: 'less'})],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    viteMockServe({
      mockPath: 'mock',
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#7546c9',
        },
        javascriptEnabled: true
      }
    }
  },
  server: {
    proxy: {
      "^(\/user|\/avdb|\/av)": {
        target:'https://wx.cdl.pub:20090',
        changeOrigin:true
      }
      // '/user': 'https://wx.cdl.pub:20090',
      // '/avdb': 'https://wx.cdl.pub:20090'
    }
  }
})

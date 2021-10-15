import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import ViteComponents from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        vue(),
        ViteComponents({
            resolvers: [AntDesignVueResolver({importStyle: 'less'})],
            dts: true,
            include:[/\.vue$/, /\.vue\?vue/, /\.md$/]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars:{
                    'primary-color': '#7546c9',
                },
                javascriptEnabled: true
            }
        }
    },
    server: {
        proxy: {
            '/user': 'https://r.cdl.pub:20090'
        }
    }
})

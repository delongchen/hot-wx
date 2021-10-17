import {RouteRecordRaw} from "vue-router";
import { HomeFilled, BuildFilled, FireFilled } from '@ant-design/icons-vue'

const userPageRoutes: RouteRecordRaw = {
  name: 'space',
  path: '/space',
  component: () => import('../views/user/index.vue'),
  redirect: '/space/main',
  children: [
    {
      name: 'main',
      path: '/space/main',
      component: () => import('../views/user/UserMain.vue'),
      meta: { text: '主页', icon: HomeFilled }
    },
    {
      name: 'dynamic',
      path: '/space/dynamic',
      component: () => import('../views/user/UserDynamic.vue'),
      meta: { text: '动态', icon: BuildFilled }
    },
    {
      name: 'lsp',
      path: '/space/lsp',
      component: () => import('../views/user/UserLsp.vue'),
      meta: { text: '投稿', icon: FireFilled }
    }
  ]
}

export {
  userPageRoutes
}

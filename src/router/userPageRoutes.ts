import {RouteRecordRaw} from "vue-router";
import { HomeFilled, BuildFilled, FireFilled, HeartFilled, StarFilled } from '@ant-design/icons-vue'

//布局和主页不使用懒加载
import SpaceLayout from '../views/user/index.vue'
import MainPage from '../views/user/UserMain.vue'

const userPageRoutes: RouteRecordRaw = {
  name: 'space',
  path: '/space',
  component: SpaceLayout,
  redirect: '/space/main',
  children: [
    {
      name: 'main',
      path: '/space/main',
      component: MainPage,
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
    },
    {
      name: 'favlist',
      path: '/space/favlist',
      component: () => import('../views/user/UserFavlist.vue'),
      meta: { text: '收藏', icon: StarFilled }
    },
    {
      name: 'subs',
      path: '/space/subs',
      component: () => import('../views/user/UserSubscription.vue'),
      meta: { text: '订阅', icon: HeartFilled }
    }
  ]
}

export {
  userPageRoutes
}

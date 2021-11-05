/**
 * @DECS:
 * @AUTH: myq
 * @DATE: 2021-10-12
 */
import {RouteRecordRaw} from 'vue-router';
// import Login from "../views/login/Login.vue";

import {userPageRoutes} from "./userPageRoutes";

const routes: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    redirect: () => {
      return {path: '/login'}
    } 
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/Login.vue')
  },
  {
    name: 'porn',
    path: '/porn',
    component: () => import('../views/porn/Porn.vue')
  },
  userPageRoutes,
]
export default routes

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
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/Login.vue')
  },
  userPageRoutes,
]
export default routes

/**
 * @DECS:
 * @AUTH: myq
 * @DATE: 2021-10-12
 */
import { RouteRecordRaw } from 'vue-router';
// import Login from "../views/login/Login.vue";

const routes:RouteRecordRaw[] = [
    {
        name:'login',
        path: '/login',
        component: () => import('../views/login/Login.vue')
    }
]
export default  routes
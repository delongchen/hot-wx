/**
 * @DECS:
 * @AUTH: myq
 * @DATE: 2021-10-12
 */
import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
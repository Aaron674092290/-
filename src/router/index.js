/* 导入被路由的组件 */
import LoginComponent from "../component/login/login.vue";
import AdminComponent from "../component/admin/admin.vue";

/* 导入商品子路由 */
import goodsRouterConfig from "./goods.js";
/* admin子路由 */
let adminChildren = [...goodsRouterConfig];
/* 对外导出路由 */
export default {
    routes: [
        { name: "a", path: "/", component: AdminComponent, children: adminChildren },
        { name: "l", path: "/login", component: LoginComponent }
    ]
}
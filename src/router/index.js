/* 导入被路由的组件 */
import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/login.vue";
import AdminComponent from "../component/admin/admin.vue";
/* 对外导出路由 */
export default {
    routes: [{
            name: "h",
            path: "/",
            component: AdminComponent,
            children: [

            ]
        },
        { name: "l", path: "/login", component: LoginComponent }
    ]
}
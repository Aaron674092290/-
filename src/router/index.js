/* 导入被路由的组件 */
import LoginComponent from "../component/login/login.vue";
import AdminComponent from "../component/admin/admin.vue";
/* 导入商品 */
import GoodsContentListComponent from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentAddComponent from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentEditComponent from "../component/admin/goods/content/GoodsContentEdit.vue";
/* admin子路由 */
let adminChildren = [
        { name: "gcl", path: "goods/content/list", component: GoodsContentListComponent },
        { name: "gca", path: "goods/content/add", component: GoodsContentAddComponent },
        { name: "gce", path: "goods/content/edit", component: GoodsContentEditComponent },
    ]
    /* 对外导出路由 */
export default {
    routes: [{
            name: "a",
            path: "/",
            component: AdminComponent,
            children: adminChildren
        },
        { name: "l", path: "/login", component: LoginComponent }
    ]
}
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "normalize.css";
import "./less/index.less";
// 1.1启动VueRouter插件
Vue.use(VueRouter);
Vue.use(ElementUI)
    /* 2.1导入根组件 */
import AppComponent from "./component/App.vue";
/*  2.2导入路由设置*/
import RouterConfig from "./router/index.js"; //写一个目录会自动找index.js
/* 3导入配置后的axios与api，注入到vue的原型当中，这样所有的组件就可以通过this调用了 */
import api, { domain } from "./js/api_config";
import axios from "./js/axios_config";
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$domain = domain;
const router = new VueRouter(RouterConfig);
import routerGuard from "./router/guard.js";
router.beforeEach(routerGuard);
new Vue({
    el: "#app",
    render(createElement) { /* 渲染组件到对应的占位标签 */
        return createElement(AppComponent);
    },
    router: router
});
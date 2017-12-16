import Vue from "vue";
import AppComponent from "./component/App.vue";
new Vue({
    el: "#app",
    render(createElement) {
        return createElement(AppComponent);
    }
})
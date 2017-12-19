import axios from "axios";
import apiConfig from "../js/api_config";
export default (to, from, next) => {
    axios.get(apiConfig.islogin).then(rsp => {
            let islogin = rsp.data.code == 'logined';
            let toPage = to.name;
            if (toPage == "l") {
                if (islogin) {
                    next("/"); //如果已经登录则直接跳到首页
                } else {
                    next(); //如果还没登录则跳到登录页
                }
            } else if (toPage != "l") {
                if (islogin) {
                    next(); //允许访问
                } else {
                    next("/login"); /* 跳到登录页 */
                }
            }
        })
        // next();
}
import axios from "axios";
import { domain } from "./api_config";
/* 配置默认的域名 */
axios.defaults.baseURL = domain;
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
axios.defaults.withCredentials = true;
export default axios;
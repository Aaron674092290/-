import axios from "axios";
import { domain } from "./api_config";
/* 配置默认的域名 */
axios.defaults.baseURL = domain;
export default axios;
import axios from "axios";
import { App } from "vue";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.interceptors.request.use(
  async (config) => {
    config.headers.token = sessionStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
//响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data); //进行中
    } else {
      return Promise.reject(response); //失败
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          sessionStorage.clear();
          break;
        // 404请求不存在
        case 404:
          console.log("404");
          break;
        // 其他错误，直接抛出错误提示
        default:
      }
      return Promise.reject(error.response);
    }
  },
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const $get = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const $post = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

export default axios;
// export default {
//   install: (app: App) => {
//     app.config.globalProperties["$get"] = $get;
//     app.config.globalProperties["$post"] = $post;
//     app.config.globalProperties["$axios"] = axios;
//   },
// };

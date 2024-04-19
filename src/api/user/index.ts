import http from "@/utils/http";

enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
//登录接口
export const reqLogin = (data: LoginForm) => http.post(API.LOGIN_URL, data);
//获取用户信息接口
export const reqUserInfo = () => http.post(API.USERINFO_URL);

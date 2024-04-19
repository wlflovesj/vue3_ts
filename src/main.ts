import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-expect-error 使ts忽略element-plus问题
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
//svg
import "virtual:svg-icons-register";
//components
import GlobalComponent from "./components";
//style
import "./styles/index.scss";
//router
import router from "./router";
//pinia
import pinia from "./store";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(GlobalComponent);
app.use(pinia);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-expect-error 使ts忽略element-plus问题
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");

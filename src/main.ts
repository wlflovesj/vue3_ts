import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

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

app.use(GlobalComponent);
app.use(pinia);
app.use(router);
app.mount("#app");

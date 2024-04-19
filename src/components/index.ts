import SvgIcon from "./SvgIcon.vue";
import { App, Component } from "vue";

interface GlobalComponent {
  [key: string]: Component;
}
const allGloablComponent: GlobalComponent = { SvgIcon };
export default {
  install(app: App) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key]);
    });
  },
};

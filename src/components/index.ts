import SvgIcon from "./SvgIcon.vue";
import { App, Component } from "vue";

import { ElButton, ElInput } from "element-plus";
interface GlobalComponent {
  [key: string]: Component;
}
const allGloablComponent: GlobalComponent = { SvgIcon, ElButton, ElInput };
export default {
  install(app: App) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key]);
    });
  },
};

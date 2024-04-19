import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
const useUserStore = defineStore("User", {
  //存储数据
  state: () => {
    return {
      token: "",
    };
  },
  //异步
  actions: {
    async userLogin(logform: LoginForm) {
      const result = await reqLogin(logform);
      if (result.data.code == 200) {
        this.token = result.data.token;
      }
      console.log(result);
    },
  },
  getters: {},
});
export default useUserStore;

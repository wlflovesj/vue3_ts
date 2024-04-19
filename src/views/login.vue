<script setup lang="ts">
import { reactive } from "vue";
import { Check } from "@element-plus/icons-vue";
import { onMounted } from "vue";
import { reqLogin } from "@/api/user/index";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
let loginForm = reactive({
  username: "",
  password: "",
});
onMounted(() => {
  //   reqLogin({ username: "admin", password: "111111" });
});
const login = () => {
  userStore.userLogin(loginForm);
};
</script>
<template>
  <h1>login</h1>
  <div class="login_form">
    <el-input v-model="loginForm.username"></el-input>
    <el-input v-model="loginForm.password"></el-input>
    <el-button @click="login" type="primary" :icon="Check">login</el-button>
  </div>
</template>
<style scoped lang="scss">
.login_form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>

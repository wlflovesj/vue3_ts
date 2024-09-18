<script setup lang="ts">
import { reactive } from "vue";
import { Check } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
let loginForm = reactive({
  username: "",
  password: "",
});

const openUrl = () => {
  window.open(
    "http://adc-tracking-qa.oss-cn-shanghai.aliyuncs.com/IP42/decodedata/2023/08/25/dec_ABCDEFGHIGKLMNOPQ_code%3D51_calib_20230825_082925.tar?Expires=1720666673&OSSAccessKeyId=LTAI5tSmkTkZC4K2JhR2JY5R&Signature=%2F1vVd0mdmyG7tV0B8qgtMF2hn48%3D",
  );
};
onMounted(() => {});
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
    <el-button @click="openUrl"></el-button>
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

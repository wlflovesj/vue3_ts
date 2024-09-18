<template>
  <h1>home</h1>
  Mouse position is at: {{ x }}, {{ y }}
  <UploadImage />
  <div class="testImg"></div>
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  <div>{{ user.address.city }}</div>
  <div class="circle-container">
    <!-- <img src="@/assets/circle.png" style="width: 100%; height: 100%" alt="" /> -->
    <img src="@/assets/circle.png" class="circle" style="width: 100%; height: 100%" alt="" />
    <div class="bg">
      <img src="@/assets/search.png" class="search" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, reactive, watchPostEffect } from "vue";
import { useMouse } from "@/hooks/mouse";
import UploadImage from "@/components/uploadImg.vue";

let { x, y } = useMouse();
onMounted(async () => {
  setTimeout(() => {
    user.value.address.city = "London"; // 视图没有更新
    console.log(user.value);
  }, 2000);
});
const logInModule = () => {
  const isLoggedIn = ref(true);
  const username = ref("");
  const password = ref("");
  const user = ref({ name: "Alice", address: { city: "Paris" } });
  watchPostEffect(() => {
    /* 在 Vue 更新后执行 */
  });
  return {
    isLoggedIn,
    username,
    password,
    user,
  };
};
const { isLoggedIn, username, password, user } = logInModule();
</script>

<style scoped>
.circle-container {
  position: relative;
  width: 200px;
  height: 200px;
}
.bg {
  width: 136px;
  height: 136px;
  background: url("@/assets/bg.png");
  background-size: 100% 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@keyframes move {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.search {
  position: absolute;
  width: 68px;
  height: 68px;
}
.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: grow-shrink 1.5s infinite ease-in-out;
}

@keyframes grow-shrink {
  from {
    transform: scale(0.5);
    opacity: 1;
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
}
.testImg {
  height: 39px;
  background-image: url(https://adc-ngp.roewe.com.cn/roewe/digitization/images/index_newBg.png);
  background-size: 100%;
  background-position-y: -107px;
  position: absolute;
  top: 200px;
  width: 100%;
}
</style>

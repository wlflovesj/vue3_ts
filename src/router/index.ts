import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home.vue"),
    },
    {
      path: "/three",
      name: "three",
      component: () => import("@/views/three.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/error.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
      name: "any",
    },
  ],
});
export default router;

import Home from "./components/Home.vue"
import Mypage from "./components/Mypage.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "mypage", path: "/isyo/:isyoId", component: Mypage },
  ],
})

export default router

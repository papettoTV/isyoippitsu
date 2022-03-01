import Home from "./components/Home.vue"
import Mypage from "./components/Mypage.vue"
import EditIsyo from "./components/EditIsyo.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "mypage", path: "/:isyoId", component: Mypage },
    { name: "edit", path: "/edit/:isyoId", component: EditIsyo },
  ],
})

export default router

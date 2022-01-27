import Home from "./components/Home.vue"
// import ShowIsyo from "./components/ShowIsyo.vue"
import Mypage from "./components/Mypage.vue"
import EditIsyo from "./components/EditIsyo.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "mypage", path: "/:userId", component: Mypage },
    { name: "edit", path: "/edit/:userId", component: EditIsyo },
  ],
})

export default router

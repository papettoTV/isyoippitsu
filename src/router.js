import Home from "./components/Home.vue"
import ShowIsyo from "./components/ShowIsyo.vue"
import EditIsyo from "./components/EditIsyo.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "showisyo", path: "/:userId", component: ShowIsyo },
    { name: "edit", path: "/edit/:userId", component: EditIsyo },
  ],
})

export default router

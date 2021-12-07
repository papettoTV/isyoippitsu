import Home from "./components/Home.vue"
import ShowIsyo from "./components/ShowIsyo.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "showisyo", path: "/papettoTV", component: ShowIsyo },
  ],
})

export default router

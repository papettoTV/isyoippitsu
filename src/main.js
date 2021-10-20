import { createApp } from "vue"
import App from "./App.vue"
import Nl2br from "vue3-nl2br"

createApp(App)
  .component("nl2br", Nl2br)
  .mount("#app")

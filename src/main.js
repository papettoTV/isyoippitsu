import { createApp } from "vue"
import Nl2br from "vue3-nl2br"
import { firebaseInit } from "./libs/firebase.js"
import { getAnalytics } from "firebase/analytics"

import App from "./App"
import router from "./router.js"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"
import { Quasar } from "quasar"
import quasarUserOptions from "./quasar-user-options"

loadFonts()

const firebaseApp = firebaseInit()
getAnalytics(firebaseApp)

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(vuetify)
  .component("nl2br", Nl2br)
  .mount("#app")

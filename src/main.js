import { createApp } from "vue"
import App from "./App.vue"
import Nl2br from "vue3-nl2br"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCz9xsxV903h5zq5oCNUXnn3Ld4o4oI2aA",
  authDomain: "isyo-894d2.firebaseapp.com",
  projectId: "isyo-894d2",
  storageBucket: "isyo-894d2.appspot.com",
  messagingSenderId: "274415468618",
  appId: "1:274415468618:web:5634c12171e40bbb74e6b3",
  measurementId: "G-8XE4XDBH4P",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)

createApp(App)
  .component("nl2br", Nl2br)
  .mount("#app")

import { initializeApp } from "firebase/app"
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MESUREMENT_ID,
}

export function firebaseInit() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
  // key is the counterpart to the secret key you set in the Firebase console.
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6LfLelQfAAAAAFjI1QgxuVl_NFwsRwGmyf2vrnk2"
    ),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true,
  })
  return app
}

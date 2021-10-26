<template>
  <div class="hello">
    <h1>遺書一筆</h1>
    <input-form v-if="!isConfirm" @inputBody="onInputBody" :inputedBody="body">
    </input-form>
    <input-confirm-form
      v-if="isConfirm"
      @save="onSave"
      @edit="onEdit"
      :body="body"
    >
    </input-confirm-form>
  </div>
</template>

<script>
import InputForm from "./InputForm.vue"
import InputConfirmForm from "./InputConfirmForm.vue"
// import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore"

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
initializeApp(firebaseConfig)

const db = getFirestore()

export default {
  data() {
    return {
      body: "",
      isConfirm: false,
    }
  },
  methods: {
    onInputBody(e) {
      console.log("onInputBody", e)
      this.isConfirm = true
      this.body = e
    },
    async onSave(body) {
      console.log("onSave", body)
      oauth(body)
      // update(body, "user_id")
      read()
    },
    onEdit(body) {
      console.log("onEdit", body)
      this.isConfirm = false
    },
  },
  components: {
    InputForm,
    InputConfirmForm,
  },
}

function oauth(body) {
  const provider = new TwitterAuthProvider()
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user
      console.log(user, body)
      // 保存完了UI
      // showSaveComplete()
      update(body, user.displayName)
    })
    .catch((error) => {
      // // Handle Errors here.
      // const errorCode = error.code
      // const errorMessage = error.message
      // // The email of the user's account used.
      // const email = error.email
      // // The AuthCredential type that was used.
      // const credential = TwitterAuthProvider.credentialFromError(error)
      // // ...
      console.log(error)
    })
}

async function update(body, user_id) {
  console.log("update", body, user_id)

  try {
    await setDoc(doc(db, "isyos", user_id), {
      body: body,
      oauth_type: "twitter",
      user_id: "user_id",
      user_name: "user_name",
    })
  } catch (e) {
    console.log(e)
  }
}

async function read() {
  const querySnapshot = await getDocs(collection(db, "isyos"))
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data())
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

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

import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth"

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
    onSave(body) {
      console.log("onSave", body)
      // 認証

      const provider = new TwitterAuthProvider()

      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
          // You can use these server side with your app's credentials to access the Twitter API.
          // const credential = TwitterAuthProvider.credentialFromResult(result)
          // const token = credential.accessToken
          // const secret = credential.secret

          // The signed-in user info.
          const user = result.user
          // ...
          console.log(user)
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

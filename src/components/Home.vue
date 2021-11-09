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

import { update, read } from "../libs/db.js"

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
      const user = oauth(body)
      const user = {
        displayName: "papettoTV",
      }

      // await update(body, user.displayName)
      const userInfo = await read(user.displayName)
      console.log("userInfo", userInfo)
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
  const user = auth.currentUser
  if (user) {
    // https://firebase.google.com/docs/reference/js/firebase.User
    update(body, user.displayName)
  } else {
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
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

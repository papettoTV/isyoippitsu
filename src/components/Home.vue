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

import { read } from "../libs/db.js"
import { oauth } from "../libs/oauth.js"

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
      await oauth(body, showSaveComplete)
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

async function showSaveComplete(user) {
  const userInfo = await read(user.displayName)
  console.log("userInfo", userInfo)

  // show isyo
  location.href = userInfo.user_id
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

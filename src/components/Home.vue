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

<script setup>
import { ref, defineExpose } from "vue"

import InputForm from "./InputForm.vue"
import InputConfirmForm from "./InputConfirmForm.vue"

import { read } from "../libs/db.js"
import { oauth } from "../libs/oauth.js"

let isConfirm = ref(false)
let body = ref("")

const onInputBody = function(e) {
  console.log("onInputBody", e)
  isConfirm.value = true
  body.value = e
}
const onSave = async function(editbody) {
  console.log("onSave", editbody)
  await oauth(editbody, showSaveComplete)
}
const onEdit = function(editbody) {
  console.log("onEdit", editbody)
  isConfirm.value = false
}

defineExpose({
  InputForm,
  InputConfirmForm,
})

async function showSaveComplete(user) {
  const userInfo = await read(user.displayName)
  console.log("userInfo", userInfo)

  // show isyo
  location.href = "/" + userInfo.user_id
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

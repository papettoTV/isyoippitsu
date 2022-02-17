<template>
  <div v-if="!isEdit && !isConfirm" class="row q-ma-lg">
    <div class="col q-pa-lg bg-blue-grey-1">
      <h2>遺書を書いてみませんか？</h2>
      <p class="q-mt-lg">
        遺書を書くとしたら誰に書きますか？何を伝えますか？<br />
        あなたが最後に伝えたいこと、その思いを一度形にしてみませんか？
      </p>
    </div>
  </div>
  <input-form v-if="!isConfirm" @inputBody="onInputBody" :inputedBody="body">
  </input-form>
  <input-confirm-form
    v-if="isConfirm"
    @save="onSave"
    @edit="onEdit"
    :body="body"
  >
  </input-confirm-form>
</template>

<script setup>
import { ref, defineExpose } from "vue"
import InputForm from "./InputForm.vue"
import InputConfirmForm from "./InputConfirmForm.vue"
import { onSave } from "../libs/save.js"

let isConfirm = ref(false)
let isEdit = ref(false)
let body = ref("")

const onInputBody = function (e) {
  console.log("onInputBody", e)
  isConfirm.value = true
  body.value = e
}

const onEdit = function (editbody) {
  console.log("onEdit", editbody)
  isConfirm.value = false
  isEdit.value = true
}

defineExpose({
  InputForm,
  InputConfirmForm,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

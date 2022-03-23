<template>
  <div v-if="!isEdit && !isConfirm" class="q-pa-lg main-visual">
    <div class="row">
      <h2 class="main-message">遺書を書いてみませんか？</h2>
    </div>
    <div class="row">
      <p class="q-mt-lg sub-message">
        遺書を書くとしたら誰に書きますか？何を伝えますか？<br />
        あなたが伝えたいこと、言っておきたいこと、その思いを一度文章にしてみませんか？
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
<style lang="scss">
@import "../styles/quasar.variables.scss";
.main-visual {
  background-color: $primary-color;
}
.main-message {
  color: $primary-color-text;
  font-size: 3.5em;
}
.sub-message {
  color: $primary-color-light;
}
</style>

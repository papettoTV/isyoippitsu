<template>
  <div class="hello">
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
import { onSave } from "../libs/save.js"

let isConfirm = ref(false)
let body = ref("")

const onInputBody = function (e) {
  console.log("onInputBody", e)
  isConfirm.value = true
  body.value = e
}

const onEdit = function (editbody) {
  console.log("onEdit", editbody)
  isConfirm.value = false
}

defineExpose({
  InputForm,
  InputConfirmForm,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

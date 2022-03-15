<template>
  <div class="row q-ma-lg">
    <div class="col">
      <q-input id="body" v-model="body" filled type="textarea" />
    </div>
  </div>
  <div class="row justify-end">
    <div class="col-4">
      <q-btn
        color="primary"
        label="内容の確認"
        @click="$emit('inputBody', body)"
      />
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps, defineEmits } from "vue"

let body = ""
const props = defineProps({
  inputedBody: String,
})
defineEmits(["inputBody"])

const { inputedBody } = toRefs(props)
body = inputedBody.value
</script>

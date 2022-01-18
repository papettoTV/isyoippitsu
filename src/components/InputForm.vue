<template>
  <textarea id="body" v-model="body"></textarea>
  <button @click="$emit('inputBody', body)">確認</button>
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

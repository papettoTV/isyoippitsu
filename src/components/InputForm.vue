<template>
  <textarea id="body" v-model="body"></textarea>
  <button @click="$emit('inputBody', body)">確認</button>
  <button @click="$emit('testButton', 'test')">test</button>
</template>

<script setup>
import { ref, toRefs, defineProps, defineEmits } from "vue"

let body = ref("")
const props = defineProps({
  inputedBody: String,
})
defineEmits(["inputBody", "testButton"])

const { inputedBody } = toRefs(props)
body.value = inputedBody.value
</script>

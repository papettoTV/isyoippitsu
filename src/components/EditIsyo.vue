<template>
  <textarea id="body" v-model="body"></textarea>
  <button @click="$emit('cancel')">キャンセル</button>
  <button @click="onSave(body)">編集完了する</button>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from "vue"
import { onSave } from "../libs/save.js"

let body = ""

defineEmits(["save", "cancel"])
const props = defineProps({
  inputedBody: String,
})

const { inputedBody } = toRefs(props)
body = inputedBody.value
</script>

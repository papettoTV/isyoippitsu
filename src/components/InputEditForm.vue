<template>
  <nl2br tag="p" :text="body" class="foo bar" />
  <button @click="$emit('edit', body)">編集</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

let body = ref("")

defineEmits(["inputBody"])
defineProps({
  inputedBody: String,
})
body.value = inputedBody
</script>

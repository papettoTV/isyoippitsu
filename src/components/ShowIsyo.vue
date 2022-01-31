<template>
  <nl2br tag="p" :text="body" />
  <button @click="$emit('edit', body)">編集</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

defineEmits(["edit"])
defineProps({
  body: String,
})
</script>

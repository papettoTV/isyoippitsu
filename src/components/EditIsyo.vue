<template>
  <textarea id="body" v-model="body"></textarea>
  <button @click="onSave(body)">編集完了する</button>
</template>

<script setup>
import { read } from "../libs/db.js"
import { useRoute } from "vue-router"
import { ref } from "vue"
import { onSave } from "../libs/save.js"

let body = ref("")
const route = useRoute()

const done = async function() {
  const readResult = await read(route.params.userId)
  body.value = readResult.body
}
done()
</script>

<template>
  <p>ShowIsyo</p>
  <p>{{ body }}</p>
</template>

<script setup>
import { read } from "../libs/db.js"
import { useRoute } from "vue-router"
import { ref } from "vue"

let body = ref("default body")
const route = useRoute()

const done = async function() {
  const readResult = await read(route.params.userId)
  body.value = readResult.body
}
done()
</script>

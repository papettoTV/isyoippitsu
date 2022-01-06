<template>
  <p>ShowIsyo</p>
  <nl2br tag="p" :text="body" />
  <router-link :to="{ name: 'edit', params: { user_id: userId } }">
    編集
  </router-link>
</template>

<script setup>
import { read } from "../libs/db.js"
import { useRoute } from "vue-router"
import { ref } from "vue"

let body = ref("default body")
const route = useRoute()
const userId = route.params.userId

const done = async function() {
  const readResult = await read(userId)
  body.value = readResult.body
}
done()
</script>

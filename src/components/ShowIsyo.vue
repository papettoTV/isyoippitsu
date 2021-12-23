<template>
  <p>ShowIsyo</p>
  <p>{{ userInfo }}</p>
</template>

<script setup>
import { read } from "../libs/db.js"
import { useRoute } from "vue-router"
import { reactive } from "vue"

let userInfo = reactive({})
const route = useRoute()

const done = async function() {
  const readResult = await read(route.params.userId)
  userInfo.user_id = readResult.user_id
}
done()
</script>

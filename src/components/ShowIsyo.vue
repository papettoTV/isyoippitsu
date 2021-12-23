<template>
  <p>{{ userInfo.user_id }}</p>
</template>

<script async setup>
import { read } from "../libs/db.js"
import { useRoute } from "vue-router"
import { reactive } from "vue"

const route = useRoute()
let userInfo = reactive({})

userInfo = await read(route.params.userId)
</script>

<template>
  <p>{{ $route.params.userId }}</p>
  <nl2br tag="p" :text="body" class="foo bar" />
  <button @click="$emit('edit', body)">修正</button>
</template>

<script>
import { read } from "../libs/db.js"
import { defineComponent } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  async setup() {
    const route = useRoute()
    const userInfo = async (userId) => {
      const readResult = await read(userId)
      return readResult
    }
    console.log("userInfo", userInfo)

    const ui = await userInfo(route.params.userId)
    console.log("ui", ui)

    return {
      body: ui,
    }
  },
})
</script>

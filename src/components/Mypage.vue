<template>
  <p>あなたの遺書</p>
  <show-isyo v-if="!isEdit" @edit="onEdit" :body="body"> </show-isyo>
  <edit-isyo v-if="isEdit" :inputedBody="body"> </edit-isyo>
</template>

<script setup>
import { ref, defineExpose } from "vue"
import { useRoute } from "vue-router"
import ShowIsyo from "./ShowIsyo.vue"
import EditIsyo from "./EditIsyo.vue"
import { read } from "../libs/db.js"

let isEdit = ref(false)
let body = ref("")
const route = useRoute()
const userId = route.params.userId

defineExpose({
  ShowIsyo,
  EditIsyo,
})

const onEdit = function(editbody) {
  console.log("onEdit", editbody)
  isEdit.value = true
  body.value = editbody
}

const done = async function() {
  const readResult = await read(userId)
  body.value = readResult.body
}
done()
</script>

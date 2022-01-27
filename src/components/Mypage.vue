<template>
  <p>ShowIsyo</p>
  <show-isyo v-if="!isEdit" @edit="onEdit"> </show-isyo>
  <edit-isyo v-if="isEdit" :inputedBody="body"> </edit-isyo>
</template>

<script setup>
import { ref, defineExpose } from "vue"
import ShowIsyo from "./ShowIsyo.vue"
import EditIsyo from "./EditIsyo.vue"

let isEdit = ref(false)
let body = ref("")

defineExpose({
  ShowIsyo,
  EditIsyo,
})

const onEdit = function(editbody) {
  console.log("onEdit", editbody)
  isEdit.value = true
  body.value = editbody
}
</script>

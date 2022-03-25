<template>
  <div v-if="!isEdit" class="row q-ma-lg">
    <h2 class="mypage-title">あなたの遺書</h2>
  </div>
  <show-isyo v-if="!isEdit" @edit="onEdit" :body="body"> </show-isyo>
  <edit-isyo v-if="isEdit" :inputedBody="body" @cancel="onCancel"> </edit-isyo>
  <alert v-if="!isMypage" />
</template>

<script setup>
import { ref, defineExpose } from "vue"
import { useRoute } from "vue-router"
import ShowIsyo from "./ShowIsyo.vue"
import EditIsyo from "./EditIsyo.vue"
import { read } from "../libs/db.js"
import { logon } from "../libs/oauth.js"
import Alert from "./Alert.vue"

let isEdit = ref(false)
let isMypage = ref(true)
let body = ref("")
const route = useRoute()
const isyoId = route.params.isyoId

defineExpose({
  ShowIsyo,
  EditIsyo,
  Alert,
})

const onEdit = function (editbody) {
  console.log("onEdit", editbody)
  isEdit.value = true
  body.value = editbody
}

const onCancel = function () {
  console.log("onCancel")
  isEdit.value = false
}

const done = async function () {
  console.log("done", isyoId)
  const userInfo = await logon()
  if (userInfo.name == "") {
    isMypage.value = false
  } else {
    const readResult = await read(isyoId)
    // isMypage?
    if (readResult.user_name == userInfo.name) {
      isMypage.value = true
      body.value = readResult.body
    } else {
      isMypage.value = false
    }
  }
}
done()
</script>

<style lang="scss">
@import "../styles/quasar.variables.scss";
h2.mypage-title {
  color: $secondary-text-color;
  font-size: 2.5em;
}
</style>

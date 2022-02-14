<template>
  <div class="row">
    <div class="col">
      <h3>遺書を書いてみませんか？</h3>
      <p>
        遺書を書くとしたら誰に書きますか？何を伝えますか？<br />
        あなたが最後に、誰に何を伝えるか、その思いを一度形にしてみませんか？
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <q-input id="body" v-model="body" filled type="textarea" />
      <q-btn
        color="white"
        text-color="black"
        label="確認"
        @click="$emit('inputBody', body)"
      />
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps, defineEmits } from "vue"

let body = ""
const props = defineProps({
  inputedBody: String,
})
defineEmits(["inputBody"])

const { inputedBody } = toRefs(props)
body = inputedBody.value
</script>

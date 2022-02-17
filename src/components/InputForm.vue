<template>
  <div class="row q-ma-lg">
    <div class="col q-pa-lg bg-secondary">
      <h2>遺書を書いてみませんか？</h2>
      <p class="q-mt-lg">
        遺書を書くとしたら誰に書きますか？何を伝えますか？<br />
        あなたが最後に伝えたいこと、その思いを一度形にしてみませんか？
      </p>
    </div>
  </div>
  <div class="row q-ma-lg">
    <div class="col">
      <q-input id="body" v-model="body" filled type="textarea" />
    </div>
  </div>
  <div class="row justify-end">
    <div class="col-4">
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

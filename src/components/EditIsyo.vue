<template>
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
        label="キャンセル"
        @click="$emit('cancel')"
      />
    </div>
    <div class="col-4">
      <q-btn
        color="white"
        text-color="black"
        label="保存する"
        @click="onSave(body)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from "vue"
import { onSave } from "../libs/save.js"

let body = ""

defineEmits(["save", "cancel"])
const props = defineProps({
  inputedBody: String,
})

const { inputedBody } = toRefs(props)
body = inputedBody.value
</script>

<template>
  <div class="row q-ma-lg">
    <div class="col">
      <nl2br tag="p" :text="body" />
    </div>
  </div>
  <div class="row justify-end">
    <div class="col-4">
      <q-btn
        color="white"
        text-color="black"
        label="修正する"
        @click="$emit('edit', body)"
      >
      </q-btn>
    </div>
    <div class="col-4">
      <q-btn color="primary" label="保存する" @click="$emit('save', body)">
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

defineEmits(["edit", "save"])
defineProps({
  body: String,
})
</script>

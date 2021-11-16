<template>
  <nl2br tag="p" :text="body" class="foo bar" />
  <button @click="$emit('edit', body)">編集</button>
</template>

<script>
export default {
  emits: ["inputBody"],
  props: {
    inputedBody: String,
  },
  methods: {},
  data() {
    return {
      body: this.inputedBody,
    }
  },
}
</script>

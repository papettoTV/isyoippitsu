<template>
  <textarea id="body" v-model="body"></textarea>
  <button @click="$emit('inputBody', body)">確認</button>
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
  components: {},
}
</script>

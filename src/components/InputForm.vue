<template>
  <textarea id="body" v-model="isyo"> </textarea>
  <button @click="$emit('inputBody', isyo)">確認</button>
</template>

<script>
export default {
  emits: ["inputBody"],
  methods: {},
  data() {
    return {
      isyo: "",
    }
  },
  components: {},
}
</script>

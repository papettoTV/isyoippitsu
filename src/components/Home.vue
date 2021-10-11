<template>
  <div class="hello">
    <h1>遺書一筆</h1>
    <input-form @inputBody="onInputBody"> </input-form>
  </div>
</template>

<script>
import InputForm from "./InputForm.vue"

export default {
  name: "HelloWorld",
  emits: ["emitmethod"],
  methods: {
    onInputBody(e) {
      console.log("onInputBody", e)
      this.isConfirm = true
      this.body = e
    },
  },
  components: {
    InputForm,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

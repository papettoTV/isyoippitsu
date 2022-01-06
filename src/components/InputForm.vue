<template>
  <textarea id="body" v-model="body"></textarea>
  <button @click="$emit('inputBody', body)">確認</button>
</template>

<!--
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
-->
<script>
import { toRefs } from "vue"
export default {
  props: {
    inputedBody: String,
  },
  emits: ["inputBody"],
  setup(props) {
    // console.log("inputedBody", props.inputedBody)

    const { inputedBody } = toRefs(props)
    // console.log("inputedBody", inputedBody.value)
    return {
      body: inputedBody.value,
    }
  },
}
</script>

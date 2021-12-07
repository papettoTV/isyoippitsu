<template>
  <p>{{ $route.params.userId }}</p>
  <nl2br tag="p" :text="body" class="foo bar" />
  <button @click="$emit('edit', body)">修正</button>
</template>

<script>
export default {
  emits: ["edit"],
  methods: {},
  components: {},

  data() {
    return {
      body: "saved body",
    }
  },
}
</script>

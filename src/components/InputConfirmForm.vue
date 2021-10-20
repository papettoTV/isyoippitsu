<template>
  <nl2br tag="p" :text="body" class="foo bar" />
  <button @click="$emit('edit', body)">修正</button>
  <button @click="$emit('save', body)">保存</button>
</template>

<script>
export default {
  emits: ["edit", "save"],
  props: {
    body: String,
  },
  methods: {},
  components: {},
}
</script>

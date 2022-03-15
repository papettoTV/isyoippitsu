<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { defineExpose } from "vue"
import Header from "./components/Header.vue"

defineExpose({
  Header,
})
</script>

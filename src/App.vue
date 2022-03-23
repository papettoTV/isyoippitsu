<template>
  <q-layout view="hHh lpR fFf">
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>
<script setup>
import { defineExpose } from "vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

defineExpose({
  Header,
  Footer,
})
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>

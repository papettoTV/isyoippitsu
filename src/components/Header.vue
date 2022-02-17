<template>
  <q-header reveal class="bg-primary text-white">
    <q-toolbar>
      <q-avatar size="48px" icon="draw" />
      <q-toolbar-title>
        <h1 class="main-title">遺書一筆</h1>
      </q-toolbar-title>
      <q-btn flat round dense icon="perm_identity" />
      {{ user }}
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue"
import { logon } from "../libs/oauth.js"

let user = ref("")
const userInfo = logon()
console.log(userInfo)
user.value = userInfo.name
</script>

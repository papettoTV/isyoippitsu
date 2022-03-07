<template>
  <q-header reveal class="bg-primary text-white">
    <q-toolbar>
      <q-avatar size="48px" icon="draw" />
      <q-toolbar-title>
        <h1 class="main-title">遺書一筆</h1>
      </q-toolbar-title>
      <q-btn flat round dense icon="perm_identity">
        <q-menu>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section @click="callLogout">log out</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      {{ user }}
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"
import { logon, logout } from "../libs/oauth.js"

let user = ref("ゲスト")
onBeforeMount(async () => {
  const userInfo = await logon()
  if (userInfo.name) {
    user.value = userInfo.name
  }
})

const callLogout = async function () {
  await logout()
  user.value = "ゲスト"
}
</script>

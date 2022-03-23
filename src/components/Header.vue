<template>
  <q-header reveal class="bg-primary text-white">
    <q-toolbar>
      <q-avatar size="48px" icon="draw" />
      <q-toolbar-title>
        <h1 class="main-title">遺書一筆</h1>
      </q-toolbar-title>
      <div v-if="isLogon">
        <q-btn flat round dense icon="perm_identity">
          <q-menu>
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section @click="logout">サインアウト</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        {{ user }}
      </div>
      <a href="#" v-if="!isLogon" @click="login" class="signin">サインイン</a>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref, onBeforeMount } from "vue"
import { login, logon, logout } from "../libs/oauth.js"

let user = ref("ゲスト")
let isLogon = ref(false)

onBeforeMount(async () => {
  const userInfo = await logon()
  if (userInfo.name) {
    user.value = userInfo.name
    isLogon.value = true
  }
})
</script>

<style lang="scss">
@import "../styles/quasar.variables.scss";
.main-title {
  font-size: 1.3em;
  line-height: 1.3em;
  text-align: center;
  text-color: $primary-color-text;
}
.signin {
  color: $primary-color-light;
}
</style>

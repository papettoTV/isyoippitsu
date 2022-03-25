<template>
  <q-dialog v-model="alert" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">ここはあなたのページではないようです</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        あなたの遺書ページであればログインしてください。そうでない場合は、<a
          href="/"
          >こちら</a
        >。
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Twitterでログイン" color="primary" @click="login" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue"
import { login } from "../libs/oauth.js"
let alert = ref(true)
</script>

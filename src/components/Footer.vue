<template>
  <q-footer class="bg-white">
    <q-toolbar>
      <q-toolbar-title>
        <div class="row justify-center">
          <div class="col-12 footer">
            <ul>
              <li>
                <a href="#" @click="about = true">このサイトについて</a>
              </li>
              <li>
                Copyright © 2022
                <a href="https://twitter.com/papettoTV">@papettoTV</a>
              </li>
            </ul>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
  <q-dialog v-model="about">
    <q-card>
      <q-card-section>
        <div class="text-h6">このサイトについて</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>
          Q1: このサイトは何ができますか？<br />
          A1: 遺書を残すことができます。
        </p>
        <p>
          Q2: 登録した遺書は他人に見られませんか？<br />
          A2: 書いた本人にしか見ることができません。
        </p>
        <p>
          Q3: 遺書として使えますか？<br />
          A3: 一般的な遺書の効力を保証するものではありません。
        </p>
        <p>
          Q4: どうして作ったんですか？<br />
          A4:
          遺書を書くという行為を通して、生きることへの感謝の気持ちを意識することで、少しでも幸せを感じてほしいと思ったからです。
        </p>
        <p>
          Q5: 一度書いた遺書は書き直せますか？<br />
          A5: 何度でも書き直せますし、書き足せます。
        </p>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue"
let about = ref(false)
</script>

<style lang="scss">
@import "../styles/quasar.variables.scss";
.footer {
  font-size: 0.6em;
  color: $secondary-text-color;
  text-align: center;
}
.footer li {
  padding: 10px;
  display: inline;
}
</style>

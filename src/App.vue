<template>
  <router-view></router-view>
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    onEmitMethod(e) {
      console.log("onEmitMethod", e)
    },
  },
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

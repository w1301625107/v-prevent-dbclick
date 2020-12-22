<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DEMO1/>
  </div>
</template>

<script>
import DEMO1 from './demo/type_1'

export default {
  name: 'App',
  components: {
    DEMO1
  },
  methods:{
  }
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

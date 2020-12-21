<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <v-prevent-dbclick >
      <template v-slot="{startTap,status}">
        <button @click="clickTest(1,startTap)">{{status?`不可点击`:`可以点击`}}</button>
      </template>
    </v-prevent-dbclick>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    clickTest(v,startTap){
      console.log(`It's click test.`)
      setTimeout(() => {
        startTap()
      }, 3000);
    }
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

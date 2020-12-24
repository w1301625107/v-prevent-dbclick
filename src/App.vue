<template>
  <div id="app">
    <div class="header">
      <img class="vue_logo" alt="Vue logo" src="./assets/logo.png">
      <span>v-prevent-dbclick</span>
      <svg @click="toGithub" class="github_icon" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
    </div>
    <DEMO1 class="demo-container"/>
    <footer class="main-footer">
      MIT ©wuchouchou
    </footer>
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
    toGithub(){
      window.open('https://github.com/w1301625107/v-prevent-dbclick')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.header{
  text-align: left;
  font-size: 50px;
  margin-left: 30px;
  margin-bottom: 30px;
}
.header span{
  margin-left: 20px;
}
.vue_logo{
  width: 50px;
  vertical-align: middle;
}
.github_icon{
  float: right;
  margin-top: 15px;
  margin-right: 25px;
}
.github_icon:hover{
  transform: scale(1.1);
}
.demo-container{
  border-top:1px solid #ebebeb;
  border-bottom:1px solid #ebebeb;
  height: calc(100vh - 150px);
}
.main-footer{
  margin-top: 10px;
  float: right;
}
</style>

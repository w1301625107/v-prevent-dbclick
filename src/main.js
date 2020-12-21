import Vue from 'vue'
import App from './App.vue'
import PreventDbClick from './lib/index'


Vue.use(PreventDbClick)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

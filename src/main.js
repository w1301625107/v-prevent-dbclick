import Vue from 'vue'
import App from './App.vue'
import PreventDbClick from './lib/index'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/github.css'


Vue.use(hljs.vuePlugin);
Vue.use(PreventDbClick)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'


Vue.config.productionTip = false
Vue.directive('color',{
  bind(el,binding,vnode){
    el.style.color = '#'+Math.random().toString(16).slice(2,8)
  }})

Vue.filter("snippet",function (value){
  return value.toUpperCase()
})


Vue.prototype.axios = axios;
new Vue({
  router,

  store,
  render: h => h(App)
}).$mount('#app')

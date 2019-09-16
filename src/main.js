window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import {router} from "./router"
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

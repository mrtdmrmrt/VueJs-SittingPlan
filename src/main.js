window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import {router} from "./router"


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

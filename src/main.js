import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
//import {guest} from "./plugins/axios"
//import {guest} from "./plugins/http-common"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  //guest,
  render: h => h(App)
}).$mount('#app')

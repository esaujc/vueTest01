import dotEnv from 'dotenv';
dotEnv.config();
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// Sync router with store
import { sync } from 'vuex-router-sync';

// Sync store with router
sync(store, router);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

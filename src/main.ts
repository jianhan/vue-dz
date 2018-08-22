import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import Main from './layouts/Main.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Main),
}).$mount('#app');

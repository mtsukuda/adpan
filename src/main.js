/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'

import lodash from 'lodash';
Object.defineProperty(Vue.prototype, '$_', { value: lodash });

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('icon', Icon);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

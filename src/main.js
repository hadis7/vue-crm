import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from '@/filter/date.filter';
import Vuelidate from 'vuelidate';
import messagePlugin from '@/utils/message.plugin.js'
import '@/registerServiceWorker.js';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date',dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

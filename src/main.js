import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import Vuelidate from 'vuelidate';
import tooltipDirective from '@/directives/tooltip.directive';
import messagePlugin from '@/utils/message.plugin.js';
import Loader from '@/components/app/Loader.vue';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader);


firebase.initializeApp({
  apiKey: "AIzaSyC7PGbvwXd7wXz7RlvfPs3UerFoZ96Oplg",
  authDomain: "vue-crm-77b5f.firebaseapp.com",
  projectId: "vue-crm-77b5f",
  storageBucket: "vue-crm-77b5f.appspot.com",
  messagingSenderId: "794335329063",
  appId: "1:794335329063:web:6d1ea53ff4574055450702",
  measurementId: "G-K400V6FLHL"
})

let app;

firebase.auth().onAuthStateChanged(() => {
 if (!app) {
  app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
  }
})



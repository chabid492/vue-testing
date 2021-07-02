import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.use(VueAxios, axios);

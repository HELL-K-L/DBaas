import Vue from 'vue';
import { Button } from 'element-ui';
import '$style/variables.scss';
import App from './App.vue';
import router from './router';
import store from './vuex';

Vue.config.productionTip = false;

Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

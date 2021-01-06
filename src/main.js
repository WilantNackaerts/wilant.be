import Vue from 'vue';
import Buefy from 'buefy';
import VueRouter from 'vue-router';

import App from './App.vue';
import 'buefy/dist/buefy.css';
import router from './router';

Vue.config.productionTip = false;

Vue.use(
  Buefy,
  VueRouter,
);

Vue.mixin({
  methods: {
    navigate(route, block) {
      this.$router.push({ name: route, query: { block } });
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

require('./bootstrap');
import { App, plugin } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
var VueTruncate = require('vue-truncate-filter');
Vue.use(VueTruncate)

Vue.use(FlashMessage);
Vue.use(plugin);

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(el)

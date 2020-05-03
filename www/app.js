import Vue from 'vue'
import App from './app.vue'
import '../dist/msg.min.css';

import Msg from '../dist/msg.min.js';

Vue.use(Msg);

new Vue({
  el: '#app',
  render: h => h(App)
});
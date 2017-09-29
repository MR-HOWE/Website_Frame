/*ES6 语法 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//界面UI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' //使用主题
Vue.use(MuseUI)

import axios from 'axios';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


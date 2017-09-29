import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Hey from '../components/Hey.vue'

Vue.use(Router)//注册插件

const routes = [
  { path: '/', component: Hello },
  { path: '/hey', component: Hey }
]

export default new Router({
  routes
})

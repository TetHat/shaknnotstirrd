import Vue from 'vue'
import Router from 'vue-router'
import vueScrollto from 'vue-scrollto'
import Masthead from '@/components/Masthead'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)
Vue.use(vueScrollto)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        masthead: Masthead,
        about: About
      }
    }
  ],
  mode: 'history'
})

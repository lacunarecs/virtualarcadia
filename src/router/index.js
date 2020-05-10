import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lineup from '../views/Lineup.vue'
import SetTimes from '../views/SetTimes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/set-times',
    component: SetTimes
  },
  {
    path: '/lineup',
    component: Lineup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Lineup from '@/views/Lineup.vue'
import SetTimes from '@/views/SetTimes.vue'
import Giveaway from '@/views/Giveaway.vue'
import PageNotFound from '@/views/PageNotFound.vue'

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
  },
  {
    path: '/giveaway',
    component: Giveaway
  },
  {
    path: '/donate',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.flipcause.com/secure/donate/Nzc4Njg=/individual/44748'
    }
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

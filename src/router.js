import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/home/home')
const Archive = () => import('@/views/archive/archive')
const Tags = () => import('@/views/tags/tags')
const About = () => import('@/views/about/about')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/archive',
      component: Archive
    },
    {
      path: '/tags',
      component: Tags
    },
    {
      path: '/about',
      component: About
    }
  ]
})

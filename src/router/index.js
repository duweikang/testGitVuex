import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import hall from '@/components/pages/hall'
import active from '@/components/pages/active'
import phone from '@/components/pages/phone'
import agent from '@/components/pages/agent'
import guide from '@/components/pages/guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/hall',
      name: 'hall',
      component: hall
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    }
  ]
})

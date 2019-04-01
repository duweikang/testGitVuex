import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/components/pages/home')
    },
    {
      path: '/hall',
      name: 'hall',
      component: () => import('@/components/pages/hall')
    },
    {
      path: '/active',
      name: 'active',
      component: () => import('@/components/pages/active')
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('@/components/pages/agent'),
      children: [
        {
          path: 'agentAbout',
          name: 'agentAbout',
          component: () => import('@/components/pages/agent/about')
        },
        {
          path: 'agentConnect',
          name: 'agentConnect',
          component: () => import('@/components/pages/agent/connect')
        },
        {
          path: 'agentBusiness',
          name: 'agentBusiness',
          component: () => import('@/components/pages/agent/business')
        },
        {
          path: 'agentLaw',
          name: 'agentLaw',
          component: () => import('@/components/pages/agent/law')
        },
        {
          path: 'agentPrivacy',
          name: 'agentPrivacy',
          component: () => import('@/components/pages/agent/privacy')
        },
        {
          path: 'agentTeamwork',
          name: 'agentTeamwork',
          component: () => import('@/components/pages/agent/teamwork')
        }
      ]
    },
    {
      path: '/phone',
      name: 'phone',
      component: () => import('@/components/pages/phone')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/components/pages/guide')
    }
  ]
})

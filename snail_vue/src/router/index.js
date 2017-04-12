import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Collect from '@/components/Collect'
import Message from '@/components/Message'
import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Histroy from '@/components/Histroy'
import Search from '@/components/Search'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/search',
          name: 'Search',
          component: Search
        }
      ]
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/histroy',
      name: 'Histroy',
      component: Histroy
    }
  ]
})

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
import Person from '@/components/Person'
import Chat from '@/components/Chat'

import House from '@/components/childPage/House'
import Other from '@/components/childPage/Other'
import City from '@/components/childPage/City'
import Space from '@/components/childPage/Space'
import Style from '@/components/childPage/Style'

import Works from '@/components/collectChild/Works'
import Image from '@/components/collectChild/Image'
import Goods from '@/components/collectChild/Goods'

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
        },
        {
          path: '/house',
          name: 'House',
          component: House
        },
        {
          path: '/other',
          name: 'Other',
          component: Other
        },
        {
          path: '/city',
          name: 'City',
          component: City
        },
        {
          path: '/space',
          name: 'Space',
          component: Space
        },
        {
          path: '/style',
          name: 'Style',
          component: Style
        }
      ]
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect,
      children: [
        {
          path: '/collect/works',
          name: 'Works',
          component: Works
        },
        {
          path: '/collect/image',
          name: 'Image',
          component: Image
        },
        {
          path: '/collect/goods',
          name: 'Goods',
          component: Goods
        }
      ]
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
      path: '/person',
      name: 'Person',
      component: Person
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
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import User from '@/components/user/user.vue'
import Shop from '@/components/shop/shop.vue'
import Right from '@/components/right/right.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [{
          name: 'shop',
          path: '/shop',
          component: Shop
        },
        {
          name: 'right',
          path:'/right',
          component:Right
        },
        {
          name: 'user',
          path: '/user',
          component: User
        }
      ]
    }
  ]
})

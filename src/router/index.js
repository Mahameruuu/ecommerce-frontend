import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from '../utils/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: () => import('../views/pageNotFound.vue'),
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import ("../views/dashboard.vue")
    },
    {
      path:'/shop',
      name: 'Shop',
      component: () => import ("../views/shop.vue")
    },
    {
      path:'/login',
      name:'Login',
      component: () => import('../views/login.vue')
    },
    {
      path:'/logout',
      name:'Logout',
      component: () => import('../views/logout.vue')
    },
    {
      path:'/register',
      name:'Register',
      component: () => import('../views/register.vue')
    },
    {
      path:'/account',
      beforeEnter(to) {
        if(!isLoggedIn()) {
          return '/login'
        }
      },
      children: [
        {
          path:'',
          name:'Profile',
          component: () => import('../views/profile.vue')
        },
        {
          path:'updatepw',
          name:'Updatepw',
          component: () => import('../views/update_pw.vue')
        },
        {
          path:'myorder',
          name:'Myorder',
          component:() => import('../views/myorder.vue')
        },
      ]
    },
    {
      path:'/checkout',
      name:'Checkout',
      component: () => import('../views/checkout.vue'),
      beforeEnter: (to, from, next) => {
        if (from.path === '/cart') {
          next()
        } else {
          next('/')
        }
      },
    },
    {
      path:'/about',
      name:'About',
      component:() => import('../views/about.vue')
    },
    {
      path:'/contact',
      name:'Contact',
      component:() => import('../views/contact-us.vue')
    },
    {
      path:'/cart',
      name:'Cart',
      component:() => import('../views/cart.vue'),
      beforeEnter(to) {
        if(!isLoggedIn()) {
          return '/login'
        }
      }
    },
  ]
})

export default router

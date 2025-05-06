import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/auth/HomeView.vue'
import LogInView from '@/views/auth/LogInView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import AboutView from '@/views/auth/AboutView.vue'
import ShopView from '@/views/auth/ShopView.vue'
import SellerView from '@/views/auth/SellerView.vue'
import AddProductView from '@/views/auth/AddProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },

    {
      path: '/seller',
      name: 'seller',
      component: SellerView,
    },

    {
      path: '/addproduct',
      name: 'addproduct',
      component: AddProductView,
    },
  ],
})

export default router

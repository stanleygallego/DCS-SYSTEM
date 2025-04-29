import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '@/views/auth/LogInView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import HomeView from '@/views/auth/HomeView.vue'
import AboutView from '@/views/auth/AboutView.vue'
import ShopView from '@/views/auth/ShopView.vue'
import ProductView from '@/views/auth/ProductView.vue'
import SellerView from '@/views/auth/SellerView.vue'
import KitchenView from '@/views/auth/KitchenView.vue'
import LivingView from '@/views/auth/LivingView.vue'
import CustomizeView from '@/views/auth/CustomizeView.vue'
import BedroomView from '@/views/auth/BedroomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/home',
      name: 'home',
      component: HomeView,
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
      path: '/product',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/seller',
      name: 'seller',
      component: SellerView,
    },
    {
      path: '/kitchen/',
      name: 'kitchen',
      component: KitchenView,
    },
    {
      path: '/living',
      name: 'living',
      component: LivingView,
    },
    {
      path: '/customize',
      name: 'customize',
      component: CustomizeView,
    },
    {
      path: '/bedroom',
      name: 'bedroom',
      component: BedroomView,
    },
  ],
})

export default router

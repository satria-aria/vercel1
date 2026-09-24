import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import TestimoniPage from '../pages/TestimoniPage.vue'

 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/product', component: ProductPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component:ContactPage},
    { path: '/testimoni', component: TestimoniPage  }
  ],
})
 
export default router




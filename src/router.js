import { createWebHistory, createRouter } from 'vue-router'

// Layout
import WebLayout from './layout/WebLayout.vue'

// Web Page
import Home from './pages/Home.vue'

// Auth
import Login from './pages/auth/login.vue'

const routes = [

  {
    path : '/',
    component : WebLayout,
    children : [
      { path: '/', component: Home },
      { path: '/home', component: Home },
    ]

  },
  {
    path : '/login',
    component : Login,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
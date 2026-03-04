import { createWebHistory, createRouter } from 'vue-router'

// Layout
import WebLayout from './layout/WebLayout.vue'

import Home from './pages/Home.vue'

const routes = [

  {
    path : '/',
    component : WebLayout,
    children : [
      { path: '/', component: Home },
      { path: '/home', component: Home },
    ]

  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
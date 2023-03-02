import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import exApp from './views/ExApp.vue'

import AppStats from './components/AppStats.vue'

// const filterGuard = (to) => {
//  return { path: to.path, query: {}, hash: to.hash }
// }

const routes = [
 { path: '/', component: AppHome, name: 'home' },
 {
  path: '/app',
  component: exApp,
  name: 'app',
  // beforeEnter: [filterGuard],

 },
 { path: '/app/stats', component: AppStats, name: 'statistics' }
]

export const router = createRouter({
 // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
 history: createWebHistory(),
 routes, // short for `routes: routes`
})
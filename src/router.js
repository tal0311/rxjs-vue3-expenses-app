import { createRouter, createWebHistory } from 'vue-router'
import home from './views/home.vue'
import exApp from './views/ex-app.vue'

import appStats from './components/stats.vue'

import { itemService } from './services/item.service'

// const filterGuard = (to) => {
//  return { path: to.path, query: {}, hash: to.hash }
// }

const routes = [
 { path: '/', component: home, name: 'home' },
 {
  path: '/app',
  component: exApp,
  name: 'app',
  // beforeEnter: [filterGuard],

 },
 { path: '/app/stats', component: appStats, name: 'statistics' }
]

export const router = createRouter({
 // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
 history: createWebHistory(),
 routes, // short for `routes: routes`
})
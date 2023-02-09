import { createRouter, createWebHashHistory } from 'vue-router'
import home from './views/home.vue'
import exApp from './views/ex-app.vue'
import userSettings from './views/user-settings.vue'
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
  children: [
   {
    path: 'settings', component: userSettings, name: 'settings'
   }
  ]
 },
 { path: '/app/stats', component: appStats, name: 'statistics' }
]

export const router = createRouter({
 // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
 history: createWebHashHistory(),
 routes, // short for `routes: routes`
})
<template>
  <header class="app-header main-container full flex">
    <section class="header-container flex ">
      <h1 class="logo">Expense Tracker rxjs</h1>
      <nav>

        <RouterLink v-for="(route, idx) in routes" :data-title="route.value" :key="idx" :to="route.path"
          v-icon="route.icon">
          {{ route.value }}
        </RouterLink>

      </nav>
      <UserPreview />
    </section>

  </header>
</template>

<script>
import { itemService } from '../services/item.service'
import UserPreview from './UserPreview.vue'


export default {
  name: 'app-header',
  // emits: ['setModal'],
  data() {
    return {
      routes: [
        { path: '/', value: 'Home', icon: 'home' },
        { path: '/app', value: 'App', icon: 'app' },
        { path: '/app/stats', value: 'Statistics', icon: 'stat' }
      ]
    }
  },
  components: {
    UserPreview

  }
}
</script>

<style></style>
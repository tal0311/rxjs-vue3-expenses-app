<template>
  <header class="app-header main-container full">
    <section class="header-container flex ">
      <h1 class="logo">Expense Tracker rxjs</h1>
      <nav>

        <RouterLink v-for="(route, idx) in routes" :key="idx" :to="route.path" v-icon="route.icon">
          {{ route.value }}
        </RouterLink>
        <i @click="$emit('setModal','userSettings' )" v-icon="'settings'"></i>
      </nav>
    </section>

  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: ['setModal'],
  data() {
    return {
      routes: [
        { path: '/', value: 'Home', icon: 'home' },
        { path: '/app', value: 'App', icon: 'app' },
        { path: '/app/stats', value: 'Statistics', icon: 'stat' }
      ]
    }
  }
}
</script>

<style>

</style>
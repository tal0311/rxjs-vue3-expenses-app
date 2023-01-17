<template>
  <appHeader></appHeader>
  <main class="main-container full">
    <RouterView></RouterView>
  </main>
  <footer class="main-container full">
    <section>
      <h1>footer</h1>
    </section>
  </footer>
</template>

<script>
import appHeader from './components/app-header.vue';
export default {
  name: 'app',
  components: {
    appHeader
  }
}
</script>

<style>

</style>
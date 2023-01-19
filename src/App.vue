<template>
  <section class="full">
    <appHeader></appHeader>
    <main class="main-container full">
      <RouterView></RouterView>
    </main>
  </section>
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
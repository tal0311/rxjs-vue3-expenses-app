<template>
  <section class="full">
    <appHeader></appHeader>
    <main class="main-container full">
      <RouterView></RouterView>
    </main>
  </section>
  <app-helper></app-helper>
</template>

<script>
import appHelper from './components/app-helper.vue';
import appHeader from './components/app-header.vue';
export default {
  name: 'app',
  components: {
    appHeader,
    appHelper
  }
}
</script>

<style>

</style>
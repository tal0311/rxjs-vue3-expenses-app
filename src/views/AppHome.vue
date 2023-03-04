<template>
 <section class="app-home">
  <AddEx />
  <hr>
  <WeekTotalVue />
  <hr>
  <DailyExVue />
 </section>
</template>

<script>

import AddEx from '../components/AddEx.vue';
import DailyExVue from '../components/DailyEx.vue';
import WeekTotalVue from '../components/WeekTotal.vue';

export default {
 name: 'app-home',
 components: {
  AddEx,
  WeekTotalVue,
  DailyExVue
 }
}
</script>

<style></style>
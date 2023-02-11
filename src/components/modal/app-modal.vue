<template>
 <section v-clickOutside v-if="cmp" class="modal-container">
  <component :is="cmp"></component>
 </section>
</template>

<script>
import exEdit from '../ex-edit.vue';
import userSettings from './user-settings.vue';
export default {
 name: 'modal-container',
 props: {
  cmp: String
 },
 components: {
  exEdit,
  userSettings
 }
}
</script>

<style>

</style>
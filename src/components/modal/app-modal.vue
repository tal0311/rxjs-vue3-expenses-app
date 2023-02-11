<template>
 <section v-if="cmp" class="modal-container">
  <component :is="cmp"></component>
 </section>
</template>

<script>
import exEdit from '../ex-edit.vue';
export default {
 name: 'modal-container',
 props: {
  cmp: String
 },
 data() {
  return {

  }
 },
 methods: {
  coseModal() {
   console.log('close modal');
  }
 },

 components: {
  exEdit
 }
}
</script>

<style>

</style>
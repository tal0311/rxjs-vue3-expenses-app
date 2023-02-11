<template>
 <section v-clickOutside v-if="cmp" class="modal-container" :style="getStyles">
  <component :is="cmp.type"></component>
 </section>
</template>

<script>
import userOptions from './user-options.vue';
import exEdit from '../ex-edit.vue';
import userSettings from './user-settings.vue';

export default {
 name: 'modal-container',
 props: {
  cmp: Object
 },
 computed: {
  getStyles() {
   if (this.cmp.pos) {
    return {
     position: 'fixed',
     top: this.cmp.pos.y + this.cmp.pos.height + this.cmp.pos.top + 'px',
     left: this.cmp.pos.x - this.cmp.pos.width / 2 + 'px',
    }
   }
  },
 },
 components: {
  exEdit,
  userSettings,
  userOptions
 }
}
</script>

<style>

</style>
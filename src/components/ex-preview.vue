<template>
 <article :class="['ex-preview', item.category]" :style="borderStyle">
  <div class="cell">
   <p>{{ item.content }}</p>
  </div>
  <div class="cell">
   <p>{{ item.amount }}</p>
  </div>
  <div class="cell">
   <p>{{ getDate }}</p>
  </div>
  <div class="cell" @click="$emit('remove', item.id)">
   <div class="actions-container flex">
    <div class="icon" v-icon="'edit'"></div>
    <div class="icon" v-icon="'archive'"></div>
    <div class="icon" v-icon="'trash'"></div>
   </div>
  </div>
 </article>
</template>

<script>
import { setCatColor } from '../services/category.service';
export default {
 name: 'ex-preview',
 emits: ['remove'],
 props: {
  item: Object
 },
 methods: {
  log() {
   console.log('log');
  }
 },
 computed: {
  getDate() {
   return new Date(this.item.createdAt).toLocaleDateString()
  },
  borderStyle() {
   return {
    'border-Left': `5px solid ${setCatColor(this.item.category)}`
   }

  }
 }
}

</script>

<style>

</style>
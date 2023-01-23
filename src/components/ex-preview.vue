<template>
 <article :class="['ex-preview', item.category]" :style="borderStyle">
  <div class="cell">
   <p>{{ item.content }}</p>
  </div>
  <div class="cell">
   <p>{{ item.amount }}</p>
  </div>
  <div class="cell">
   {{ getDate }}
  </div>
  <div class="cell" v-icon="'times'" @click="$emit('remove', item.id)">
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
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
  <div class="cell">
   <div :class="['actions-container flex', isActions && 'relative']">
    <i class="icon" v-icon="'options'" v-if="!isActions" @click="isActions = !isActions">actions</i>
    <section v-else :style="getStyle">
     <i class="icon" v-icon="'edit'"></i>
     <i class="icon" v-icon="'archive'"></i>
     <i class="icon" @click="$emit('remove', item.id)" v-icon="'trash'"></i>
    </section>
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
 data() {
  return {
   isActions: false
  }
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
  },
  getStyle() {
   if (this.isActions) {
    return {
     'position': 'absolute',
     'display': 'flex',
     'right': '0',
     'transform': 'translateY(-60%)',

    }
   }
  }
 }
}

</script>

<style>

</style>
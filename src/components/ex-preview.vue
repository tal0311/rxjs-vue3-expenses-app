<template>
 <article :class="['ex-preview', item.category]">
  <div class="cell">
   <p>{{ item.content }}</p>
  </div>
  <div class="cell">
   <p>{{ item.amount }}</p>
  </div>
  <div class="cell">
   {{ getDate }}
  </div>
  <div class="cell">
   <button class="icon" v-icon="'times'"></button>
  </div>
 </article>
</template>

<script>
export default {
 name: 'ex-preview',
 props: {
  item: Object
 },

 computed: {
  getDate() {
   return new Date(this.item.createdAt).toLocaleDateString()
  }
 }
}

</script>

<style>

</style>
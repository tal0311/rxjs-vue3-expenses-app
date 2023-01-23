<template>
 <section class="app-filter full flex">
  <button class="view-btn icon" v-icon="icon" @click="$emit('toggle-view')"></button>
  <form @submit.prevent="$emit('filter', filter)">
   <input type="search" v-model="filter.txt">
   <select v-if="categories" name="category" v-model="filter.category">
    <option value="">select category</option>
    <option v-for="(category, idx) in categories" :key="idx" :value="category">
     {{ category }}
    </option>
   </select>
   <button>search</button>
  </form>
 </section>
</template>

<script>
export default {
 name: 'app-filter',
 emits: ['filter', 'toggle-view'],
 props: {
  icon: String,
  categories: {
   type: Array,
  },
 },
 data() {
  return {
   filter: {
    txt: '',
    category: '',
   }
  }
 },

}
</script>

<style>

</style>
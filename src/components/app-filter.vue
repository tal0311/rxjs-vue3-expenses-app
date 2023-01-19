<template>
 <section class="app-filter full">
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
 emits: ['filter'],
 props: {
  categories: {
   type: Array,
  },
 },
 created() {
  console.log('this.categories:', this.categories)
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
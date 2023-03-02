<template>
 <section class="app-filter grid full">
  <i class="view-btn icon" v-icon="icon" @click="$emit('toggle-view')"></i>
  <form class="flex" @submit.prevent="setFilter">
   <input type="search" v-model="filter.txt">
   <select v-if="categories" name="category" v-model="filter.category">
    <option value="">select category</option>
    <option v-for="(category, idx) in categories" :key="idx" :value="category">
     {{ category }}
    </option>
   </select>
   <button :class="['archive-btn', filter.isArchived && 'active']" @click="setArchived"
    @mouseover="$emit('archived-amount')" :data-amount="getMount" setArchive>Archived</button>
   <button>search</button>
  </form>
 </section>
</template>

<script>
// TODO: DEBOUNCE FILTER
export default {
 name: 'app-filter',
 emits: ['filter', 'toggle-view', 'archived-amount'],
 props: {
  icon: String,
  categories: Array,
  archivedAmount: Number
 },
 data() {
  return {
   filter: {
    txt: '',
    category: '',
    isArchived: false,
   }
  }
 },
 methods: {
  setFilter() {
   this.$emit('filter', { ...this.filter })
  },
  setArchived() {
   this.filter.isArchived = !this.filter.isArchived
   this.setFilter()
  }
 },
 computed: {
  getMount() {
   return `Total of ${this.archivedAmount} items in archive`

  }
 }


}
</script>

<style></style>
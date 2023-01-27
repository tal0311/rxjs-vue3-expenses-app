<template>
 <div class="table-headers row">
  <div @click="onSort('content')" class="table-header cell">
   <span v-trans="'name'">Name</span>
  </div>

  <div @click="onSort('amount')" class="table-header cell">
   <span>Amount</span>
  </div>
  <div @click="onSort('createdAt')" class="table-header cell">
   <span>Date</span>
  </div>
  <div class="table-header cell">
   <span>Actions</span>
  </div>
 </div>
</template>

<script>
export default {
 name: 'table-headers',
 emits: ['sort'],
 methods: {
  onSort(key) {
   console.log('key:', key)

   this.$emit('sort', key)
  }
 }
}
</script>

<style>

</style>
<template>
 <section v-if="items" class="ex-app">
  <app-filter :icon="setIcon" @filter="setFilter" :categories="categories" @toggle-view="setView" />
  <section :class="['ex-list', view]">
   <table-headers @sort="setSort" />
   <ex-preview v-for="item in items" :key="item.id" :item="item" @remove="removeEx" />
  </section>
  <RouterView />
 </section>
</template>

<script>
import tableHeaders from '../components/table-headers.vue'
import appFilter from '../components/app-filter.vue'
import exPreview from '../components/ex-preview.vue'
import { itemService } from './../services/item.service'
import { userService } from './../services/user.service'

import { map } from 'rxjs'
export default {
 name: 'ex-app',
 created() {
  itemService.query()
  userService.getSettings()
  this.filterSub =
   itemService.filter$.subscribe(this.setQueryParams)
  this.userSetSub = userService.userSettings$.pipe(
   map((userSettings) => userSettings.categories)
  ).subscribe(this.loadCategories)
  this.itemSub = itemService.ex$.subscribe(this.loadItems)
 },
 data() {
  return {
   itemSub: null,
   items: null,
   categories: null,
   view: 'table'
  }
 },
 computed: {
  setIcon() {
   console.log(this.view === 'table' ? 'grid' : 'row')
   return this.view === 'table' ? 'grid' : 'row'
  }
 },
 methods: {
  setFilter(filter) {
   itemService.setFilter({ ...filter })
  },
  setQueryParams(params) {
   this.$router.push({ query: params })
  },
  loadCategories(categories) {
   this.categories = categories
  },
  loadItems(items) {
   console.log('items', items);
   this.items = { ...items }
  },
  setView() {
   this.view = this.view === 'table' ? 'grid' : 'table'
  },
  setSort(key) {
   itemService.setSort(key)
  },
  removeEx(exId) {
   itemService.removeEx(exId)
  }


 },
 watch: {
  $route(to) {
   itemService.setFilter({ ...to.query })
  }
 },
 components: {
  exPreview,
  appFilter,
  tableHeaders
 },
 unmounted() {
  this.itemSub.unsubscribe()
  this.filterSub.unsubscribe()
  this.userSetSub.unsubscribe()
 },
}
</script>

<style>

</style>
<template>
 <section v-if="items" class="ex-app">
  <app-filter @filter="setFilter" :categories="categories" />
  <section class="ex-list table">
   <ex-preview v-for="item in items" :key="item.id" :item="item" />
  </section>
  <RouterView />
 </section>
</template>

<script>
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
   categories: null
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
   this.items = items
  }

 },
 watch: {
  $route(to) {
   itemService.setFilter({ ...to.query })
  }
 },
 components: {
  exPreview,
  appFilter
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
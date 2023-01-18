<template>
 <section v-if="items" class="ex-app">
  <h1>app</h1>
  <section class="ex-list table">
   <ex-preview v-for="item in items" :key="item.id" :item="item" />
  </section>
  <RouterView />
 </section>
</template>

<script>
import exPreview from '../components/ex-preview.vue'
import { itemService } from './../services/item.service.js'
export default {
 name: 'ex-app',
 created() {
  itemService.query()
  this.itemSub = itemService.ex$.subscribe((items) => {
   this.items = items
  })
 },
 data() {
  return {
   itemSub: null,
   items: null
  }
 },
 methods: {

 },
 components: {
  exPreview
 },
 unmounted() {
  this.itemSub.unsubscribe()
 },
}
</script>

<style>

</style>
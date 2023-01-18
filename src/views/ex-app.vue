<template>
 <section v-if="items" class="ex-app">
  <h1>app</h1>
  <ul>
   <li v-for="item in items" :key="item.id">
    {{ item.content }}
   </li>
  </ul>
  <RouterView />
 </section>
</template>

<script>
import { itemService } from './../services/item.service.js'
export default {
 name: 'ex-app',
 created() {
  itemService.query()
  itemService.ex$.subscribe((items) => {
   this.items = items
  })
 },
 data() {
  return {
   items: null
  }
 },
 methods: {

 }
}
</script>

<style>

</style>
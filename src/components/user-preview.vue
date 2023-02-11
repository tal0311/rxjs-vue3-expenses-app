<template>
 <section @click="SetModalType" class="user-preview">
  <p>{{ getUser }}</p>
 </section>
</template>

<script>
import { itemService } from '../services/item.service'
import { useClickLocation } from './../composables/useClickLocation'
export default {
 name: 'user-preview',
 data() {
  return {
   user: 'Tal Amit',
   isOpen: false
  }
 },
 methods: {
  getClickLocation() {
   const { x, y } = useClickLocation()
   console.log(x.value, y.value);
  },
  SetModalType({ target }) {
   const pos = target.getBoundingClientRect()
   console.log(pos)


   const cmpName = !this.isOpen ? 'userOptions' : ''
   itemService.setModalType(cmpName, pos)
  }
 },
 computed: {
  getUser() {
   const user = this.user.split(' ')
   return `${user[0].charAt(0).toUpperCase() + user[1].charAt(0).toUpperCase()}`
  }

 }
}
</script>

<style>

</style>
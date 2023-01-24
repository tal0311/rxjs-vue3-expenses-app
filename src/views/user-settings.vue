<template>
 <section class="user-settings grid">
  <button class="icon close-modal-btn" @click="closeModal" v-icon="'times'"></button>
  <h1 class="modal-header flex">User Settings</h1>
  <!-- <div class="modal-img">
   <img src="src/assets/img/pngwing.com.png" alt="">
  </div> -->
  <form class="modal-content flex" @submit.stop="updateUser">
   <label for="username">username</label>
   <input v-model="user.username" type="text" name="username">
   <label for="account-name">account name</label>
   <input v-model="user.accountName" type="text" name="account-name">
   <label for="account-number">
    account number
   </label>
   <input v-model="user.accountNumber" type="number" name="account-name">

   <label for="language">
    language
   </label>
   <select class="select" name="language" v-model="user.lang">
    <option value="en">English</option>
    <option value="he">עברית</option>
   </select>
  </form>
  <div class="modal-actions flex align-center">
   <button class="submit" @click="updateUser">save changes</button>
  </div>
 </section>
</template>

<script>
import { userService } from '../services/user.service'
export default {
 name: 'user-settings',
 created() {
  this.userSub = userService.userSettings$.subscribe(this.loadUser)
 },
 data() {
  return {
   user: null
  }
 },
 methods: {
  closeModal() {
   console.log('this.$router:', this.$router)
   this.$router.go(-1)
  },
  loadUser(user) {
   this.user = { ...user }
  },
  updateUser() {
   userService.updateUser({ ...this.user })
  }
 },
 unmounted() {
  this.userSub.unsubscribe()
 }
}
</script>

<style>

</style>
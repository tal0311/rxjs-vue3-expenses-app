<template>
 <section class="user-settings grid">
  <button class="icon close-modal-btn" @click="closeModal" v-icon="'times'"></button>
  <h1 class="modal-header flex" v-trans="'user-settings'">User Settings</h1>
  <!-- <div class="modal-img">
   <img src="src/assets/img/pngwing.com.png" alt="">
  </div> -->
  <form class="modal-content flex" @submit.stop="updateUser">
   <label for="username" v-trans="'username'">username</label>
   <input v-model="user.username" type="text" name="username">
   <label for="account-name" v-trans="'account-name'">account name</label>
   <input v-model="user.accountName" type="text" name="account-name">
   <label for="account-number" v-trans="'account-number'">
    account number
   </label>
   <input v-model="user.accountNumber" type="number" name="account-name">

   <label for="language" v-trans="'language'">
    language
   </label>
   <select class="select" name="language" v-model="user.lang">
    <option value="en">English</option>
    <option value="he">עברית</option>
   </select>
  </form>
  <div class="modal-actions flex align-center">
   <button class="submit" @click="updateUser" v-trans="'user-set-btn'">save changes</button>
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
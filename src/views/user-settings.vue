<template>
 <section class="user-settings grid">
  <button class="icon close-modal-btn" @click="closeModal" v-icon="'times'"></button>
  <h1 class="modal-header flex">user-settings</h1>
  <!-- <div class="modal-img">
   <img src="src/assets/img/pngwing.com.png" alt="">
  </div> -->
  <form class="modal-content flex">
   <label for="username">username</label>
   <input type="text" name="username">
   <label for="account-name">account name</label>
   <input type="text" name="account-name">
   <label for="account-number">
    account number
   </label>
   <input type="number" name="account-name">

   <label for="language">
    language
   </label>
   <select name="language" id="">
    <option value="en">English</option>
    <option value="he">עברית</option>
   </select>
  </form>
  <div class="modal-actions flex align-center">
   <button>save changes</button>
  </div>
 </section>
</template>

<script>
export default {
 name: 'user-settings',
 methods: {
  closeModal() {
   console.log('this.$router:', this.$router)
   this.$router.go(-1)
  },
 }
}
</script>

<style>

</style>
<template>
 <section class="user-options">
  <p @click="setModal">Settings</p>
  <p>Profile</p>
  <p>Activities</p>
  <p>Log out</p>
 </section>
</template>

<script>

// FIXME: FIX OPEN USER SETTINGS MODAL
import { itemService } from '../../services/item.service';
export default {
 name: 'user-options',
 methods: {
  setModal() {
   itemService.setModalType('userSettings')
  }
 }
}
</script>
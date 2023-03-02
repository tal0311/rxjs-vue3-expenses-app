<template>
  <section ref="el" @click="SetModalType" class="user-preview">
    <p>{{ getUser }}</p>
  </section>
</template>

<script >
import { itemService } from '../services/item.service'


export default {
  setup() {

  },
  name: 'user-preview',
  data() {
    return {
      user: 'Tal Amit',

    }
  },
  methods: {
    SetModalType() {
      itemService.setModalType('UserOptions')
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

<style></style>
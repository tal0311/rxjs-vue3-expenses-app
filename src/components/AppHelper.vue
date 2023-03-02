<template>
  <section @click="toggle" :class="[isOpen && 'open', isNotified && 'notify', 'app-helper']">
    <button class="icon" v-icon="'help'"></button>
    <section v-if="isOpen" class="content">
      <h3>{{ header }}</h3>
      <p>{{ content }}</p>
    </section>
  </section>
</template>

<script>
import { getHelperContent } from './../services/helper.service.js'
export default {
  name: 'app-helper',
  data() {
    return {
      isOpen: false,
      isNotified: false,
      content: '',
      header: ''
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.isNotified = false;
    }
  },
  watch: {
    $route: function (to, from) {
      const { content, header } = getHelperContent(to)
      this.content = content;
      this.header = header;
      this.isNotified = true;

    },
    deep: true
  }
}
</script>

<style>

</style>
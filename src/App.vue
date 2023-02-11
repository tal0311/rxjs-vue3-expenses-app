<template>
  <section class="full">
    <appHeader></appHeader>
    <main class="main-container full">
      <RouterView></RouterView>
    </main>
  </section>
  <app-helper></app-helper>
  <app-modal :cmp="modalCmp"></app-modal>
</template>

<script>
import appHelper from './components/app-helper.vue';
import appHeader from './components/app-header.vue';
import { itemService } from './services/item.service';
export default {
  name: 'app',
  created() {
    this.modalSub = itemService.modal$.subscribe(this.setModal)
  },
  data() {
    return {
      modalCmp: ''
    }
  },
  methods: {
    setModal(type) {
      this.modalCmp = type
    },

  },
  components: {
    appHeader,
    appHelper,
  }
}
</script>

<style>

</style>
<template>
  <section class="full">
    <appHeader @setModal="setModalType"></appHeader>
    <main class="main-container full">
      <RouterView></RouterView>
    </main>
  </section>
  <app-helper></app-helper>
  <app-modal :cmp="modalCmpInfo"></app-modal>
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
      modalCmpInfo: null
    }
  },
  methods: {
    setModal(modalInfo) {
      this.modalCmpInfo = modalInfo
    },
    setModalType(type, pos = null) {
      itemService.setModalType(type, pos)
    }

  },
  components: {
    appHeader,
    appHelper,
  },
  unmounted() {
    this.modalSub.subscribe()
  }
}
</script>

<style>

</style>
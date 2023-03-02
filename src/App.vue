<template>
  <section class="full">
    <AppHeader></AppHeader>
    <main class="main-container full">
      <RouterView></RouterView>
    </main>
  </section>
  <AppHelper></AppHelper>
  <AppModal v-if="modalCmpInfo" :cmp="modalCmpInfo"></AppModal>
</template>

<script>
import AppHelper from './components/AppHelper.vue';
import AppHeader from './components/AppHeader.vue';
import { itemService } from './services/item.service';
export default {
  name: 'app',
  created() {
    // console.log('this.$router:', this.$router.options)
    this.modalSub = itemService.modal$.subscribe(this.setModal)
  },
  data() {
    return {
      modalCmpInfo: null
    }
  },
  methods: {
    setModal(modalInfo) {
      console.log('modalInfo:', modalInfo)
      this.modalCmpInfo = modalInfo
    },
    // setModalType(type, pos = null) {
    //   itemService.setModalType(type, pos)
    // }

  },
  components: {
    AppHeader,
    AppHelper,

  },
  unmounted() {
    this.modalSub.subscribe()
  }
}
</script>

<style></style>
<template>
  <!-- <div class="logo"></div> -->
  <section class="full">
    <AppHeader />
    <main class="main-container full">
      <RouterView />
    </main>
  </section>
  <AppHelper />
  <AppModal :cmp="modalCmp" />
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
      modalCmp: null
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
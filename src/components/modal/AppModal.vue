<template>
  <section v-if="modalType" class="modal-container">
    <component :is="modalType"></component>
  </section>
</template>

<script >
import UserOptions from './UserOptions.vue';
import ExEdit from './../ExEdit.vue';
import UserSettings from './UserSettings.vue';
import { itemService } from '../../services/item.service';

export default {
  name: 'AppModal',
  created() {
    this.modalSub = itemService.modal$.subscribe(this.setModal)
  },
  data() {
    return {
      subModal: null,
      modalType: null
    }
  },
  methods: {
    setModal(modalType) {
      console.log(':', modalType)
      this.modalType = modalType
    }
  },
  components: {
    UserOptions,
    ExEdit,
    UserSettings
  },
  unmounted() {
    this.modalSub.unsubscribe()
  }
}



</script>

<style></style>
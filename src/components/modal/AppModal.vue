<template>
  <section v-clickOutside v-if="modalType" class="modal-container">
    <component :is="modalType"></component>
  </section>
</template>

<script >
import UserOptions from './user-options.vue';
import ExEdit from '../ex-edit.vue';
import UserSettings from './user-settings.vue';
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
<template>
  <article :class="['ex-preview', item.category]" :style="borderStyle">
    <div class="cell" :data-title="item.category">
      <p>{{ item.content }}</p>
    </div>
    <div class="cell">
      <p>{{ item.amount }}</p>
    </div>
    <div class="cell">
      <p>{{ getDate }}</p>
    </div>
    <div class="cell">
      <div :class="['actions-container flex', isActions && 'relative']">
        <i class="icon" v-icon="'options'" v-if="!isActions" @click="isActions = !isActions">actions</i>
        <section v-else :style="getStyle">
          <i v-for="action in actions" :class="action.icon" @click="onAction(action.icon, item.id)" v-icon="action.icon"
            :data-title="action.title" :key="action.icon"></i>
        </section>
      </div>
    </div>
  </article>
</template>

// TODO:CLOSE ACTIONS AFTER CLICK
<script>
import { setCatColor } from '../services/category.service';
export default {
  name: 'ex-preview',
  emits: ['action'],
  props: {
    item: Object
  },
  data() {
    return {
      isActions: false,
      actions: [
        { icon: 'edit', title: 'Edit item' },
        { icon: 'archive', title: 'Archive item' },
        { icon: 'trash', title: 'Remove item' },
      ]
    }
  },
  methods: {
    onAction(type, itemId) {
      this.isActions = !this.isActions
      console.log('type:', type)
      console.log('itemIdd:', itemId)
      this.$emit('action', { type, itemId })
    }
  },
  computed: {
    getDate() {
      return new Date(this.item.createdAt).toLocaleDateString()
    },
    borderStyle() {
      return {
        'border-Left': `5px solid ${setCatColor(this.item.category)}`
      }
    },
    getStyle() {
      if (this.isActions) {
        return {
          'position': 'absolute',
          'display': 'flex',
          'right': '0',
          'transform': 'translateY(-60%)',

        }
      }
    }
  }
}

</script>

<style></style>
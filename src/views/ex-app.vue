<template>
  <section v-if="items" class="ex-app">
    <AppFilter :icon="setIcon" :archivedAmount="archivedAmount" @archived-amount="getArchivedAmount" @filter="setFilter"
      :categories="userSettings.categories" @toggle-view="setView" />
    <section :class="['ex-list', view]">
      <table-headers :lang="userSettings.lang" @sort="setSort" />
      <ex-preview v-for="item in items" :key="item.id" :item="item" @action="onAction" />
    </section>
  </section>
</template>

<script>
import tableHeaders from '../components/table-headers.vue'
import AppFilter from '../components/AppFilter.vue'
import exPreview from '../components/ex-preview.vue'
import { itemService } from './../services/item.service'
import { userService } from './../services/user.service'


export default {
  name: 'ex-app',
  created() {
    itemService.query()
    userService.getSettings()

    this.filterSub =
      itemService.filter$.subscribe(this.setQueryParams)
    this.userSetSub = userService.userSettings$.subscribe(this.loadUserSettings)
    this.itemSub = itemService.ex$.subscribe(this.loadItems)
  },
  data() {
    return {
      itemSub: null,
      items: null,
      isArchived: false,
      view: 'table',
      userSettings: null,
      archivedAmount: null,
      modalCmp: ''
    }
  },
  computed: {
    setIcon() {
      return this.view === 'table' ? 'grid' : 'row'
    }
  },
  methods: {
    setFilter(filter) {
      itemService.setFilter({ ...filter })
    },
    setQueryParams(params) {
      this.$router.push({ query: params })
    },
    loadUserSettings(settings) {
      this.userSettings = settings
    },
    loadItems(items) {
      console.log(items)
      this.items = { ...items }
    },
    setView() {
      this.view = this.view === 'table' ? 'grid' : 'table'
    },
    setSort(key) {
      itemService.setSort(key)
    },
    removeEx(exId) {
      itemService.removeEx(exId)
    },
    updateItem(itemId, key, value) {
      itemService.updateEx(itemId, key, value)
    },
    getArchivedAmount() {
      this.archivedAmount = itemService.getArchivedAmount()
    },
    onAction({ type, itemId }) {
      switch (type) {
        case 'remove':
          this.removeEx(itemId)
          break;
        case 'edit':
          itemService.setModalType('exEdit')
          break;
        case 'archive':
          // console.log('type:', type)
          this.updateItem(itemId, 'isArchived')
          break;

        default:
          break;
      }
    },
    setModalType(type) {
      console.log('type:', type)
      itemService.setModalType(type)
    }


  },
  watch: {
    $route(to) {
      const isArchived = to.query.isArchived === 'true' ? true : false
      itemService.setFilter({ ...to.query, isArchived })
    }
  },
  components: {
    exPreview,
    appFilter,
    tableHeaders
  },
  unmounted() {
    this.itemSub.unsubscribe()
    this.filterSub.unsubscribe()
    this.userSetSub.unsubscribe()
  },
}
</script>

<style></style>
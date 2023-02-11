<template>
 <section v-clickOutside="coseModal" class="edit-ex">
  <h1>edit</h1>
 </section>
</template>

<script>
export default {
 name: 'edit',
 methods: {
  coseModal() {
   console.log('closing')
  }
 }
}
</script>

<style>

</style>
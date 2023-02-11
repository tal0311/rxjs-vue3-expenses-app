import { ref, onMounted, onUnmounted } from 'vue'

export const useClickLocation = () => {
 const x = ref(0)
 const y = ref(0)

 const updateLocation = (event) => {
  x.value = event.clientX
  y.value = event.clientY
 }

 onMounted(() => {
  document.body.addEventListener('click', updateLocation)
 })

 onUnmounted(() => {
  document.body.removeEventListener('click', updateLocation)
 })

 return { x, y }
}

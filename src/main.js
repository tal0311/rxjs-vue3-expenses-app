import { createApp } from 'vue'
import { router } from './router'
import { icon, trans, clickOutside } from './directives'
import './assets/styles/main.scss'
import App from './App.vue'

import AppModal from './components/modal/AppModal.vue'
const app = createApp(App)
app.use(router)

app.directive('icon', icon)
app.directive('trans', trans)
app.directive('clickOutside', clickOutside)

app.component('AppModal', AppModal)
app.mount('#app')


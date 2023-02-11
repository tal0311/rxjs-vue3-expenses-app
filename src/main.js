import { createApp } from 'vue'
import { router } from './router'
import { icon, trans, clickOutside } from './directives'
import './assets/styles/main.scss'
import App from './App.vue'

import appModal from './components/modal/app-modal.vue'
const app = createApp(App)
app.use(router)

app.directive('icon', icon)
app.directive('trans', trans)
app.directive('clickOutside', clickOutside)

app.component('app-modal', appModal)
app.mount('#app')


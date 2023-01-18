import { createApp } from 'vue'
import { router } from './router'
import { icon } from './directives'
import './assets/styles/main.scss'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.directive('icon', icon)
app.mount('#app')


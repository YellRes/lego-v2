import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'

createApp(App).use(createPinia()).mount('#app')

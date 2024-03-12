import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import routes from '@/router/index'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'

createApp(App)
  .use(createPinia())
  .use(
    createRouter({
      routes,
      history: createWebHashHistory()
    })
  )
  .mount('#app')

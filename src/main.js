import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './routes/router'
import { VueQueryPlugin } from "vue-query";
import { createPinia } from 'pinia'

createApp(App).use(router).use(VueQueryPlugin).use(createPinia()).mount('#app')

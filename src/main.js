import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './routes/router'
import { VueQueryPlugin } from "vue-query";

createApp(App).use(router).use(VueQueryPlugin).mount('#app')

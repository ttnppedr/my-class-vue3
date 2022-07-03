import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/components/LogIn.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'LogIn', component: LogIn},
    {path: '/:pathMatch(.*)*', redirect: {name: 'LogIn'}}
  ]
})
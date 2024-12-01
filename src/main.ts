import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: () => import('./components/HelloWorld.vue') },
    { path: '/hello', component: () => import('./components/HelloWorld.vue') },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')


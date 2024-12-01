import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')


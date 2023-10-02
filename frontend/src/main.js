import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import SignupPage from './components/SignupPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/signup', component: SignupPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})


const app = createApp(App)

app.use(router) 

app.mount('#app')
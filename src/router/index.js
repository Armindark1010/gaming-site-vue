import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Portfolio from '../views/Portfolio.vue'
import games from '../views/games.vue'
import Contactus from '../views/Contactus.vue'
// import games from '../views/games.vue'
import games_about from '../views/games_about.vue'
import screenshots from '../views/screenshots.vue'
import test from '../views/test.vue'
import login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/games',
    name: 'games',
    component: games
  },
  {
    path: '/Contact-us',
    name: 'Contact-us',
    component: Contactus
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {

    path: '/games/:slug',
    
    name: 'games_about',
    
    component: games_about
    
    },
  {

    path: '/games/:slug/screenshots',
    
    name: 'screenshots',
    
    component: screenshots
    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import InviteView from '../views/InviteView.vue'
import VerifyView from '../views/VerifyView.vue'
import RsvpView from '../views/RsvpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/invite/:id',
      name: 'invite',
      component: InviteView
    },
    {
      path: '/verify/:id',
      name: 'verify',
      component: VerifyView
    },
    {
      path: '/rsvp/:id',
      name: 'rsvp',
      component: RsvpView
    }
  ]
})

export default router

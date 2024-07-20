// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import CustomizePage from '../views/CustomizePage.vue';
import ThankYouPage from '../views/ThankYouPage.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/Customize',
    name: 'Customize',
    component: CustomizePage
  },
  {
    path: '/thank-You',
    name: 'ThankYou',
    component: ThankYouPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

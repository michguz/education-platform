import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Programs from './components/Programs.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/programs', component: Programs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
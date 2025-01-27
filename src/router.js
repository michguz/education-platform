import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import Programs from './components/Programs.vue';
import TextEditor from './components/TextEditor.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/programs', component: Programs },
  { path: '/texteditor', component: TextEditor },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
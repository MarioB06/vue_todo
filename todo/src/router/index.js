import { createRouter, createWebHistory } from 'vue-router';
import Task from '@/components/Task.vue'; // Importiere die Task-Komponente
import HomeView from '@/views/HomeView.vue';
import TaskView from '@/views/TaskView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/task/:id',
    name: 'task',
    component: TaskView,
    props:true 
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

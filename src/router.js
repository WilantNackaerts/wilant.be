/* eslint-disable linebreak-style */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: () => ({
      path: '/home',
    }),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

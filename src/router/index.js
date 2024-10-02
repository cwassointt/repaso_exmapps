import { createRouter, createWebHistory } from 'vue-router';
import Home from '../public/pages/home.component.vue';
import ExaminerPerformanceOverview from '../nursing/pages/examiner-performance-overview.component.vue';
import PageNotFound from '../public/pages/page-not-found.component.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/nursing/examiner-performance-overview', component: ExaminerPerformanceOverview },
    { path: '/:pathMatch(.*)*', component: PageNotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'index',
        component:() => import('./components/index.vue')
    },
    {
        path: '/study',
        component:() => import('./components/study/index.vue'),
        children : [
            {
                path: '/',
                component:() => import('./components/study/basic.vue')
            },
            {
                path: 'php',
                component:() => import('./components/study/php.vue')
            },
            {
                path: 'html',
                component:() => import('./components/study/html.vue')
            },
            {
                path: 'javascript',
                component:() => import('./components/study/javascript.vue')
            },
        ]
    }
];

const router = new Router({
    mode: 'history',
    routes : routes,
    linkActiveClass: 'active'
});

export default router;
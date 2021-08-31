import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'index',
        component:() => import('./components/home.vue'),
    },
    {
        path: '/study',
        component:() => import('./components/study/index.vue'),
        children : [
            {
                path: '/',
                name: 'study.basic',
                component:() => import('./components/study/basic.vue')
            },
            {
                path: 'php',
                name: 'study.php',
                component:() => import('./components/study/php.vue')
            },
            {
                path: 'html',
                name: 'study.html',
                component:() => import('./components/study/html.vue')
            },
            {
                path: 'javascript',
                name: 'study.javascript',
                component:() => import('./components/study/javascript.vue')
            },
            {
                path: 'study/*',
                redirect: {name : 'study.basic'}
            }
        ]
    },
    {
        path: '/*',
        redirect: {name : 'index'}
    }
];

const router = new Router({
    mode: 'history',
    routes : routes,
    linkActiveClass: 'active'
});

export default router;
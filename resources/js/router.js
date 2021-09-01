import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component:() => import(/* webpackChunkName: "home" */'./components/home.vue'),
    },
    {
        path: '/study',
        component:() => import(/* webpackChunkName: "study" */'./components/study/index.vue'),
        children : [
            {
                path: '/',
                name: 'study.basic',
                component:() => import(/* webpackChunkName: "study.basic" */'./components/study/basic.vue')
            },
            {
                path: 'php',
                name: 'study.php',
                component:() => import(/* webpackChunkName: "study.php" */'./components/study/php.vue')
            },
            {
                path: 'html',
                name: 'study.html',
                component:() => import(/* webpackChunkName: "study.html" */'./components/study/html.vue')
            },
            {
                path: 'javascript',
                name: 'study.javascript',
                component:() => import(/* webpackChunkName: "study.javascript" */'./components/study/javascript.vue')
            },
            {
                path: '*',
                redirect: {name : 'study.basic'}
            }
        ]
    },
    {
        path: '/community',
        name:'community',
        component: () => import(/* webpackChunkName: "community" */'./components/community/index.vue'),
        children: [
            {
                path: 'free',
                name: 'community.free',
                component: () => import(/* webpackChunkName: "community.free" */'./components/community/free.vue')
            },
            {
                path: 'qna',
                name: 'community.qna',
                component: () => import(/* webpackChunkName: "community.qna" */'./components/community/qna.vue')
            },
            {
                path: 'notice',
                name: 'community.notice',
                component: () => import(/* webpackChunkName: "community.notice" */'./components/community/notice.vue')
            },
            {
                path : '*',
                redirect: {name : 'community'}
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
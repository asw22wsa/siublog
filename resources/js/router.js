Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component:() => import('./components/view/ExampleComponent.vue')
    },
    {
        path: '/study',
        component:() => import('./components/view/study/index.vue'),
        children : [
            {
                path: '/',
                component:() => import('./components/view/study/basic.vue')
            },
            {
                path: 'php',
                component:() => import('./components/view/study/php.vue')
            },
            {
                path: 'html',
                component:() => import('./components/view/study/html.vue')
            },
            {
                path: 'javascript',
                component:() => import('./components/view/study/javascript.vue')
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
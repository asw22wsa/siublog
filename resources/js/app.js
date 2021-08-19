import Vue from 'vue';
import App from './components/view/index.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

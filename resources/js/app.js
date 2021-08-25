import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import store from './store'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

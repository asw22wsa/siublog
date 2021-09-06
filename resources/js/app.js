import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import VueCookies from "vue-cookies"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

Vue.use(VueCookies);
Vue.$cookies.config("1d") // expire 1일 (global 설정)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

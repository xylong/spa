require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import {routes} from './routes';
import StoreData from './stores/store';
import {initialize} from './helpers/general';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import App from './pages/App';


Vue.use(Router);
const router = new Router({
    routes,
    mode: 'history'
});


Vue.use(Vuex);
const store = new Vuex.Store(StoreData);


initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

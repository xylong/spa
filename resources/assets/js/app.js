require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import {routes} from './routes';
import StoreData from './stores/store';
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


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.currentUser;

    if (requiresAuth && !currentUser) {
        next('login');
    } else if (to.path === '/login' && currentUser) {
        next('/');
    } else {
        next();
    }
});

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

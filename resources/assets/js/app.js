require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import router from './routes';
import StoreData from './stores/store';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './pages/App';

Vue.use(Vuex);
// Vue.use(ElementUI);
const store = new Vuex.Store(StoreData);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

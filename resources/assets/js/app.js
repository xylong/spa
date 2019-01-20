require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './pages/App';

Vue.use(Vuex);
Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});

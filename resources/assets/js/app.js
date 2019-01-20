require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import App from './pages/App';

Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});

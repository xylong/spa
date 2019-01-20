import Router from 'vue-router';

import Home from '../pages/Home';
import Goods from '../pages/Goods';

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/goods',
            component: Goods
        }
    ]
});

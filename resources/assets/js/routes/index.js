import Home from '../pages/Home';
import Login from '../components/auth/Login';


export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    }
];


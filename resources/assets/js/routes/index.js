import Home from '../pages/Home';
import Login from '../components/auth/Login';
import PostsMain from '../components/posts/Main';
import PostsList from '../components/posts/List';


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
    },
    {
        path: '/posts',
        component: PostsMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: PostsList
            },
            // {
            //     path: 'new',
            //     compoent: NewCustomers
            // }, {
            //     path: ':id',
            //     compoent: Customer
            // }
        ]
    }
];


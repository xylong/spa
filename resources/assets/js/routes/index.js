import Home from '../pages/Home';
import Login from '../components/auth/Login';
import PostsMain from '../components/posts/Main';
import PostsList from '../components/posts/List';
import PostsCreate from '../components/posts/Create';
import PostView from '../components/posts/View';


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
            {
                path: 'create',
                component: PostsCreate
            },
            {
                path: ':id',
                component: PostView
            }
        ]
    }
];


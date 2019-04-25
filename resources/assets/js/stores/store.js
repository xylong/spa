import {getLocalUser} from '../helpers/auth';

const user = getLocalUser();

export default {
    state: {
        title: '首页',
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        posts: []
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem('user', JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.auth_error = payload;
            state.loading = false;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updatePosts(state, payload) {
            state.posts = payload;
        }
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        posts(state) {
            return state.posts;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        getPosts(context) {
            axios.get('/api/posts', {
                headers: {
                    'Authorization': `Bearer ${context.state.currentUser.token}`
                }
            })
                .then((response) => {
                    context.commit('updatePosts', response.data.posts);
                })
        }
    }
}

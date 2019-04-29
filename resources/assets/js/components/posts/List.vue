<template>
    <div class="container">
        <div class="btn-wrapper">
            <router-link to="/posts/create" class="btn btn-primary btn-sm">New</router-link>
        </div>
        <table class="table">
            <thead>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
            </thead>
            <tbody>
            <template v-if="!posts">
                <tr>
                    <td colspan="4" class="text-center">no posts avaliable</td>
                </tr>
            </template>
            <template v-else>
                <tr v-for="post in posts.data" :key="post.id">
                    <td v-text="post.title"></td>
                    <td v-text="post.user.name"></td>
                    <td>
                        <router-link :to="`/posts/${post.id}`">view</router-link>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'List',

        computed: {
            posts() {
                return this.$store.getters.posts;
            }
        },

        mounted() {
            if (this.posts.data) {
                return;
            }
            this.$store.dispatch('getPosts');
        }
    }
</script>

<style scoped>
    .btn-wrapper {
        text-align: right;
        margin-bottom: 20px;
    }
</style>

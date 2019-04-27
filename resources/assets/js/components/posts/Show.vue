<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 topic-content">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <h1 class="text-center" v-text="post.title"></h1>
                        <div class="article-meta text-center" v-text="post.created_at"></div>
                        <div class="topic-body" v-html="post.content"></div>
                    </div>
                </div>
                <router-link to="/posts">back to all</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Show",
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        },
        data() {
            return {
                post: null
            }
        },
        created() {
            axios.get(`/api/posts/${this.$route.params.id}`, {
                headers: {
                    'Authorization': `Bearer ${this.currentUser.token}`
                }
            }).then((response) => {
                this.post = response.data.post;
            })
        }
    }
</script>

<style scoped>

</style>

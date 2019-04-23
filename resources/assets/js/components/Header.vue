<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link class="navbar-brand" to="/">SPA</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportContent">
                <ul class="navbar-nav ml-auto">
                    <a href="/login" class="nav-link">Login</a>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>

</style>

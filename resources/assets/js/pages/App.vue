<template>
    <div id="main">
        <Header/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header';

    export default {
        name: 'App',

        components: {
            Header
        },

        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">首页</div>

                    <div class="card-body">
                        aaa
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',

        computed: {
            title() {
                return this.$store.getters.welcome;
            }
        },
    }
</script>

<style scoped>

</style>

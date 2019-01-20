<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                menu:[
                    {
                        url:'/',
                        name:'首页'
                    },
                    {
                        url:'/goods',
                        name:'购物车'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>

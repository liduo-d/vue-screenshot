<template>
    <div id="app">
        <button @click="changeRouter">路由切换</button>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        methods: {
            changeRouter() {
                let path = '';
                if (this.$route.path.indexOf('02') === -1) {
                    path = 'test02'
                } else {
                    path = 'test01'
                }
                this.$router.push({path})
            }
        }
    }
</script>

<style>
</style>

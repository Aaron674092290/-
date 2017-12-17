<template>
    <main>
        
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        data(){
            return {
                value1:""
            }
        },
        created(){
            /* 测试 */
            this.$http.get(this.$api.islogin).then(rsp=>console.log(rsp.data.code));
        }
    }
</script>

<style scoped>

</style>
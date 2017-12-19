<template>
        <el-container>
            <el-aside width="200px">
                <!-- 公共左侧 -->
                <app-aside></app-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 公共头部 -->
                    <app-header></app-header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
</template>

<script>
import AsideComponent from "./frame/Aside.vue";
import HeaderComponent from "./frame/Header.vue";
export default {
    components:{
        'app-aside':AsideComponent,
        'app-header':HeaderComponent
    },
    /* 登录才可以跳到主页 第一种文字 */
    // beforeCreate(){
    //     if(!localStorage.getItem("user")){
    //         this.$router.push({name:"l"});
    //     }
    // },
};
</script>

<style scoped lang="less">
.el-container{
    height: 100%;
}
.el-header {
  background-color: #33475a;
  color: #333;
  text-align: right;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #fff;
  color: #333;
}
</style>
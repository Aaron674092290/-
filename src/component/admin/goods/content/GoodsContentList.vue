<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
         </el-breadcrumb>
         <!-- 按钮 -->
         <el-button size="small">添加</el-button>
         <el-button size="small">全选</el-button>
         <el-button size="small">删除</el-button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
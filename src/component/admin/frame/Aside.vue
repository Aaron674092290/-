<template>
    <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2c3e50"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu v-for="item in menuList" :key="item.title" :index="item.title">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.title}}</span>
        </template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
              {{subItem.title}}
          </el-menu-item>
         
      </el-submenu>
      
    </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menuList:[
                {
                    title:"学员问题汇总",
                    children:[
                        {title:"内容管理",path:"/"},
                        {title:"类别管理",path:"/"},
                        {title:"评论管理",path:"/"},
                    ]
                },
                {
                    title:"前端常用功能",
                    children:[
                        {title:"内容管理",path:"/"},
                        {title:"类别管理",path:"/"},
                        {title:"评论管理",path:"/"},
                    ]
                },
                {
                    title:"重难点专区",
                    children:[
                        {title:"内容管理",path:"/"},
                        {title:"类别管理",path:"/"},
                        {title:"评论管理",path:"/"},
                    ]
                },
                {
                    title:"资源下载",
                    children:[
                        {title:"内容管理",path:"/"},
                        {title:"类别管理",path:"/"},
                        {title:"评论管理",path:"/"},
                    ]
                },
                {
                    title:"购物商城",
                    children:[
                        {title:"内容管理",path:"/"},
                        {title:"类别管理",path:"/"},
                        {title:"评论管理",path:"/"},
                    ]
                },
                {
                    title:"订单管理",
                    children:[
                        {title:"订单列表",path:"/"},
                        
                    ]
                },
            ]
        }
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
.aside {
  height: 100%;
  .el-menu {
    height: 100%;
    text-align: left;
  }
}
</style>
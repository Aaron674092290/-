<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
         </el-breadcrumb>
         <section class="list_util">
                    <!-- 按钮 -->
                <div class="list_util_btns">
                        <el-button size="small" type="primary" plain icon="el-icon-circle-plus-outline">添加</el-button>
                        <el-button size="small" type="primary" plain icon="el-icon-check">全选</el-button>
                        <el-button size="small" type="primary" plain icon="el-icon-delete">删除</el-button>
                </div>
                <!-- 索搜框 -->
                <div class="list_util_search">
                    <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" @blur="getTableList" v-model="query.searchvalue"></el-input>
                </div>
         </section>
         <div class="list_table">
               <el-table ref="multipleTable" border :data="tableList" tooltip-effect="dark" style="width: 100%" stripe height="400">
                   <!-- 多选框 -->
                    <el-table-column type="selection" width="40"></el-table-column>
                    <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="categoryname" label="所属类别" width="120" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="stock_quantity" label="库存" width="120" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="market_price" label="市场价" width="120" show-overflow-tooltip> </el-table-column>
                    <el-table-column prop="sell_price"  label="销售价" width="120"  show-overflow-tooltip>  </el-table-column>

                    <el-table-column label="属性" width="120" show-overflow-tooltip> 
                        <template slot-scope="scope">
                            <i :class="['el-icon-picture-outline',scope.row.is_top?'active':'']"></i>
                            <i :class="['el-icon-upload',scope.row.is_hot?'active':'']"></i>
                            <i :class="['el-icon-star-on',scope.row.is_slide?'active':'']"></i>
                            <!-- <i :class="['el-icon-upload2', scope.row.is_top? 'active': '']"></i> -->
                    <!-- <i :class="['el-icon-phone-outline', scope.row.is_hot? 'active': '']"></i>
                    <i :class="['el-icon-picture', scope.row.is_slide? 'active': '']"></i> -->
                        </template>
                    </el-table-column>
                    <el-table-column  label="操作"  width="120" show-overflow-tooltip> 
                        <template slot-scope="scope">
                            <router-link :to="{name:'gcte',params:{id:scope.row.id}}">修改</router-link>
                        </template>
                    </el-table-column>
                </el-table>
         </div>
         <!-- 分页功能 -->
         <div class="block">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="query.pageIndex"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="query.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalcount"
              
              >
            </el-pagination>
       </div>
    </div>
</template>

<script>
export default {
    
  data() {
    return {
        query:{
            pageIndex:1,
            pageSize:10,
            searchvalue:""
        },
        totalcount:0,
      tableList: [],
    };
  },
  methods:{
    

      getTableList(){
          this.$http.get(this.$api.gsList,{params:this.query})
              .then(rsp=>{
                  this.query.pageIndex=rsp.data.pageIndex;
                  this.query.pageSize=rsp.data.pageSize;
                  this.totalcount=rsp.data.totalcount;
                  this.tableList=rsp.data.message;
              })
      },
      /* 每页数量变化时触发 */
      handleSizeChange(pageSize){
          this.query.pageSize=pageSize;
        //   this.getTableList();
      },
      /* 页码变化时触发 */
      handleCurrentChange(pageIndex){
          this.query.pageIndex=pageIndex;
          this.getTableList();

      }
  },
  created(){
      /* 页面一加载就触发 */
      this.getTableList();
  }
};
</script>

<style lang="less">
.list {
  .el-breadcrumb {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    .el-breadcrumb__item {
      color: #ccc;
      .el-breadcrumb__inner {
        color: #333;
      }
    }
    span{
            color:#444
        }
  }
  .block {
    margin-top:20px;
    text-align: center;
  }
  &_util {
    overflow: hidden;
    padding: 10px 0;
    line-height: 60px;
    &_btns {
        float: left;
    }
    &_search {
      float: right;
    }
  }
  &_table{
      
      text-align: center;
      // 字体默认为浅灰
      [class^=el-icon-] {
         color: rgba(0, 0, 0, 0.3);
         &.active {
            color: #000;
         }
      }
      thead{
         
          >tr{
              background-color: rgba(51, 71, 90, 0.86);;
              color:#fff;
              >th{
                   text-align: center;
              }
          }
      }
      a{
        color:#598bbf;
        }
  }
}
</style>
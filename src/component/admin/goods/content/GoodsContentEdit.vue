<template>
    <div class="edit">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品编辑</el-breadcrumb-item>
         </el-breadcrumb>
         <section class="edit_box">
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="edit_form">
                    <el-form-item label="内容标题" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="副标题" prop="sub_title">
                        <el-input v-model="ruleForm.sub_title"></el-input>
                    </el-form-item>
                    <el-form-item label="所属类别" prop="category_id">
                        <el-select v-model="ruleForm.category_id"  placeholder="请选择活动区域">
                        <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id">
                            <span v-for="i in (item.class_layer-1)" :key="i">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span v-if="item.class_layer!=1">|.</span>
                            <span>{{item.title}}</span>
                        </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否发布" prop="status">
                        <el-switch v-model="ruleForm.status"></el-switch>                   
                    </el-form-item>
                    <el-form-item label="推荐类型" prop="delivery">
                        <el-switch v-model="ruleForm.is_slide"></el-switch>
                        <el-switch v-model="ruleForm.is_top"></el-switch>
                        <el-switch v-model="ruleForm.is_hot"></el-switch>
                    </el-form-item>
                    <el-form-item label="上传封面" prop="type">
                            <el-upload 
                                class="upload-demo" 
                                action="https://jsonplaceholder.typicode.com/posts/" 
                                :on-preview="handlePreview" :on-remove="handleRemove"
                                :file-list="fileList2" 
                                list-type="picture">
                                <el-button size="small" type="primary">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                    </el-form-item>
                    <el-form-item label="上传附件" prop="type">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                    </el-form-item>

                    <el-form-item label="商品货号" prop="goods_no">
                        <el-input v-model="ruleForm.goods_no"></el-input>
                    </el-form-item>
                    <el-form-item label="库存数量" prop="stock_quantity">
                        <el-input v-model="ruleForm.stock_quantity"></el-input>
                    </el-form-item><el-form-item label="市场价格" prop="market_price">
                        <el-input v-model="ruleForm.market_price"></el-input>
                    </el-form-item><el-form-item label="销售价格" prop="sell_price">
                        <el-input v-model="ruleForm.sell_price"></el-input>
                    </el-form-item>

                    <el-form-item label="内容摘要 " prop="zhaiyao">
                        <el-input type="textarea" v-model="ruleForm.zhaiyao"></el-input>
                    </el-form-item>
                    <el-form-item label="详细信息" prop="content">
                        <el-input type="textarea" v-model="ruleForm.content"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交保存</el-button>
                        <el-button @click="resetForm('ruleForm')">返回上一页</el-button>
                    </el-form-item>
              </el-form>
         </section>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
      ruleForm: {
                title: "Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣",
                sub_title: "英伦轻奢 专柜同款 为不凡而生",
                category_id: "98",
                goods_no: "NZ0000000002",
                category_id: "151",
                stock_quantity: 200,
                market_price: 1000,
                sell_price: 800,
                status: true,
                is_slide: true,
                is_top: false,
                is_hot: true,
                zhaiyao: "Hazzys哈吉斯2017",
                content: "<p><strong>产品参数：</strong></p>",
                imgList: [
                    {
                        name: "wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                        url: "http://139.199.192.48:6060/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                        shorturl: "/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg"
                    }
                    ],
                fileList: [
                    {
                        uid: 34,
                        name: "HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                        url: "http://139.199.192.48:6060/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                        shorturl: "/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg"
                    }
                    ]
            },
      rules: {
        title: [
          { required: true, message: "请输入内容标题", trigger: "blur" },
        ],
        sub_title: [{ required: true, message: "请输入副标题", trigger: "change" }],
        goods_no: [{ required: true, message: "请输入商品编号", trigger: "change" }],
        stock_quantity: [{ required: true, message: "请输入库存数量", trigger: "change" }],
        market_price: [{ required: true, message: "请输入副标题", trigger: "change" }],
        sell_price: [{ required: true, message: "请输入副标题", trigger: "change" }]
      },
      goodsCategory:[]
    };
  },
  methods:{
      /* 获取编辑页面 */
        getEditPage(){
          this.$http.get(this.$api.gsDetail+this.id).then(rsp=>{
              rsp.data.message.category_id=+rsp.data.message.category_id;                            
            //   rsp.data.message.category_id=Number(rsp.data.message.category_id);                            
              this.ruleForm=rsp.data.message;
          })
      },
         /* 获取商品分类 */
        getGoodsCategory(){
            this.$http.get(this.$api.ctList+"goods").then(rsp=>{
                this.goodsCategory=rsp.data.message;
                console.log(rsp.data);
            })
        },
        /* 提交 */
        editPost(){
            this.$http.post(this.$api.gsEdit+this.id,this.ruleForm).then(rsp=>{
                this.$alert(rsp.data.message);
                this.$router.push("/goods/content/list");
            });
        },
        /* 验证后提交 */
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.editPost();
          } else {
            console.log('修改失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
  },
  created(){
      this.getGoodsCategory();
      this.getEditPage();
  }
};
</script>

<style lang="less">
    .edit{
        .el-breadcrumb {
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
        .el-breadcrumb__item {
        color: #ddd;
        .el-breadcrumb__inner {
            color: #333;
        }
        }
        span{
                color:#444
            }
        }
        &_box{
            margin-top: 10px;
            padding-top: 10px;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
        &_form{
            
            width: 500px;            
        }
    }
</style>
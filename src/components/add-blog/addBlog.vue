<template>
<div id="whole">
  <div id="add">
  <h1>添加blog</h1>
 <div class="input">
   <hr style="position: relative;bottom: 20px">
<span style="position: relative;bottom: 14px;font-size: 22px">文章作者</span>
   <el-input
       type="textarea" style="position:relative;margin-bottom:30px;font-size: 22px"
       :rows="2" cols="30"
       placeholder="请输入内容"
       v-model="writer">
   </el-input>
<!--   标题-->
   <span style="position: relative;bottom: 14px;font-size: 22px">文章标题</span>
   <el-input
       type="textarea" style="position:relative;margin-bottom:30px;font-size: 22px"
       :rows="rows" cols="30"
       placeholder="请输入内容"
       v-model="title" >
   </el-input>


<!-- 内容  -->
   <span style="position: relative;bottom: 14px;left:5px; font-size: 19px">文章内容</span>
   <el-input
     type="textarea" class="el-input"
     :rows="row" style="font-size: 22px" cols="30"
     placeholder="请输入内容"  maxlength="300"
     v-model="main"></el-input>
<!--照片传输-->
   <div class="pic-tran">
     <span>上传图片:</span><h5>(建议不超过20M)</h5>
     <el-upload
         style="position: relative;bottom: 12px"
       action="https://jsonplaceholder.typicode.com/posts/"
       list-type="picture-card"
       :on-preview="handlePictureCardPreview"
       :on-remove="handleRemove">
     <i class="el-icon-plus"></i>
   </el-upload>
     <el-dialog :visible.sync="dialogVisible">
       <img width="100%" :src="dialogImageUrl" alt="">
     </el-dialog>
   </div>
<!--   视频传输-->



<!--   按钮-->
   <div class="button">
     <el-button type="primary"  @click="postBlog">提交</el-button>
     <el-button type="primary" >保存到草稿箱</el-button>
   </div>

 </div>





  

</div>
  <tab></tab>
</div>
</template>

<script>
import axios from "axios";

import tab from '@/components/add-blog/tab'
export default {
  name: "addBlog",
  data(){
    return{
     title:[],
      main:[],
      writer:[],
      dialogImageUrl: '',
      dialogVisible: false,
      imgUrl:require('@/./assets/addBlog-1.jpg'),
      row:15,
      rows:3
    }
  },
  methods:{
   // 需要接口文档
    postBlog(){
      axios.post('http://localhost:3000/profile',
          {
            title:this.title,
            main:this.main,
            writer:this.writer
          }
      ).then((res)=>{
        console.log(res)
        this.$message.success('上传成功')
        this.$router.push('/show')
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
components:{
    tab

  }






}
</script>

<style scoped lang="scss">
$subtitle:23px;
$alertColor:red;
#add{
  text-decoration: none;
  list-style: none;
  position: absolute;
  top:90px;
  display: flex;
  flex-direction: column;
  left: 80px;
  width:700px;
  padding: 0;
  margin: 0;
  height: 1300px;
  background-color: #99a9bf;
  //.bg{
  //  position: relative;
  // left : 760px;
  //  bottom: 680px;
  //
  //
  //  img{
  //    width: 400px;
  //    height: 500px;
  //    border: #99a9bf 1px solid;
  //  }
  //}


  h1{
    position: relative;
    left:30px;
  }

.input{
  width: 600px;
  position: relative;
  left: 40px;
}
  .button{
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 50px;}
.pic-tran{
position: relative;
  top: 22px;
  span{
    position: relative;
    bottom:20px;
    font-size:$subtitle ;
    left: 5px;
  }
  h5{
    display: inline-block;
    position: relative;
    left: 30px;
   bottom:  24px;
    color: $alertColor;
  }


}






}




</style>
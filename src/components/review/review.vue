<template>
<div id="whole">
 <div class="header">
  <h1 >评论区</h1>
   </div>

  <div id="list">
    <div class="review" v-for="(item,index) in list" :key="index">
      <el-avatar style="width: 50px;height:50px ;"
                 :src=item.src></el-avatar>
      <div class="name">{{item.name}}</div>
      <div class="comment">{{item.review}}</div>
      <div class="fun">
      <i class="el-icon-star-on">
       <span class="font-fun">赞</span></i>
       <span class="font-fun">评论</span>
        <span class="font-fun" >踩</span>
      </div>

    </div>
    <el-divider ></el-divider>
  </div>
   <div class="footer">
    <span class="fonts">名字</span>
     <el-input
         type="textarea"
         :rows="1"
         placeholder="请输入内容"
         v-model="name">
     </el-input>
     <span class="fonts">评论</span>
     <el-input
         type="textarea"
         :rows="1"
         placeholder="请输入内容"
         v-model="review">
     </el-input>
        <el-button style="width: 80px;height: 38px;position: relative;left:150px" type="primary"
        @click="postReview"
        >提交</el-button>


   </div>

</div>

</template>

<script>
import axios from "axios";

export default {
  name: "review",
  data(){
    return{
      count:0,
      list:[],
      review:[],
      name:[],
     src:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  created() {
    axios.get('http://localhost:3000/comments')
   .then(res =>{
     console.log(res)
     this.list =res.data
     console.log(this.list)
   }).catch(e =>{
     this.$message.warning(e)
    })

  },

  methods:{
   named(){
     if (this.name==null){
       this.name = Math.random()
     }

   },
    postReview(){
     axios.post('http://localhost:3000/comments',
         {
           review: this.review,
           name: this.name,
           src: this.src
         }
     ).then(res =>{
       console.log(res)
       this.$message.success('评论成功！')
       setTimeout(()=>{
         location.reload()
       },1000)
     }).catch(e=>{
       console.log(e)
     })

   }
  }
}
</script>

<style lang="scss" scoped>
#whole{
  margin-top: 100px;
  height: 800px;
  width: 100vw;
  position: absolute;
 .header{
    position: relative;
    top: 500px;
    right: 160px;

  }
  #list {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    border-radius: 30px;
    width: 80vw;
    height: 600px;
    position: absolute;
    top: 580px;
    right:10px;
    display: flex;
    flex-direction:column;
    padding: 15px;
  .review{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    .font-fun{
      font-size: 14px;
      color:grey;
    }
    .name{
      font-size: 14px;
      position: relative;
      right: 20px;
    }
    //评论
    .comment{
      font-size: 18px;
      margin-top:22px;
      position: relative;
      right:80px;
      top: 1px;
    }
    .fun{
      margin-top:28px;
      position: relative;
      right: 80px;
      width: 170px;
      display: flex;
      justify-content: space-evenly;
    }


    .item {
      margin-top: 10px;
      margin-right: 40px;
    }
  }



    }
  .footer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
       top: 890px;

 right: 140px;
    width: 60vw;
    height: 240px;
    font-size: 20px;
    .fonts{
      position: relative;
      right: 20px;
    }
     }



  }


</style>
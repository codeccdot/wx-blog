<template>
  <div id="home">
    <div id="function"></div>
    <div id="header">
    <div class="icon_left"><i class="el-icon-user-solid" style="font-size:35px"></i>
      <span style="font-size: 30px">帅文前端技术blog</span>
      <div style="position: absolute;left:780px;top: 6px;"><el-avatar :size="30" :src="circleUrl" ></el-avatar></div>
      <span style="position: relative;left:535px;bottom: 4.5px;font-size: 18px;color: #e96900">Jason</span>
    </div>

    <div class="icon_right">
      <span ><router-link to="/add" style="text-decoration: none;color: white">添加博客</router-link></span>
      <span><router-link to="/login" style="text-decoration: none;color: white">退出登录</router-link></span>
      <span><router-link to="/admin" style="text-decoration: none;color: white">管理后台</router-link></span>
      <span><router-link to="/show" style="text-decoration: none;color: white">我的博客</router-link></span>
    </div>

<router-view></router-view>
  </div>
    <div id="blog_footer">
      <div id="footer_link">
        <span>联系我们:8861909 </span>
        <span>博客详情:分享平台，从轻博客开始</span>
        <span>友情链接 http:/baidu.com </span>
        <span>所用技术 Vue+ElementUI</span>
        <div class="link">
          <img :src="imgUrl" alt="">
        </div>
      </div>

      <h3 style="position: absolute;bottom:30px;right: 90px;color: red">从轻分享到个人交流的平台，不论是信息还是快乐都能快速交付给对方</h3>
    </div>
  </div>
</template>

<script>

import axios from "axios";
// import showBlog from "@/components/showBlog2";

export default {
  name: "home"
  ,data(){
    return{
     name:'',
      blog: [],
      imgUrl:require('@/./assets/link.jpg'),
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  components:{

    // showBlog
  },
  created() {
    let data
     axios.get('http://jsonplaceholder.typicode.com/posts')
       .then((res)=>{
               this.blog = res.data
         })
       }}
</script>

<style scoped>
@import url("home.css");

body{
  padding: 0;
  margin: 0;
  text-decoration: none;

}
html{
  max-width: 1100px;
}

</style>
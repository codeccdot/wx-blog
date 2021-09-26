<template>
  <div id="blog_main">
    <div id="blog_main_left" v-for="(item,index) in blog.slice(0,4)" :key="index">
      <li>
        <h1 id="title">{{item.title}}</h1>
       <article>{{item.body.slice(0,140)+"..."}}</article>
      </li>
      </div>
      <div id="blog_main_right">

      </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "showBlog",data(){
  return{
    blog: [],
  }},
  created(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
          this.blog = res.data

}).catch(e =>{
  console.log('错误为',e)

    })

  }}
</script>

<style scoped>
@import url("../home/home.css");
</style>
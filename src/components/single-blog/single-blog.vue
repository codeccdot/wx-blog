<template>
  <div id="whole">
    <div class="blog">
      <div id="title"><h1>{{this.blog.title}}</h1></div>
      <p style="position: relative;bottom: 13px" class="main">{{this.blog.main}}</p>

    <hr style="width: 1000px;position: relative;top: 60px;">
    <review></review>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import review from "@/components/review/review";
export default {
  data(){
  return{
    id:this.$route.params.id,
    blog:[]
  }
  },
 components:{
review
 },
  created(){
    axios.get('http://localhost:3000/profile/'+this.id)
        .then((res)=>{
          console.log(res.status)
          if(res.status === 200){
            setTimeout(()=>{
              this.blog = res.data
              console.log(res)
            },500)
          }

        })
},

methods:{

}
}
</script>

<style scoped lang="scss">
#whole{
  position: absolute;
  top:100px;
  left:150px;
  height: 600px;
  text-indent: 2em;
  width:900px;
   .blog{
     background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
     border: solid 2px lightgrey;
     width: 80vw;

     border-radius: 40px;
     #title{
         position: relative;
         top: 15px;
          }
     .main{
       position: relative;
       bottom: 70px;
       line-height:54px;
       margin: 30px;
       padding-top:10px ;
       height: 450px;
       border-top: solid 1px #333333;
     }
   }

  .button{
    position: absolute;
    top:40px;
    width: 60px;
    height: 40px;
    font-size:10px;
  }
}

</style>
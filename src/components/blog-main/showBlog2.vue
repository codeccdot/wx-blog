<template>
  <div id="main" >
    <div id="top"> <el-col :span="7" style="width: 600px" body-style="color:yellow">
      <el-card shadow="always">
        <h1 style="position: relative;left: 200px">我的博客总览</h1>
      </el-card>
    </el-col>
<div id="search">
  <el-input v-model="input" placeholder="请输入你想要的博客"></el-input>
</div>
  </div>
    <div v-show='loading' v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
  style="position:absolute;top:0;left: 0;width:100%;height:60% "></div>
    <div class="position-reload">

      <div id="showArea" v-for="(item,index) in filterBlogs.slice((currentPage - 1) * pageSize, currentPage * pageSize)" :key="item.id">
        <div id="title"><router-link v-bind:to="'/single/'+blog[index].id" style="text-decoration: none;color: antiquewhite">{{item.title}}</router-link><h2></h2></div>
        <p style="position: relative;bottom: 10px">{{item.main.slice(0,130)+'...'}}</p>
        <p style="position: relative;bottom: 10px ;left:400px;font-size: 20px">——{{item.writer}}</p>
      </div>
     <div class="pag">
       <el-pagination
           background
           layout="prev, pager, next"
           :total="total"
           :page-size="pageSize"
           :current-page="currentPage"
           @current-change="changePage"
           @size-change="sizeChange"
           style="position: relative;left:490px;bottom: 100px"
      />
     </div>
    </div>

    </div>



</template>

<script>
import axios from "axios";

export default {
  name: "showBlog2",
  data(){
    return{
      blog: [],
      input:'',
      loading:true,
      total:0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 0 // 分页大小

    }
  },
 created() {

    axios.get('http://localhost:3000/profile')
      .then((res)=>{
        console.log(res.status)
        console.log(res.data)
       if(res.status === 200){
         setTimeout(()=>{
           this.loading = false
            this.blog = res.data
         },1000)

       }

      })
   axios.get('http://localhost:3000/pageInfo')
       .then((res)=>{
         console.log(res.data)
         if(res.status === 200){
           setTimeout(()=>{
            this.pageSize=res.data[0].pageSize
             this.currentPage = res.data[0].currentPage
             this.total =res.data[0].pageTotal
             console.log(this.total)
             console.log(this.pageSize)
             console.log(this.currentPage)
           },1000)

         }

       })


},

  methods:{
    changePage:function(cpage){
      this.$data.currentPage = cpage;
    },
    sizeChange:function(psize){
      this.$data.pageSize = psize;
    }



  },


  computed:{
    filterBlogs:function(){
      return this.blog.filter((blog)=>{
        return blog.title.match(this.input)
      })
    }
  }


}
</script>

<style scoped>
#main{
 max-height: 800px;
}
.position-reload{
  height: 1000px;
  width: 100%;
  position: relative;
  bottom: 25px;
}
.pag{
  width: 200px;
}



#showArea{
position: relative;
  bottom:205px;
margin-top: 20px;
background-color: rgba(220,38,38,0.7);
  opacity: 80%;
  height: 158px;
  width:1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-indent: 2em;
  text-align: left;
  animation: pick;
  animation-duration:1.5s ;
  border-radius: 30px;
}
#title{
 text-decoration: none;
 font-size: 28px;position: relative;
  top:8px
}
#top{
  position: absolute;
  top:90px;
  left: 27%;
}
@keyframes pick{
  from{ opacity: 0% }
  to{ opacity: 80% }
}

</style>
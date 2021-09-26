<template>
  <div class="home">
    <el-header class="el-header">
     <span>博客后台数据操作</span>
    </el-header>
    <el-container>
      <!--导航栏-->
      <el-aside width="250px" class="el-aside">
      <el-button type="warning" class="bt" @click="exit">退出管理系统</el-button>
        <el-button type="warning" @click="exit2">跳转新组件</el-button>
      </el-aside>

      <!--子路由显示导航和个分支信息-->
      <el-main class="el-main" >
        <div class="list">
          <el-table
              :data="blog"
              v-loading="loading"
              stripe height="400px"
              style="width: 100%">
            <el-table-column label="序号" width="100px" prop="id">
            </el-table-column>
            <el-table-column
                prop="writer"
                label="作者"
                width="120">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="220">
              <template slot-scope="scope">
                <el-button type="primary" @click.native.prevent="deleteIndex(scope.row.id)" plain size="small">移除</el-button>
                <el-button type="primary"  plain size="small">修改</el-button>

   </template>
 </el-table-column>
</el-table>
</div>
</el-main>
</el-container>
<el-container>
      <el-footer class="el-footer" height="100px">
      </el-footer>
    </el-container>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'admin',

  components:{

  },
  created(){
    axios.get('http://localhost:3000/profile')
        .then((res)=>{
          console.log(res.status)
          if(res.status === 200){
            setTimeout(()=>{
              this.blog = res.data
              this.loading =false
              console.log(res)
            },800)
          }

        })
  },
  data(){
    return{
     blog:[],
      id: [] ,
      loading:true,
      dialogTableVisible: false
      }
    },
  methods:{
    open() {
      this.$confirm('修改', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    exit(){
      this.$router.push('/show')

    },
    exit2(){
      this.$router.push('/adminView')

    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },

    // deleteBlog(){
    //   console.log(this.id)
    //   axios.delete('http://localhost:3000/profile/'+this.id,
    //       // {data:this.blog}
    //   )
    //       .then((res)=>{
    //         this.$message.success('删除成功！')
    //         console.log(res)
    //         setTimeout(()=>{
    //        location.reload()
    //         },1500)
    //
    //       }).catch(e=>{
    //     console.log('错误为',e)
    //   })

    // },
    deleteIndex(id) {
      console.log(id)
      axios.delete('http://localhost:3000/profile/'+id,
          // {data:this.blog}
      )
          .then((res)=>{
            this.$message.success('删除成功！')
            console.log(res)
            setTimeout(()=>{
              location.reload()
            },1500)

          }).catch(e=>{
        console.log('错误为',e)
      })
    }
  }

}
</script>
<style>
body{
  height: 580px;
  width: 1257px;
}
</style>


<style lang="scss" scoped>
.el-header {
  background-color: #99a9bf;
  color: #333;
  text-align: center;
  height: 120px;
  font-size: 34px;
  font-weight: bold;
  font-family: "Microsoft YaHei";
}
.el-footer {
  background-color: #99a9bf;
  color: #333;
  text-align: center;
  height: 70px;


}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .bt{
position: relative;
bottom: 70px;
  }

}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 530px;
.list{
  position: relative;
  top:10px;

}

}




</style>
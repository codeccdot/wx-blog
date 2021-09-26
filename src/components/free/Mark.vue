<template>
  <div class="home">
    <el-header class="el-header">
      <span>公管系学生成绩数据表</span>
    </el-header>
    <el-container>
      <!--导航栏-->
      <el-aside width="250px" class="el-aside">

      </el-aside>

      <!--子路由显示导航和个分支信息-->
      <el-main class="el-main" >
        <div class="list">
          <el-table
              v-loading="loading"
              :data="blog.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
              border
              style="width: 100%">
            <el-table-column
                prop="id"
                label="学号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="mark-English"
                sortable :sort-method="sortByDate"
                label="大英">
            </el-table-column>
            <el-table-column
                prop="mark-Math"
                sortable
                label="高数" :sort-method="sortByDate">
            </el-table-column>
            <el-table-column
                prop="mark-phycology"
                sortable
                label="心理学">
            </el-table-column>
          </el-table>
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
          <div class="timer">
            <span>当前时间为：</span>
            <span>{{this.year}}</span>年
            <span>{{this.month}}</span>月
            <span>{{this.day}}</span> 日
            <span>{{this.hour}}</span>时
            <span>{{this.minute}}</span>分
            <span>{{this.second}}</span>秒
          </div>

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
    setInterval(()=>{
      this.getData()
    },1000)

    axios.get('http://localhost:3000/abList')
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

    axios.get('http://localhost:3000/pageInfo2')
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

  data(){
    return{
      blog:[],
      id: [] ,
      loading:true,
      dialogTableVisible: false,
      year:'',
      month:'',
      day:'',
      hour:'',
      minute:'',
      second:'',
      total:0, // 总条数
      currentPage: 1, // 当前页
      pageSize: 0 // 分页大小
    }
  },
  methods: {
    sortByDate(obj1, obj2) {
      let val1 = obj1.deadline
      let val2 = obj2.deadline
      return val1 - val2
    },




    changePage:function(cpage){
      this.$data.currentPage = cpage;
    },
    sizeChange:function(psize){
      this.$data.pageSize = psize;
    },


    getData() {
      var now = new Date();

      this.year = now.getFullYear(); //得到年份

      this.month = now.getMonth() + 1;//得到月份

      this.day = now.getDate();//得到日期

// var day = now.getDay();//得到周几

      this.hour = now.getHours();//得到小时数

      this.minute = now.getMinutes();//得到分钟数

      this.second = now.getSeconds();//得到秒数

      setTimeout(this.getDate, 1000);//定时器一直调用show()函数

      return "";


    },



    cellStyle({row, column, rowIndex, columnIndex}) {
      // 状态列字体颜色
      if (row.permission === '批准' && columnIndex === 4) {
        return 'color: #0CB618'
      } else if (row.permission === '搁置' && columnIndex === 4) {
        return 'color: #EA1B29'
      } else {
        return 'color: #1a1a1b'
      }
    },

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

    exit() {
      this.$router.push('/show')

    },
    exit2() {
      this.$router.push('/adminView')

    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
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
      axios.delete('http://localhost:3000/profile/' + id,
          // {data:this.blog}
      )
          .then((res) => {
            this.$message.success('删除成功！')
            console.log(res)
            setTimeout(() => {
              location.reload()
            }, 1500)

          }).catch(e => {
        console.log('错误为', e)
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
  overflow: hidden;
  height: 530px;
  .timer{
    position: absolute;
    right: 10px;
    color:darkred;
    bottom: 5px;
    font-size: 16px;
  }
  .pag{
    position: relative;
    top: 140px;
    right: 170px;
  }
  .list{
    position: relative;
    top:10px;

  }

}



</style>
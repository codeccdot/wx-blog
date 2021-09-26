<template>
<div class="all">
  <div class="title"><span>中山大学南方学院公共管理学系后台查询平台</span></div>
  <div class="container">
    <div class="card"   v-for="(item,i) in list" :key="i">
      <div class="imgBx">
       <img :src="item.src" alt="">
      <div class="content">
        <h2><router-link :to="item.url">{{item.p}}</router-link></h2>
      </div>
      </div>
    </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "adminView",
   data(){
    return{
      list:[{
        src:require('@/./assets/draw2.jpg'),
        p:"学生请假情况",
        url:'/absence'
      },
        {
          src:require('@/./assets/draw2.jpg'),
          p:"学生绩点情况",
          url:'/mark'

        },{
         src:require('@/./assets/draw2.jpg'),
          p:"各个班级成员情况",
          url:'/member'

        }
      ]



    }
   }

}
</script>
<style>
body{
  height: 500px;
  width: 1200px;
}
</style>

<style lang="scss"  scoped>
*,html{
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
}
.all{
  background-color: gray;
  width: 107%;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.container{
  position: relative;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;


}
.title{
 font-weight: bold;
  font-size: 40px;
  color: darkslateblue;
  position: relative;
  top: 60px;
}
.container .card{
  position: relative;
  max-width: 400px;
  height: 250px;
  background: lightgrey;
  margin: 30px 30px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0,0,0,0.5);
  transition: .3s ease-in-out;
}

.container .card:hover{
  height: 340px;
}

.container .card .imgBx{
  position: relative;
  width: 230px;
  height: 200px;
  top: -60px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.container .card .imgBx img{
  max-width: 100%;
  border-radius: 4px;
}

.container .card .content{
  position: relative;
  margin-top: -200px;
  padding: 10px 15px;
  text-align: center;
  color:black;
  visibility: hidden;
  opacity: 0;
  transition: .3s ease-in-out;
}

.container .card:hover .content{
  visibility: visible;
  opacity: 1;
  margin-top: 30px;
  transition-delay: .5s;
}


@media screen and (max-width: 600px) {
 html,body{

   height: 500px;

 }
  .title{
    font-weight: bolder;
    font-size:14px;
    color: darkslateblue;
    position: absolute;
    left: 60px;
    top: 30px;
  }
  .all{
    width: 100%;
   height:500px;
    background-color: gray;
    overflow: hidden;
  }
  .container{
    position: relative;
    height: 70px;
    width: 117.5%;
    left:80px;
    margin: 60px -10px;
    justify-content: start;


  }

  .container .card{
    width: 50px;
 height: 60px;
}
  .container .card .imgBx{
    position: relative;
    width: 50px;
    height: 50px;
    top: -20px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  }

  .container .card .imgBx img{
    max-width: 100%;
    border-radius: 4px;
  }

  .container .card .content{
    position: relative;
    margin-top: -50px;
    padding: 10px 15px;
    text-align: center;
    color: whitesmoke;
    visibility: hidden;
    opacity: 0;
    transition: .3s ease-in-out;
  }

  .container .card:hover .content{
    visibility: visible;
    font-size: 7px;
    opacity: 1;
    margin-top: 30px;
    transition-delay: .5s;
  }
  .container .card:hover{
    height: 220px;
  }
}

</style>
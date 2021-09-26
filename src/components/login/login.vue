<template>
<div id="background">
<div id="top">
  <i class="el-icon-s-custom" style="font-size: 25px"></i>
  <span style="font-family: 'Microsoft YaHei';font-size: 30px">博客系统</span>
  <span style="float:right;position:relative ;right: 80px;font-size: 30px">加入我们</span>

</div>

  <div id="table">
    <nav>
      <a >收获</a >
      <a >分享</a>
      <a >Blog</a>
      <a >个性</a>
      <a >展示</a>
      <div class="animation start-home"></div>
    </nav>
    <span class="title">文享blog</span>

    </div>
  <div id="loginForm">
    <div class="el">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="博客名" prop="username">
          <el-input style="width: 400px" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="Pass">
          <el-input style="width: 400px" type="password" v-model="ruleForm.Pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary"    @click="submitForm('ruleForm')">提交</el-button>
          <el-button class="btn"  @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <div style="color: #333 ;font-size: 20px ;position:relative;left: 160px; top: 0px">登录表示您已同意<a>《服务条款》</a></div>
      </el-form>
    </div>
    </div>

  <div id="link"><router-link to="/home"><button>进入博客</button></router-link></div>
  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.4" d="M0,256L6.2,266.7C12.3,277,25,299,37,293.3C49.2,288,62,256,74,250.7C86.2,245,98,267,111,245.3C123.1,224,135,160,148,112C160,64,172,32,185,58.7C196.9,85,209,171,222,176C233.8,181,246,107,258,96C270.8,85,283,139,295,186.7C307.7,235,320,277,332,277.3C344.6,277,357,235,369,218.7C381.5,203,394,213,406,208C418.5,203,431,181,443,154.7C455.4,128,468,96,480,101.3C492.3,107,505,149,517,138.7C529.2,128,542,64,554,58.7C566.2,53,578,107,591,106.7C603.1,107,615,53,628,32C640,11,652,21,665,42.7C676.9,64,689,96,702,106.7C713.8,117,726,107,738,96C750.8,85,763,75,775,96C787.7,117,800,171,812,170.7C824.6,171,837,117,849,117.3C861.5,117,874,171,886,192C898.5,213,911,203,923,202.7C935.4,203,948,213,960,186.7C972.3,160,985,96,997,96C1009.2,96,1022,160,1034,176C1046.2,192,1058,160,1071,154.7C1083.1,149,1095,171,1108,170.7C1120,171,1132,149,1145,144C1156.9,139,1169,149,1182,154.7C1193.8,160,1206,160,1218,186.7C1230.8,213,1243,267,1255,261.3C1267.7,256,1280,192,1292,181.3C1304.6,171,1317,213,1329,229.3C1341.5,245,1354,235,1366,218.7C1378.5,203,1391,181,1403,170.7C1415.4,160,1428,160,1434,160L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>

  </div>



</template>

<script>
import axios from "axios";
export default {
  name: "login",
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入博客名'));
        } else {
          callback();
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        arr:[],
        ruleForm: {
          username: 'admin',
          Pass: '123456',
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          Pass: [
            { validator: validatePass, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
    debounce(fn,delay){
      let t = null;
      return function(){
    if(t!==null){
      clearTimeout(t)
    }
    t=setTimeout(()=>{
      fn.apply(this)
    },delay)}

},



    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.get('http://localhost:3000/posts')
              .then((response)=>{
                console.log(response.data)

                let b = response.data
              for (let i in b){
               this.arr.push(b[i])}
             this.arr.forEach((item)=>{
               let res = item.username.indexOf(this.ruleForm.username)
               console.log(item)
               if(res !=-1){
                 let tes =item.password.indexOf(this.ruleForm.Pass)
                 if(tes!=-1){
                   this.$message.success('登录成功')
                 setTimeout(()=> {
                   location.href = '/http://localhost:8080/#/home'
                 },2200)
                 }
                 else{   console.log('失败')}
               }
              else {
                 clearTimeout();
                 setTimeout(()=> {
                   this.$message.warning('登录失败')

                 },1200)
               }


             })

              }).catch(e=>{
                console.log(e)
              })
          setTimeout(()=>{
            console.log('登录中')

          },2000)
          }else {
            console.log('error submit!!');
            return false;
          }
        });

}
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

  }
</script>


<style scoped>
html{
  overflow-y: hidden;
}
.svg{
  position: relative;
  bottom:600px;

}
#top{
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}




#link{
 display: flex;
  justify-content: center;
  position: relative;
  bottom: 400px;
  z-index: 999;

}
@keyframes tableMove {
  from  {opacity: 0}
  to{opacity: 100%}
}

@keyframes example {
  from  {width: 0}
  to{width: 590px}
}
.el .btn{
  margin-left: 50px;
  margin-right: 70px;
}

.el{
  color: black;
  position: relative;
  top:120px;

}
.el .input{
  width: 400px;
}
#loginForm{
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  background-blend-mode: multiply,multiply;
  position: relative;
  bottom: 455px;
  width:590px;
  margin: 0 auto;
  height:360px;
  border-radius: 10px;
  animation-name: example;
  animation-duration: 0.5s;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
z-index: 998;


}


.title{
  font-weight: bold;
color: lightyellow;
  font-size: 50px;
 position: relative;
 display: flex;
  justify-content: center;
   top:120px;
  z-index:999;

}

body{
  margin:0;
  padding:0;
  display: flex;
  height: 700px;
  overflow: hidden;

}

#background{
  font-family: 'Open Sans', sans-serif; /* 字体 */
  background: #2c3e50; /* 背景 */
position: relative;
  bottom: 270px;

}

#table{
  width: 100%;
  height: 100vh;
  background: #2c3e50; /* 背景 */



}

nav {
  position: relative; /* 相对定位 */
  margin: 270px auto 0; /* 外边距 */
  top: 100px;
  width: 590px; /* 宽度 */
  height: 50px; /* 高度 */
  background: #34495e;
  border-radius: 8px; /* 边框圆角 */
  font-size: 0; /* 字体大小 */
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1); /* 阴影 */
  animation: tableMove ;
  animation-duration: 0.5s;
}
nav a {
  font-size: 15px;
  text-transform: uppercase; /* 大写 */
  color: white; /* 字体颜色 */
  text-decoration: none; /* 字体附加效果 */
  line-height: 50px; /* 行高 */
  position: relative; /* 相对定位 */
  z-index: 1; /* 层叠顺序 */
  display: inline-block; /* 行内盒模型 */
  text-align: center; /* 字体居中 */
}
nav .animation {
  position: absolute; /* 绝对定位 */
  height: 100%;
  top: 0;
  z-index: 0;
  background: #1abc9c;
  width: 100px;
  border-radius: 8px;
  transition: all .5s ease 0s; /* 过渡时间 */
}
a:nth-child(1) { /* 第一个元素a */
  width: 100px;
}
nav .start-home, a:nth-child(1):hover~.animation {
  width: 100px;
  left: 0;

}
nav .start-home, a:nth-child(1):hover~.animation~.show1{
  display: inline-block;
 }


a:nth-child(2) {
  width: 110px;
}
nav .start-about, a:nth-child(2):hover~.animation {
  width: 100px;
  left: 100px;
}
a:nth-child(3) {
  width: 100px;
}
nav .start-blog, a:nth-child(3):hover~.animation {
  width: 100px;
  left: 210px;

}
a:nth-child(4) {
  width: 160px;
}
nav .start-portfolio, a:nth-child(4):hover~.animation {
  width: 160px;
  left: 310px;

}
a:nth-child(5) {
  width: 120px;


}
nav .start-cctv, a:nth-child(5):hover~.animation {
  width: 120px;
  left: 470px;
}
.btn:nth-child(1){
position: relative;
left:30px;
}




</style>
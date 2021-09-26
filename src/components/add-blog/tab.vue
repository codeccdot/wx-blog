<template>
<div class="tab">
<li v-for="(item,index) in list" :key="index" class="item">
  {{item}}
</li>


</div>
</template>

<script>
export default {
  name: "tab",
  data(){
    return{
      list:['如何提高css的复写性-scss','函数闭包如何实现','防抖和节流','响应式布局实现原理','重复使用组件','完成函数调用',
        '组件通信','伪数组如何转换成真数组']
    }

  }
}
</script>

<style scoped lang="scss">
.tab{
  margin: 0;
  padding: 0;
  width: 380px;
  height: 900px;
  position: absolute;
  right:60px;
  top:90px;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: lightyellow 1px 1px;
  animation:go;
  animation-duration: 0.9s;
.item{
  list-style:none;
  font-size: 20px;
  color: #e96900;
  margin-top: 70px;
  animation:go;
  animation-duration: 1.5s;
  @keyframes go {
    from  {opacity: 0}
    to{opacity:100%}
  }
}

}
</style>
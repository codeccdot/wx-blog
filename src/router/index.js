import Vue from 'vue'
import VueRouter from 'vue-router'
import showBlog2 from "@/components/blog-main/showBlog2";
import addBlog from "@/components/add-blog/addBlog";
import singleBlog from '@/components/single-blog/single-blog'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   redirect: '/login'

  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../components/login/login')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "login" */ '../components/admin/admin')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/show',
    component: () => import(/* webpackChunkName: "home" */ '../components/home/home'),
  children:[
  {
    path: '/show',
    name: 'show',
    component: showBlog2
  },{
      path: '/add',
      name: 'add',
      component: addBlog
    },
    {
      path: '/single/:id',
      name: 'singleBlog',
      component: singleBlog
    }
  ]},
  {
    path: '/adminView',
    name: 'admin2',
    component: () => import(/* webpackChunkName: "login" */ '../components/free/adminView')
  }, {
    path: '/absence',
    name: 'admin2',
    component: () => import(/* webpackChunkName: "login" */ '../components/free/absence')
  },{
    path: '/mark',
    name: 'admin3',
    component: () => import(/* webpackChunkName: "login" */ '../components/free/Mark')
  },



]






const router = new VueRouter({
  routes
})

export default router
// router.beforeEach((to,from,next)=>{
//   // if (window.sessionStorage.getItem('token')){
//   //     next()
//   // }
//
//
// })



router.afterEach((to, from, next)=> {
  window.scrollTo(25, 0);
});

// router.beforeEach((to, from, next) => {
//   let islogin = localStorage.getItem("islogin");
//   console.log(islogin);
//   console.log(to.path);
//   islogin = Boolean(Number(islogin));
//
//   if(to.path == "/login"){
//     if(islogin){
//       next("/main/form/radio");
//     }else{
//       next();
//     }
//   }else{
//     // requireAuth:可以在路由元信息指定哪些页面需要登录权限
//     if(to.meta.requireAuth && islogin) {
//       next();
//     }else{
//       next("/login");
//     }
//   }
// })
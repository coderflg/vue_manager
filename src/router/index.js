import Vue from 'vue'
import VueRouter from 'vue-router'

const Login =() => import('../components/Login')
const Home =() => import('../components/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: "login",
    component: Login
  },
  {
    path: '/home',
    name: "home",
    component: Home
  }

]

let router = new VueRouter({
  mode: 'history',
  routes
})

/* 路由导航守卫 */
router.beforeEach((to,from,next)=>{
  console.log(to.path)
  if (to.path !== '/login'){  /* 判断当用户不在登录页面，且没有登录，不让路由跳转*/
    if (!sessionStorage.getItem("username")){
      next("/login")
    }
  }
  else{  /* 二次判断，用户是否登录，登录放行，没有登录，再次跳到登录页面*/
    if (sessionStorage.getItem("username")){
      next("/")
    }
  }
  next()
})

export default router

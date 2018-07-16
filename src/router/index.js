import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'
import Admin from '@/components/pages/admin/admin'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: {path:"login"}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: {path:"/admin/category"},



    },


  ]
})

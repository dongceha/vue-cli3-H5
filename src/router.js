import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/movies.vue'
import store from 'store/index'
Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'movies',
    component: Movie,
    meta: {
      auth: false, // 是否需要登录
      keepAlive: true // 是否缓存组件
    }
  },
  {
    path: '/movies',
    name: 'movies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Movie
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ './views/login.vue'),
    meta: {
      auth: false,
      keepAlive: true
    }
  },
  {
    path: '*', // 未匹配到路由时重定向
    redirect: '/',
    meta: {
      // auth: true,
      // keepAlive: true
    }
  }
  ]
})

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
  let auth = to.meta.auth
  let token = store.getters['login/token'];
  if (auth) { // 需要登录
    if (token) {
      next()
    } else {
      next({
        name: 'login',
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router

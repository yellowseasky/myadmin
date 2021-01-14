import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录',
    model: '登录'
  },
  component: () => import('@/views/login')
},
{
  path: '/',
  name: 'Layout',
  component: () => import('@/views/layout'),
  children: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: 'home',
      name: 'Home',
      meta: {
        title: '主页'
      },
      component: () => import('@/views/home/home')
    },
    {
      path: 'user',
      name: 'User',
      meta: {
        title: '员工列表'
      },
      component: () => import('@/views/user/UserList')
    },
    {
      path: 'work',
      name: 'Work',
      meta: {
        model: '业务管理'
      },
      component: () => import('@/views/work/workOrder'),
      children: [
        {
          path: 'list',
          name: 'list',
          meta: {
            title: '工单列表',
            model: '业务管理'
          },
          component: () => import('@/components/user-table')
        }
      ]

    }
  ]
},
{
  path: '*',
  name: '404error',
  component: () => import('@/views/error'),
  meta: {
    title: '文件未找到'
  }
}
]

const router = new VueRouter({
  routes,
  // 取消地址中的#
  mode: 'history'
})

// 导航守卫设置页面title
router.beforeEach((to, from, next) => {
  var progressLoading = document.getElementById('my-progress')

  if (!progressLoading) {
    progressLoading = document.createElement('div')
    progressLoading.id = 'my-progress'
    document.body.append(progressLoading)
  } else {
    progressLoading.style.display = 'block'
  }

  document.title = '天倬 - ' + to.meta.title
  next()
  // 模拟loading运行效果
  // setTimeout(() => {
  //   next()
  // }, 2000)
})

router.afterEach((to, from, next) => {
  var progressLoading = document.getElementById('my-progress')
  if (progressLoading) progressLoading.style.display = 'none'
})

export default router

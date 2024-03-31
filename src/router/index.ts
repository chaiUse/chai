import { createRouter, createWebHistory } from 'vue-router'
import Longin from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import Funds from '../components/home/funds/funds.vue'
import Compositionzc from '../components/home/funds/compositionzc/compositionzc.vue'
import Directionly from '../components/home/funds/directionly/directionly.vue'
import Flowlx from '../components/home/funds/flowlx/flowlx.vue'
import Sys from '../components/home/sys/sys.vue'
import User from '../components/home/sys/user/user.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'longin',
      component: Longin,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/home',
      name: 'home',
      redirect:"/compositionzc",
      component: Home,
      meta:{
        title:'首页',
      },
      children:[
        {
          path: '/funds',
          name: 'funds',
          component: Funds,
          redirect:"/compositionzc",
          meta:{
            title:'资金管理',
          },
          children:[
            {
              path: '/compositionzc',
              name: 'compositionzc',
              component: Compositionzc,
              meta:{
                title:'资金组成',
              },
            },
            {
              path: '/flowlx',
              name: 'flowlx',
              component: Flowlx,
              meta:{
                title:'资金流向',
              },
            },
            {
              path: '/directionly',
              name: 'directionly',
              component: Directionly,
              meta:{
                title:'资金来源',
              },
            },
          ],
        },
        {
          path: '/sys',
          name: 'sys',
          component: Sys,
          redirect:"/user",
          meta:{
            title:'系统管理',
          },
          children:[
            {
              path: '/user',
              name: 'user',
              component: User,
              meta:{
                title:'用户管理',
              },
            }
          ]
        }
      ],
    },
  ]
})
router.beforeEach((to, from) => {
  console.log(to.matched.some(v => v.meta.isLogin));
  
   if (!to.matched.some(v => v.meta.isLogin)) {
    const token = localStorage.getItem('token')
    if (!token) {
     return {
      path: '/',
     }
    }
   }
  })
export default router

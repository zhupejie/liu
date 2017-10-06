import Vue from 'vue'
import Router from 'vue-router'
import guide from '@/components/guide'
import guide1 from '@/components/guide1'
import guide2 from '@/components/guide2'
import guide3 from '@/components/guide3'
import guide4 from '@/components/guide4'
import guide5 from '@/components/guide5'
import Home from '@/components/page/home'
import Content from '@/components/page/content'
import con1 from '@/components/page/content1'
import con2 from '@/components/page/content2'
import con3 from '@/components/page/content3'
import shi from '@/components/page/shi_swipe'
import shi1 from '@/components/page/shi_swipe1'
import shi2 from '@/components/page/shi_swipe2'
import shi3 from '@/components/page/shi_swipe3'
import goods from '@/components/page/goods'
import goodsdetail from '@/components/page/goodsdetail'
import Car from '@/components/page/car'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: guide,
      children: [{
        name:'default',
        path:'',
        component:guide1
      }, {
        name:'page2',
          path: '2',
          component: guide2
      }, {
        name:'page3',
          path: '3',
          component: guide3
      }, {
        name:'page4',
          path: '4',
          component: guide4
      }, {
        name:'page5',
          path: '5',
          component: guide5
      }]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/content',
      name: 'content',
      component: Content,
      children: [{
        name:'condef',
        path:'',
        component:con1
      },{
        name:'con1',
          path: 'con1',
          component: con1
      },{
        name:'con2',
          path: 'con2',
          component: con2
      }, {
        name:'con3',
          path: 'con3',
          component: con3
      }]
    },
    {
      path: '/shi',
      name: 'shi',
      component: shi,
      children: [{
        name:'shidef',
        path:'',
        component:shi1
      },{
        name:'shi1',
          path: 'shi1',
          component: shi1
      }, {
        name:'shi2',
          path: 'shi2',
          component: shi2
      }, {
        name:'shi3',
          path: 'shi3',
          component: shi3
      }]
  },{
    name:'goods',
    path: '/goods',
    component: goods
  },{
    path:'/goods-detail/:id',
      component:goodsdetail
  },{
    name:"car",
    path:'/car',
    component:Car
  }
  ]
})

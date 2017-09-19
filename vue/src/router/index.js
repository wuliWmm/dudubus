import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import My from '@/components/My/my.vue'
import Ride from '@/components/Ride/Ride.vue'
import Buy from '@/components/Buy/Buy.vue'
import Buynext from '@/components/Buy/Buynext.vue'
import Minute from '@/components/Buy/minute.vue'
import Byby from '@/components/Buy/byby.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    
      component: Buy
    },
    {
      path: '/my',
     
      component: My
    },
    {
      path: '/ride',
      
      component: Ride
    },
    {
      path: '/buy',
     
      component: Buy
    },{
      path:'/buynext',
      component: Buynext
    },
    {
      path:'/minute',
      component:Minute
    },
    {
      path:'/byby',
      component:Byby
    }
  ]
})

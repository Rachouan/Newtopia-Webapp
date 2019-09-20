import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Country from './views/Country.vue'
import Complete from './views/Complete.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    },
    {
      path: '/country',
      name: 'country',
      component: Country,
      props: true,
      beforeEnter: (to,from,next) => {
        if(to.params.topia){
          next()
        }else{
         next({name:'home'})
        }
      }
    }
  ]
})

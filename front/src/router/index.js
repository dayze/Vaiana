import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import SearchResults from '@/components/pages/SearchResults'
import Detail from '@/components/pages/Detail'

const VueGoogleMaps = require('vue2-google-maps')

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    v: '',
    libraries: 'places'
  }
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/results',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

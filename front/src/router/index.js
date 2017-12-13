import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import SearchResults from '@/components/pages/SearchResults'
import Detail from '@/components/pages/Detail'

<<<<<<<
HEAD
import UserAccount from '@/components/pages/UserAccount'

======
=
import BookForm from '@/components/pages/BookForm'

>>>>>>>
8
aa4782d44cbae8a3d184a01b90f146c29013f04

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
    },
    {
      path: '/user',
      name: 'UserAccount',
      component: UserAccount
    },
    {
      path: '/bookform',
      name: 'BookForm',
      component: BookForm
    }

  ]
})

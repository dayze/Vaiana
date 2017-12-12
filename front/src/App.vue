<template>
  <div id="app">
    <!-- load header -->
    <navbar></navbar>
    <main>
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
  import Navbar from '@/components/layouts/Navbar'
  import Footer from '@/components/layouts/Footer'

  export default {
    components: {
      Navbar,
      Footer
    },
    name: 'app',
    mounted: function () {
      this.$nextTick(function () {
        let nav = document.querySelector('div[role=navigation]')
        let main = document.querySelector('main')
        let home = document.querySelector('main #home')
        if (home === null) {
          main.style.marginTop = nav.offsetHeight + 'px'
        }
      })
    }
  }
</script>

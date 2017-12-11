<template>
  <div id="app">
    <!-- load header -->
    <navbar></navbar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/layouts/Navbar'

  export default {
    components: {
      Navbar
    },
    name: 'app',
    /* created() {
      let googleMap = document.createElement('script')
      googleMap.setAttribute('src',"https://maps.googleapis.com/maps/api/js")
      document.head.appendChild(googleMap)
    }, */
    mounted: function () {
      this.$nextTick(function () {
        let nav = document.querySelector('div[role=navigation]')
        let main = document.querySelector('main')
        main.style.marginTop = nav.offsetHeight + 'px'
      })
    }
  }
</script>

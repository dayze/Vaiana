<template>
  <div id="app">
    <!-- load header -->
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/layouts/Navbar'

  export default {
    components: {
      Navbar
    },
    name: 'app'
  }
</script>

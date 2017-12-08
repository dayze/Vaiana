<template>
  <div>
    <navbar></navbar>
    <jumbo></jumbo>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Jumbo from '@/components/Jumbo'

  export default {
    components: {
      Navbar,
      Jumbo
    },
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

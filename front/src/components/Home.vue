<template>
  <div>
    <navbar></navbar>
    <search-form></search-form>
  </div>
</template>

<script>
  import SearchForm from '@/components/SearchForm'
  import Navbar from '@/components/Navbar'

  export default {
    components: {
      Navbar,
      SearchForm
    },
    name: 'Home',
    data () {
      return {
        msg: 'Maxime se fait raketté ! =('
      }
    }
  }
</script>

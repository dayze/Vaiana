<template>
  <div>

    <search-form></search-form>
  </div>
</template>

<script>
  import SearchForm from '@/components/SearchForm'

  export default {
    components: {SearchForm},
    name: 'Home',
    component: {
      SearchForm
    },
    data () {
      return {
        msg: 'Maxime se fait raketté ! =('
      }
    }
  }
</script>

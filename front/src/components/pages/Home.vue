<template>
  <div>
    <jumbo></jumbo>
    <carousel-component></carousel-component>
    <carousel-component></carousel-component>
  </div>
</template>

<script>
  import Jumbo from '../layouts/Jumbo.vue'
  import CarouselComponent from '../modules/CarouselComponent.vue'

  export default {
    components: {
      Jumbo,
      CarouselComponent
    },
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>

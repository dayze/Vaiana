<template>
  <div id="home">
    <jumbo></jumbo>
    <carousel-component :images="this.images"></carousel-component>
    <carousel-component :images="this.images"></carousel-component>
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
      return {
        images: []
      }
    },
    created () {
      this.images.push({id: 1, path: 'Message 1'}, {id: 2, path: 'Message 2'})
    }
  }
</script>

<style scoped>

</style>

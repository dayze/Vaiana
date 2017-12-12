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
        images: [{message: 'Message 1'}, {message: 'Message 2'}]
      }
    },
    created () {
      console.log(this.images)
    }
  }
</script>

<style scoped>

</style>

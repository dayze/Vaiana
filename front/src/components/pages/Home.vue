<template>
  <div id="home">
    <jumbo></jumbo>
    <carousel-component :message="this.images"></carousel-component>
    <carousel-component :message="this.images"></carousel-component>
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
    mounted () {
      this.images.push({message: 'Message 1'})
      this.images.push({message: 'Message 2'})
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="home">
    <jumbo></jumbo>
    <carousel-component :images="this.promoHotels"></carousel-component>
    <carousel-component :images="this.promoHotels"></carousel-component>
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
        promoHotels: [],
        newHotels: []
      }
    },
    created () {
      for (let i = 1; i <= 6; i++) {
        this.promoHotels.push({id: i, path: '../../assets/media/fake/promoHotels/hotel-promo' + i + '.jpg'})
      }
    }
  }
</script>

<style scoped>

</style>

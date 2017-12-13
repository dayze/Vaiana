<template>
  <div id="home">
    <jumbo></jumbo>
    <h2 class="align-center">Hôtels en promotion</h2>
    <carousel-component :hotels="this.promoHotels"></carousel-component>
    <h2 class="align-center">Derniers hôtels ajoutés</h2>
    <carousel-component :hotels="this.newHotels"></carousel-component>
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
        this.promoHotels.push({
          id: i,
          name: 'Lorem ipsum',
          city: 'Mimosa City',
          path: '../../assets/media/fake/promoHotels/hotel-promo' + i + '.jpg'
        })
      }
      for (let i = 1; i <= 6; i++) {
        this.newHotels.push({
          id: i,
          name: 'Lorem ipsum',
          city: 'Mimosa City',
          path: '../../assets/media/fake/newHotels/hotel-new-' + i + '.jpg'
        })
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="home">
    <jumbo></jumbo>
    <span class="anchor" id="about"></span>
    <services-layout></services-layout>
    <div class="row bg-clouds">
      <div class="cell-12 margin-50-top margin-50-bottom">
        <h2 class="align-center">Hôtels en promotion</h2>
        <carousel-component :hotels="this.promoHotels"></carousel-component>
      </div>
    </div>
    <div class="row">
      <div class="cell-12 margin-50-top margin-50-bottom">
        <h2 class="align-center">Derniers hôtels ajoutés</h2>
        <carousel-component :hotels="this.newHotels"></carousel-component>
      </div>
    </div>
  </div>
</template>

<script>
  import Jumbo from '../layouts/Jumbo.vue'
  import CarouselComponent from '../modules/CarouselComponent.vue'
  import Icon from 'vue-awesome/components/Icon'
  import ServicesLayout from '../layouts/ServicesLayout.vue'

  export default {
    components: {
      Jumbo,
      CarouselComponent,
      Icon,
      ServicesLayout
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

<style>
  .anchor{
    display:block;
    height:75px; /* this is the height of your header */
    margin-top:-75px; /* this is again negative value of the height of your header */
    visibility:hidden;
  }
</style>

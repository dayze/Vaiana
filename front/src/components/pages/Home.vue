<template>
  <div id="home">
    <jumbo></jumbo>
    <span class="anchor" id="about"></span>
    <div class="row vh-100">
      <div id="services" class="cell-8 margin-auto">
        <h3 class="txt-upper align-center txt-unset">Lorem ipsum dolor sit amet</h3>
        <p class="align-center"> Donec porta rutrum risus, vitae hendrerit felis mollis vel. Vestibulum lacinia, tellus
          pulvinar aliquet vehicula, odio neque ornare augue, eu malesuada lorem ligula in neque. Curabitur ac interdum
          justo. Morbi ac tristique libero. Cras finibus erat vel diam congue, ut imperdiet dui hendrerit. Cras eu tempus
          eros.</p>
      </div>
    </div>
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

<style>
  .vh-100{
    height: calc(100vh - 75px);
  }
  .anchor{
    display:block;
    height:75px; /* this is the height of your header */
    margin-top:-75px; /* this is again negative value of the height of your header */
    visibility:hidden;
  }
  #services{
    margin-top: 100px;
  }
</style>

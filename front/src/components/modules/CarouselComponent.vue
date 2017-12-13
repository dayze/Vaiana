<template>
  <div class="container margin-auto floats-box">
    <carousel :navigationEnabled="true" :perPageCustom="[[300, 1], [1024, 2]]" paginationActiveColor="#E1B753" paginationColor="#bdc3c7">
      <slide v-for="hotel in this.hotels" :key="hotel.id">
        <router-link :to="{ path: 'results' }">
          <div class="slide margin-auto padding-10">
            <div class="absolute-row-top bg-clouds-opac-7 align-left margin-10 txt-size-small-s">
              <h3 class="margin color-deep-blue">{{hotel.name}} - {{hotel.city}}</h3>
              <p class="txt-size-small margin color-deep-blue">Very attracive price</p>
            </div>
            <img class="responsive-img" :src="getImgUrl(hotel)">
          </div>
        </router-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide
    },
    name: 'CarouselComponent',
    props: {hotels: Array},
    data () {
      return {}
    },
    mounted () {
      console.log(this.hotels)
    },
    methods: {
      getImgUrl (hotel) {
        return require('../../assets/media/fake/promoHotels/hotel-promo' + hotel.id + '.jpg')
      }
    }
  }
</script>

<style scoped>
  .VueCarousel-slide {
    position: relative;
  }

  .container {
    width: 75%;
  }
</style>

<template>
  <div class="container">
    <carousel :navigationEnabled="true" :perPageCustom="[[300, 1], [1024, 2]]">
      <slide v-for="hotel in this.hotels" :key="hotel.id">
        <div class="slide">
          <div class="absolute-row-top bg-clouds-opac-7 align-left margin">
            <p class="margin-5 color-deep-blue">{{hotel.name}} - {{hotel.city}}</p>
            <p class="txt-size-small margin-5 color-deep-blue">Very attracive price</p>
          </div>
          <img class="responsive-img" :src="getImgUrl(hotel)">
        </div>
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
    color: #ffffff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
  }

  .container {
    width: 75%;
    margin: 15px auto;
    padding-bottom: 75px;
  }

  .slide {
    margin: auto;
    padding: 10px;
  }
</style>

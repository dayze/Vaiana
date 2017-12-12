<template>
  <div class="container">
    <carousel :navigationEnabled="true" :perPageCustom="[[300, 1], [768, 3], [1024, 4]]">
      <slide v-for="image in this.images">
        <div class="slide">
          <a href="https://placeholder.com">
            <img class="responsive-img" src="http://via.placeholder.com/350x150">
          </a>
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
    props: {message: String},
    data () {
      return {}
    },
    mounted () {
      console.log(this.images)
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
    min-height: 100px;
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

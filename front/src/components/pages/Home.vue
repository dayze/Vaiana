<template>
  <div>
    <jumbo></jumbo>
    <div class="container">
      <carousel :navigationEnabled="true" :perPageCustom="[[300, 1], [768, 3], [1024, 4]]">
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
      </carousel>
    </div>
    <div class="container">
      <carousel :navigationEnabled="true" :perPageCustom="[[300, 1], [768, 3], [1024, 4]]">
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
        <slide>
          <div class="slide"><a href="https://placeholder.com"><img class="responsive-img"
                                                                    src="http://via.placeholder.com/350x150"></a></div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  import Jumbo from '../layouts/Jumbo.vue'
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Jumbo,
      Carousel,
      Slide
    },
    name: 'Home',
    data () {
      return {}
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
  }
</style>

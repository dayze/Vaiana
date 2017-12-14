<template>
  <div class="bg-clouds ">
    <div class="container overlay margin-auto floats-box">
      <div class="info absolute-row-top bg-clouds-opac-7 txt-size-small-s">
        <h3 class="name margin color-deep-blue">
          {{this.name}}
        </h3>
        <p class="city margin color-deep-blue">
          {{this.city}}
        </p>
      </div>
      <carousel :navigationEnabled="true" :perPage="1" paginationActiveColor="#E1B753"
                paginationColor="#bdc3c7">
        <slide v-for="image in this.images" :key="image.id">
          <div class="slide margin-auto">
            <img class="width-100" :src="getImgUrl(image)">
          </div>
        </slide>
      </carousel>
    </div>
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
    props: {
      images: Array,
      name: String,
      city: String
    },
    data () {
      return {}
    },
    methods: {
      getImgUrl (image) {
        return require('../../assets/media/fake/detailedRoom/room' + image.id + '.jpeg')
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 50%;
  }
</style>

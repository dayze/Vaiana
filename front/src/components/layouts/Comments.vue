<template>
  <div id="comments" class="row margin-bottom">
    <div v-for="person in persons" :key="person.id" class="cell-6 cell-12-m">
      <div class="comment">
        <div class="header flex flex-column flex-x-center flex-y-center">
          <img :src="getImgUrl(person)" class="circle margin">
          <star-ratings></star-ratings>
          <h4 class="margin">{{person.name}}</h4>
          <h5 class="margin">{{person.date}}</h5>
        </div>
        <div class="Comment">
          {{person.comment}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StarRatings from '../modules/StarRatings'

  export default {
    components: {
      StarRatings
    },
    name: 'Comments',
    props: {persons: Array},
    methods: {
      getImgUrl (person) {
        return require('../../assets/media/fake/persons/person' + person.id + '.jpg')
      }
    }
  }
</script>

<style scoped>
  #comments > div:last-child {
    margin: auto;
  }
</style>

<template>
  <div id="comments" class="row margin">
    <div class="cell-12">
      <h2 class="color-green-lagoon">Commentaires</h2>
    </div>
    <div v-for="person in persons" :key="person.id" class="cell-4 cell-12-m border-green-lagoon-bottom">
      <div class="comment">
        <div class="header flex flex-column flex-x-center flex-y-center">
          <img :src="getImgUrl(person)" class="circle margin">
          <star-ratings></star-ratings>
          <h4 class="margin">{{person.name}}</h4>
          <h5 class="margin">{{person.date}}</h5>
        </div>
        <div class="comment align-justify">
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

<template>
  <div id="comments" class="row">
    <div v-for="person in this.persons" :key="person.id" class="cell-6">
      <div class="comment">
        <div class="header flex flex-column flex-x-center flex-y-center">
          <img :src="getImgUrl(person)" class="circle">
          <star-ratings></star-ratings>
          <h4></h4>
        </div>
        <div class="Comment">

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
    method: {
      getImgUrl (person) {
        return require('../../assets/media/fake/persons/person' + person.id + '.jpg')
      }
    }
  }
</script>

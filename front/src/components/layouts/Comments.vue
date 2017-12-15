<template>
  <div id="comments" class="row margin">
    <h2 class="color-green-lagoon">Commentaires</h2>
      <div class="cell-12 margin-auto flex">
        <div class="cell-8 cell-12-m margin-auto">
          <div>
            <form method="post" class="flex-form styled-form padding padding-0-bottom">
              <div class="field-box">
                <input type="text" name="firstname" value="John" required="required" disabled>
              </div>
              <div class="field-box">
                <input type="text" name="name" value="Doe" required="required" disabled>
              </div>
              <div class="field-box">
            <textarea class="margin-auto border-clouds round padding width-100" rows="10" type="text" name="comment"
                      placeholder="Entrez un commentaire" required="required"></textarea>
              </div>
              <div class="actions-box">
                <input type="submit" value="Envoyer"
                       class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-for="person in persons" :key="person.id" class="cell-4 cell-12-m border-green-lagoon-bottom">
        <div class="comment">
          <div class="header flex flex-column flex-x-center flex-y-center">
            <img :src="getImgUrl(person)" class="circle margin">
            <star-ratings :note="4"></star-ratings>
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

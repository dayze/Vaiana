<template>
  <div id="jumbo">
    <div class="blur flex flex-column flex-y-center flex-x-center padding-50">
      <h1>Réservez dès maintenant une chambre d'hôtel en journée</h1>
      <div
        class="anim-forward padding round align-center transition-3">
        <search-form></search-form>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchForm from '@/components/layouts/SearchForm'

  export default {
    components: {
      SearchForm
    },
    name: 'Jumbo'
  }
</script>

<style scoped>
  #jumbo {
    /* background-position-y: -150px;*/
    min-height: 400px;
    height: 100vh;
    background-size: cover;
    background: url(../../assets/media/img/pexels-photo-97904.jpeg) fixed center;
  }

  #jumbo h1 {
    text-align: center;
    color: white;
    font-weight: lighter;
    text-transform: uppercase;
  }

  .blur {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    padding-top: 74px;
  }
</style>

<template>
  <div id="jumbo" class="padding-50-top-bottom">
    <div class="row flex-x-center">
      <div
        class="cell-4 c-6-xl c-8-l c-10-m c-12-s anim-forward padding bg-yang-opac-8 round align-center transition-3 shaded-box">
        <h1 class="margin-0 margin-15-bottom txt-size-big txt-size-medium-s transition-3 txt-unset">
          Une chambre pour la journée ?</h1>
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
    background: url('../../assets/media/img/pexels-photo-271639.jpeg') fixed center;
    min-height: 400px;
    background-size: cover;
  }
</style>

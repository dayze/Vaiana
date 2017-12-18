<template>
  <div class="rating">
  <span v-for="i in this.note" class="active">★</span><!--
    --><span v-for="i in 5-this.note">★</span>
</div>
</template>

<script>
  export default {
    name: 'StarRatings',
    props: {
      note: Number
    }
  }
</script>

<style scoped>
  /*.rating {
    direction: rtl;
  }*/

  .rating span {
    color: #c0c0c0;
    text-decoration: none;
    font-size: 2em;
    transition: color .2s;
  }

  .rating .active {
    color: #E1B753;
  }

  /*.rating span:hover,
  .rating span:focus,
  .rating span:hover ~ span,
  .rating span:focus ~ span {
    color: #E1B753;
    cursor: pointer;
  }*/
</style>

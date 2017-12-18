<template>
  <div class="rating align-left"><!--
 		--><a href="#5" title="Give 5 stars">★</a><!--
 		--><a href="#4" title="Give 4 stars">★</a><!--
 		--><a href="#3" title="Give 3 stars">★</a><!--
 		--><a href="#2" title="Give 2 stars">★</a><!--
 		--><a href="#1" title="Give 1 star">★</a>
  </div>
</template>

<script>
  export default {
    name: 'StarRatingable'
  }
</script>

<style scoped>
  .rating {
    direction: rtl;
  }

  .rating a {
    color: #c0c0c0;
    text-decoration: none;
    font-size: 2em;
    transition: color .2s;
  }

  .rating a:hover,
  .rating a:focus,
  .rating a:hover ~ a,
  .rating a:focus ~ a {
    color: #E1B753;
    cursor: pointer;
  }

</style>

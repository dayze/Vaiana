<template>
  <div class="show hide-s border-right border-silver-right" id="filter-desktop">
    <form class="flex-form flex-column styled-form">
      <h4>Classement</h4>
      <ul class="margin-0 padding-0 list-unstyled">
        <li><input id="ranking-5-star" class="cursor-pointer" type="checkbox"/><label for="ranking-5-star">5 étoiles</label></li>
        <li><input id="ranking-4-star" class="cursor-pointer" type="checkbox"/><label for="ranking-4-star">4 étoiles</label></li>
        <li><input id="ranking-3-star" class="cursor-pointer" type="checkbox"/><label for="ranking-3-star">3 étoiles</label></li>
        <li><input id="ranking-2-star" class="cursor-pointer" type="checkbox"/><label for="ranking-2-star">2 étoiles</label></li>
        <li><input id="ranking-1-star" class="cursor-pointer" type="checkbox"/><label for="ranking-1-star">1 étoile</label></li>
      </ul>
      <h4>Avis client</h4>
      <ul class="margin-0 padding-0 list-unstyled">
        <li>
          <div class="rating">
            <a><span class="fill-star">★</span><span class="fill-star">★</span><span class="fill-star">★</span><span
              class="fill-star">★</span><span>★</span></a>
          </div>
          <div class="rating">
            <a><span class="fill-star">★</span><span class="fill-star">★</span><span
              class="fill-star">★</span><span>★</span><span>★</span></a>
          </div>
          <div class="rating">
            <a><span class="fill-star">★</span><span
              class="fill-star">★</span><span>★</span><span>★</span><span>★</span></a>
          </div>
          <div class="rating">
            <a><span class="fill-star">★</span><span>★</span><span>★</span><span>★</span><span>★</span></a>
          </div>
        </li>
      </ul>
      <h4>Services</h4>
      <ul class="margin-0 padding-0 list-unstyled">
        <li><input id="service-spa" class="cursor-pointer" type="checkbox"/><label for="service-spa">Spa</label></li>
        <li><input id="service-swimming-pool" class="cursor-pointer" type="checkbox"/><label for="service-swimming-pool">Piscine</label></li>
        <li><input id="service-restaurant" class="cursor-pointer" type="checkbox"/><label for="service-restaurant">Restaurant</label></li>
        <li><input id="service-hair dryer" class="cursor-pointer" type="checkbox"/><label for="service-hair dryer">Sèche-cheveux</label></li>
      </ul>
      <h4>Prix</h4>
      <ul class="price margin-0 padding-0 list-unstyled">
        <li><input id="price-min" type="number" placeholder="min"/></li>
        <li><input id="price-max" type="number" placeholder="max"/></li>
      </ul>
    </form>
  </div>
</template>

<script>
  import StarRatings from '../modules/StarRatings.vue'

  export default {
    components: {
      StarRatings
    }
  }
</script>
<style>
  #filter-desktop {
    margin: auto;
    padding: 25px;
  }

  #filter-desktop h4 {
    margin: 0 0 5px;
  }

  #filter-desktop ul {
    margin: 0 0 20px;
  }

  .rating span {
    text-decoration: none;
    font-size: 22px;
    transition: color .2s;
  }

  .rating span.fill-star {
    color: orange;
  }

  .rating span:not(.fill-star) {
    color: #C0C0C0;
  }

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
</style>

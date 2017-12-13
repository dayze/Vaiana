<template>
  <div class="show hide-s" id="filter-desktop">
    <form>
    <h4>Classement</h4>
    <ul>
      <li><input id="ranking-5-star" type="checkbox"/><label for="ranking-5-star">5 étoiles</label></li>
      <li><input id="ranking-4-star" type="checkbox"/><label for="ranking-4-star">4 étoiles</label></li>
      <li><input id="ranking-3-star" type="checkbox"/><label for="ranking-3-star">3 étoiles</label></li>
      <li><input id="ranking-2-star" type="checkbox"/><label for="ranking-2-star">2 étoiles</label></li>
      <li><input id="ranking-1-star" type="checkbox"/><label for="ranking-1-star">1 étoile</label></li>
    </ul>
    <h4>Avis client</h4>
    <ul>
      <li>
        <div class="rating">
          <a><span id="orange">★</span><span id="orange">★</span><span id="orange">★</span><span id="orange">★</span><span>★</span></a>
        </div>
        <div class="rating">
          <a><span id="orange">★</span><span id="orange">★</span><span id="orange">★</span><span>★</span><span>★</span></a>
        </div>
        <div class="rating">
          <a><span id="orange">★</span><span id="orange">★</span><span>★</span><span>★</span><span>★</span></a>
        </div>
        <div class="rating">
          <a><span id="orange">★</span><span>★</span><span>★</span><span>★</span><span>★</span></a>
        </div>
      </li>
    </ul>
    <h4>Services</h4>
    <ul>
      <li><input id="service-spa" type="checkbox"/><label for="service-spa">Spa</label></li>
      <li><input id="service-swimming-pool" type="checkbox"/><label for="service-swimming-pool">Piscine</label></li>
      <li><input id="service-restaurant" type="checkbox"/><label for="service-restaurant">Restaurant</label></li>
      <li><input id="service-hair dryer" type="checkbox"/><label for="service-hair dryer">Sèche-cheveux</label></li>
    </ul>
    <h4>Prix</h4>
    <ul>
      <div class="price">
        <li><input id="price-min" type="number" placeholder="min"/></li>
        <li><input id="price-max" type="number" placeholder="max"/></li>
      </div>
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
    float: left;
    margin: auto;
    padding: 25px;
    border-right: 1px solid #BDC3C7;
  }

  #filter-desktop h4 {
    padding: 0;
    margin: 0 0 5px;
  }

  #filter-desktop ul {
    padding: 0;
    margin: 0 0 20px;
  }

  #filter-desktop li {
    list-style: none;
  }


  .rating {
    direction: ltr;
  }
  .rating span {
    color: #c0c0c0;
    text-decoration: none;
    font-size: 2em;
    transition: color .2s;
  }
  #orange{
    color: orange;
  }

  .price input{
    height: 30px;
  }

  input[type="checkbox"] {
    width:15px;
    height:15px;
    cursor:pointer;
  }

</style>

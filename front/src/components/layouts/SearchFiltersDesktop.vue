<template>
  <div class="padding-30 show hide-s" id="filter-desktop">
    <ul>
      <li>Classement :</li>
      <li><input id="ranking-5-star" type="checkbox"/><label for="ranking-5-star">5 étoiles</label></li>
      <li><input id="ranking-4-star" type="checkbox"/><label for="ranking-4-star">4 étoiles</label></li>
      <li><input id="ranking-3-star" type="checkbox"/><label for="ranking-3-star">3 étoiles</label></li>
      <li><input id="ranking-2-star" type="checkbox"/><label for="ranking-2-star">2 étoiles</label></li>
      <li><input id="ranking-1-star" type="checkbox"/><label for="ranking-1-star">1 étoile</label></li>
    </ul>
    <ul>
      <li>Avis client :</li>
      <li><input id="reviews-4-more" type="checkbox"/><label for="reviews-4-more">4/5 et +</label></li>
      <li><input id="reviews-3-more" type="checkbox"/><label for="reviews-3-more">3/5 et +</label></li>
      <li><input id="reviews-2-more" type="checkbox"/><label for="reviews-2-more">2/5 et +</label></li>
      <li><input id="reviews-1-more" type="checkbox"/><label for="reviews-1-more">1/5 et +</label></li>
    </ul>
    <ul>
      <li>Services :</li>
      <li><input id="service-spa" type="checkbox"/><label for="service-spa">Spa</label></li>
      <li><input id="service-swimming-pool" type="checkbox"/><label for="service-swimming-pool">Piscine</label></li>
      <li><input id="service-restaurant" type="checkbox"/><label for="service-restaurant">Restaurant</label></li>
      <li><input id="service-hair dryer" type="checkbox"/><label for="service-hair dryer">Sèche-cheveux</label></li>
    </ul>
    <label for="price-min">Prix :</label>
    <input id="price-min" type="number" placeholder="min"/>
    <input id="price-max" type="number" placeholder="max"/>
  </div>
</template>

<script>
  export default {}
</script>
<style>
  #filter-desktop {
    width: 200px;
    height: calc(100vh - 74px);
    border-right: 1px solid #BDC3C7;
  }

  #filter-desktop ul {
    padding: 0;
    margin: 0 0 20px;
  }
</style>

<template>
  <div class="hide fixed flex-m flex-x-center flex-y-center flex-column width-100" id="filter-slide">
    <div id="filter" class="border-bottom border-silver-bottom width-100">
      <form class="flex-form flex-row styled-form">
        <div class="flex flex-column flex-y-center width-50">
          <h4>Classement</h4>
          <ul class="margin-0 padding-0 list-unstyled">
            <li><input id="ranking-5-star" class="cursor-pointer" type="checkbox"/><label for="ranking-5-star">5 étoiles</label></li>
            <li><input id="ranking-4-star" class="cursor-pointer" type="checkbox"/><label for="ranking-4-star">4 étoiles</label></li>
            <li><input id="ranking-3-star" class="cursor-pointer" type="checkbox"/><label for="ranking-3-star">3 étoiles</label></li>
            <li><input id="ranking-2-star" class="cursor-pointer" type="checkbox"/><label for="ranking-2-star">2 étoiles</label></li>
            <li><input id="ranking-1-star" class="cursor-pointer" type="checkbox"/><label for="ranking-1-star">1 étoile</label></li>
          </ul>
        </div>
        <div class="flex flex-column flex-y-center width-50">
          <h4>Avis client</h4>
          <star-ratingable class="margin-left"></star-ratingable>
        </div>
        <div class="flex flex-column flex-y-center width-50">
          <h4>Services</h4>
          <ul class="margin-0 padding-0 list-unstyled">
            <li><input id="service-spa" class="cursor-pointer" type="checkbox"/><label for="service-spa">Spa</label></li>
            <li><input id="service-swimming-pool" class="cursor-pointer" type="checkbox"/><label for="service-swimming-pool">Piscine</label>
            </li>
            <li><input id="service-restaurant" class="cursor-pointer" type="checkbox"/><label for="service-restaurant">Restaurant</label></li>
            <li><input id="service-hair dryer" class="cursor-pointer" type="checkbox"/><label for="service-hair dryer">Sèche-cheveux</label>
            </li>
          </ul>
        </div>
        <div class="flex flex-column flex-y-center width-50">
          <h4>Prix</h4>
          <ul class="margin-0 padding-0 list-unstyled price">
            <li><input id="price-min" type="number" placeholder="min"/></li>
            <li><input id="price-max" type="number" placeholder="max"/></li>
          </ul>
        </div>
      </form>
    </div>
    <button class="padding color-clouds border-bottom border-silver-bottom border-right border-silver-right border-left border-silver-left border-none-top cursor-pointer">Filtres</button>
  </div>
</template>

<script>
  import Utils from '@/utils'
  import StarRatingable from '../modules/StarRatingable'

  export default {
    components: {
      StarRatingable
    },
    mounted () {
      this.filterIsDiplayed = false
      hideFilters()
      window.addEventListener('resize', hideFilters)
      let filterButton = document.querySelector('#filter-slide button')
      filterButton.addEventListener('click', () => {
        if (this.filterIsDiplayed) {
          hideFilters()
        } else {
          showFilters()
        }
        this.filterIsDiplayed = !this.filterIsDiplayed
      })
    }
  }

  function hideFilters () {
    let filterSlide = document.querySelector('#filter-slide')
    let navHeight = Utils.getNavHeight()
    let filterHeight = document.querySelector('#filter').offsetHeight
    filterSlide.style.top = navHeight > filterHeight ? (navHeight - filterHeight) + 'px' : '-' + (filterHeight - navHeight) + 'px'
  }

  function showFilters () {
    let filterSlide = document.querySelector('#filter-slide')
    let navHeight = Utils.getNavHeight()
    filterSlide.style.top = navHeight + 'px'
  }
</script>
<style>
  #filter-slide {
    z-index: 1;
    transition: top 0.2s;
  }

  #filter {
    background-color: #FFFFFF;
    padding: 10px;
  }

  #filter form {
    max-height: calc(100vh - 150px);
    overflow-y: scroll;
    padding-bottom: 22px;
  }

  #filter-slide button {
    outline: none;
    background-color: #FFFFFF;
    color: inherit;
    border-radius: 0 0 5px 5px;
    width: 100px;
    padding: 15px;
  }

  @media screen and (max-width: 400px) {
    #filter form > div {
      width: 100%;
    }
  }
</style>

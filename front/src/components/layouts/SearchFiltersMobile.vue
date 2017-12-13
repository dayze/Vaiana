<template>
  <div class="hide fixed flex-s flex-x-center flex-y-center flex-column" id="filter-slide">
    <div id="filter">
      <form class="flex-form flex-row styled-form">
        <div class="flex flex-column flex-y-center">
          <h4>Classement</h4>
          <ul class="margin-0 padding-0 list-unstyled">
            <li><input id="ranking-5-star" type="checkbox"/><label for="ranking-5-star">5 étoiles</label></li>
            <li><input id="ranking-4-star" type="checkbox"/><label for="ranking-4-star">4 étoiles</label></li>
            <li><input id="ranking-3-star" type="checkbox"/><label for="ranking-3-star">3 étoiles</label></li>
            <li><input id="ranking-2-star" type="checkbox"/><label for="ranking-2-star">2 étoiles</label></li>
            <li><input id="ranking-1-star" type="checkbox"/><label for="ranking-1-star">1 étoile</label></li>
          </ul>
        </div>
        <div class="flex flex-column flex-y-center">
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
        </div>
        <div class="flex flex-column flex-y-center">
          <h4>Services</h4>
          <ul class="margin-0 padding-0 list-unstyled">
            <li><input id="service-spa" type="checkbox"/><label for="service-spa">Spa</label></li>
            <li><input id="service-swimming-pool" type="checkbox"/><label for="service-swimming-pool">Piscine</label>
            </li>
            <li><input id="service-restaurant" type="checkbox"/><label for="service-restaurant">Restaurant</label></li>
            <li><input id="service-hair dryer" type="checkbox"/><label for="service-hair dryer">Sèche-cheveux</label>
            </li>
          </ul>
        </div>
        <div class="flex flex-column flex-y-center">
          <h4>Prix</h4>
          <ul class="margin-0 padding-0 list-unstyled price">
            <li><input id="price-min" type="number" placeholder="min"/></li>
            <li><input id="price-max" type="number" placeholder="max"/></li>
          </ul>
        </div>
      </form>
    </div>
    <button class="padding color-clouds">Filtres</button>
  </div>
</template>

<script>
  import Utils from '@/utils'

  export default {
    mounted () {
      console.log('B')
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
    width: 100%;
    transition: top 0.2s;
  }

  #filter {
    background-color: #FFFFFF;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #BDC3C7;
  }

  #filter form {
    display: flex;
    flex-wrap: wrap;
    max-height: calc(100vh - 150px);
    overflow-y: scroll;
    padding-bottom: 22px;
  }

  #filter form > div {
    width: 50%;
  }

  #filter-slide button {
    background-color: #FFFFFF;
    color: inherit;
    cursor: pointer;
    border-radius: 0 0 5px 5px;
    border-top: none;
    border-bottom: 1px solid #BDC3C7;
    border-right: 1px solid #BDC3C7;
    border-left: 1px solid #BDC3C7;
    width: 100px;
    padding: 15px;
  }

  @media screen and (max-width: 400px) {
    #filter form > div {
      width: 100%;
    }
  }
</style>

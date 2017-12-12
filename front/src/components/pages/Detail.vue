<template>
  <div>
    <div id="carrousel" class="row align-center bg-clouds">
      <div class="row-column flex-y-center flex-x-center cell-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.2 477.2" class="APP_carrousel_arrows cursor-pointer">
          <path
            d="M145.2 238.6l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1L145.2 238.6z"/>
        </svg>
      </div>
      <div class="cell-8-margin-0 APP_carrousel_window">
        <figure>
          <img class="responsive-img" src="../../assets/media/img/180b2f6e_original.jpg" alt="dd"/>
          <figcaption>
            <div class="absolute-row-top bg-clouds-opac-7 align-left padding">
              <h1 class="margin-5">The Joshua Tree House</h1>
              <svg xmlns="http://www.w3.org/2000/svg" class="APP_default_gray" width="20" height="20"
                   viewBox="0 0 512 512">
                <path
                  d="M256 0C153.8 0 70.6 83.2 70.6 185.4c0 126.9 165.9 313.2 173 321 6.6 7.4 18.2 7.4 24.8 0 7.1-7.9 173-194.1 173-321C441.4 83.2 358.2 0 256 0zM256 278.7c-51.4 0-93.3-41.9-93.3-93.3S204.6 92.1 256 92.1s93.3 41.9 93.3 93.3S307.4 278.7 256 278.7z"/>
              </svg>
              <h2 class="inline-block margin-0">Ouistreham</h2>
            </div>
            <div class="absolute-row-bottom align-center padding">
              <ul class="list-inline list-unstyled">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <circle class="circle-active" cx="10" cy="10" r="8"/>
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <circle class="circle-obj" cx="10" cy="10" r="8"/>
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <circle class="circle-obj" cx="10" cy="10" r="8"/>
                  </svg>
                </li>
              </ul>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="row-column flex-y-center flex-x-center cell-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.2 477.2"
             class="APP_carrousel_arrows backwards cursor-pointer">
          <path
            d="M145.2 238.6l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1L145.2 238.6z"/>
        </svg>
      </div>
    </div>

    <div class="container margin-auto">
      <div class="row">
        <div class="cell-12">
          <nav class="border-bottom border-silver padding-10-top-bottom">
            <ul class="list-inline list-unstyled">
              <li class="link-active">Présentation</li>
              <li>Commentaires</li>
              <li>Contact</li>
              <li>Emplacement</li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="cell-8">
          <h2>The Joshua Tree House</h2>
          <h3>Ouistreham</h3>
          <ul class="list-inline list-unstyled">
            <li>
              3 personnes
            </li>
            <li>
              2 lits (1 lit double et 1 lit simple)
            </li>
          </ul>
          <p class="padding-10-top-bottom">
            Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram
            pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem
            revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela
            securitas poterat in solido locari cunctorum.
          </p>
        </div>

        <div class="cell-4 bg-clouds">

        </div>

      </div>

      <!-- MAP -->
      <div class="row">
        <div class="cell-12">
          <div class="map-container">
            <google-map-component :latitude="49.276656" :longitude="-0.2586579999999685"></google-map-component>
          </div>
        </div>
      </div>

      <!-- Comments -->
      <div class="row">
        <div class="cell-12">

        </div>
      </div>

      <!-- Contact -->
      <div class="row">
        <div class="cell-12">

        </div>
      </div>

      <!-- Position -->
      <div class="row">
        <div class="cell-12">

        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import GoogleMapComponent from '../modules/GoogleMap.vue'

  export default {
    components: {
      GoogleMapComponent
    },
    name: 'Detail',
    data () {
      return {}
    }
  }
</script>

<style>
  .APP_default_gray {
    fill: #404852;
    color: #404852;
  }

  .APP_carrousel_arrows {
    max-width: 45px;
    fill: #75B1A9;
  }

  .APP_carrousel_window {
    height: 75vh;
    overflow: hidden;
  }

  .circle-obj {
    fill: white;
  }

  .circle-active {
    fill: #D9B44A;
  }

  .link-active {
    color: #75B1A9;
  }

  .map-container {
    width: 100%;
    height: 50vh;
  }
</style>

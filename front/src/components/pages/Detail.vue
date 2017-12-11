<template>
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
            <h1>The Joshua Tree House</h1>
            <h2>Ouistreham</h2>
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
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {}
    }
  }
</script>

<style>
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
</style>

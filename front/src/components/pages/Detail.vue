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
          <img class="responsive-img" src="../../assets/media/img/nik-lanus-41808.jpg" alt="dd"/>
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
              <li>
                <a href="#presentation" title="Voir la présentation" class="hover-color-sky">Présentation</a>
              </li>
              <li>
                <a href="#services" title="Voir les services" class="hover-color-sky">Services</a>
              </li>
              <li>
                <a href="#comments" title="Voir les commentaires" class="hover-color-sky">Commentaires</a>
              </li>
              <li>
                <a href="#contact" title="Contacter l'hôtel" class="hover-color-sky">Contact</a>
              </li>
              <li>
                <a href="#map" title="Voir l'emplacement" class="hover-color-sky">Présentation</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div id="presentation" class="row">
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

      <!-- Services -->
      <div id="services" class="row">
        <div class="cell-12">
          <div class="tabset">

            <!-- Tab 1 -->
            <input type="radio" name="tabset" id="tab1" aria-controls="equipments" checked>
            <label for="tab1" @click="displayLess()">Equipements</label>

            <!-- Tab 2 -->
            <input type="radio" name="tabset" id="tab2" aria-controls="familyEquipments">
            <label for="tab2" @click="displayLess()">Equipements pour la famille</label>

            <div class="tab-panels">

              <section id="equipments" class="tab-panel">
                <h2>Equipements</h2>
                <div class="row">
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-12">
                    <span class="inline-block cursor-pointer" @click="displayMore">
                       <span>Afficher plus d'équipements </span>
                    <svg viewBox="0 0 18 18" height="10px" width="10px">
                      <path
                        d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"></path>
                    </svg>
                    </span>
                  </div>
                  <div class="cell-12" v-if="openMoreServices">
                    coucou
                  </div>
                </div>

              </section>

              <section id="familyEquipments" class="tab-panel">
                <h2>Equipements pour la famille</h2>
                <div class="row">
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-12">
                    <span class="inline-block cursor-pointer" @click="displayMore">
                       <span>Afficher plus d'équipements </span>
                    <svg viewBox="0 0 18 18" height="10px" width="10px">
                      <path
                        d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"></path>
                    </svg>
                    </span>
                  </div>
                  <div class="cell-12" v-if="openMoreServices">
                    coucou
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </div>

      <!-- Comments -->
      <div id="comments" class="row">
        <div class="cell-12">

        </div>
      </div>

      <!-- Contact -->
      <div id="contact" class="row">
        <div class="cell-12">
        </div>
        <!-- MAP -->
        <div id="map" class="cell-12">
          <div class="map-container">
            <google-map-component :latitude="49.276656" :longitude="-0.2586579999999685"></google-map-component>
          </div>
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
      return {
        openMoreServices: false
      }
    },
    methods: {
      displayMore () {
        this.openMoreServices = !this.openMoreServices
      },
      displayLess () {
        this.openMoreServices = false
      }
    }
  }
</script>

<style>

  /* TABS */

  .tabset > input[type="radio"] {
    position: absolute;
    left: -200vw;
  }

  .tabset .tab-panel {
    display: none;
  }

  .tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
  .tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
  .tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
  .tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
  .tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
  .tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
    display: block;
  }

  .tabset > label {
    position: relative;
    display: inline-block;
    padding: 15px 15px 25px;
    border: 1px solid transparent;
    border-bottom: 0;
    cursor: pointer;
    font-weight: 600;
  }

  .tabset > label::after {
    content: "";
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: 22px;
    height: 4px;
    background: #8d8d8d;
  }

  .tabset > label:hover,
  .tabset > input:focus + label {
    color: #06c;
  }

  .tabset > label:hover::after,
  .tabset > input:focus + label::after,
  .tabset > input:checked + label::after {
    background: #06c;
  }

  .tabset > input:checked + label {
    border-color: #ccc;
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
  }

  .tab-panel {
    padding: 30px 0;
    border-top: 1px solid #ccc;
  }

  /* END TABS */

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

  .map-container {
    width: 100%;
    height: 50vh;
  }
</style>

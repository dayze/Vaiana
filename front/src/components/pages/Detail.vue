<template>
  <div>
    <!-- ### Carousel -->
    <carousel-component-detailed :name="this.name" :city="this.city"
                                 :images="this.images"></carousel-component-detailed>
    <!-- ### Services -->
    <div class="container margin-auto">
      <div class="row">
        <div class="cell-12">
          <nav class="border-bottom border-silver padding-10-top-bottom">
            <ul class="list-inline list-unstyled">
              <li>
                <a href="#presentation" title="Voir la présentation" class="color-deep-blue hover-color-green-lagoon"
                   v-smooth-scroll="{duration: 1000, offset: -50}">Présentation</a>
              </li>
              <li>
                <a href="#services" title="Voir les services"
                   class="color-deep-blue hover-color-green-lagoon" v-smooth-scroll="{duration: 1000, offset: -50}">Services</a>
              </li>
              <li>
                <a href="#comments" title="Voir les commentaires" class="color-deep-blue hover-color-green-lagoon"
                   v-smooth-scroll="{duration: 1000, offset: -50}">Commentaires</a>
              </li>
              <li>
                <a href="#contact" title="Contacter l'hôtel"
                   class="color-deep-blue hover-color-green-lagoon" v-smooth-scroll="{duration: 1000, offset: -50}">Contact</a>
              </li>
              <li>
                <a href="#map" title="Voir l'emplacement"
                   class="color-deep-blue hover-color-green-lagoon" v-smooth-scroll="{duration: 1000, offset: -90}">Emplacement</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- ### Presentation -->
      <div id="presentation" class="row">
        <div class="row">
          <div class="cell-8 c-12-s padding-right padding-0-s">
            <h2 class="color-green-lagoon">Présentation</h2>
            <h3 class="margin-0 inline-block">The Joshua Tree House</h3>
            <svg id="add-to-favorites" class="margin-left grey-icon" xmlns="http://www.w3.org/2000/svg" width="30"
                 height="30"
                 viewBox="0 0 512 512">
              <g>
                <title>Ajouter à mes favoris</title>
                <path
                  d="M461.46 63.908c-32.596-32.486-75.818-50.279-121.632-50.138-29.542.1-58.327 7.738-83.828 22.17-25.506-14.435-54.3-22.074-83.846-22.17l-.572-.001c-45.622 0-88.595 17.796-121.048 50.145C17.946 96.396 0 139.524 0 185.354c0 43.787 16.495 85.478 46.444 117.392l165.585 176.447c11.352 12.098 27.377 19.037 43.969 19.038 16.593 0 32.62-6.939 43.973-19.037l165.585-176.448C495.505 270.832 512 229.142 512 185.354c0-45.833-17.949-88.964-50.54-121.446zm-17.78 218.309L278.094 458.666a30.411 30.411 0 0 1-22.095 9.565 30.412 30.412 0 0 1-22.094-9.566L68.318 282.216C43.609 255.885 30 221.485 30 185.354c0-37.799 14.813-73.381 41.713-100.193 26.791-26.704 62.242-41.393 99.873-41.393l.471.001c26.806.087 52.852 7.692 75.358 21.995 4.833 3.364 11.413 3.691 16.675.315 22.615-14.505 48.839-22.22 75.838-22.311l.486-.001c37.626 0 73.079 14.688 99.868 41.388C467.185 111.968 482 147.553 482 185.354c0 36.131-13.609 70.531-38.32 96.863z"/>
              </g>
            </svg>
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

          <div class="cell-4 bg-clouds align-center c-12-s">
            <h4 class="color-deep-blue">
              <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
              <span class="txt-size-big">45</span>
              <span>€</span>
            </h4>
            <star-ratings :note="4"></star-ratings>
            <a href="#comments" title="Voir les commentaires" class="txt-size-small margin-0-top"
               v-smooth-scroll="{duration: 5000, offset: -50}">Voir tous les avis &rarr;</a>

            <!-- <form onsubmit="toggle()" class="flex-form styled-form padding margin-bottom">
               <div class="field-box">
                 <label for="reservation-date">
                   Votre date d'arrivée :
                 </label>
                 <input id="reservation-date" type="date" name="date" required="required">
               </div>
               <div class="actions-box">
                 <input type="submit" value="Réserver maintenant"
                        class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
               </div>
             </form>-->
            <form class="flex-form styled-form padding margin-top">
              <div class="field-box">
                <label for="reservation-date">
                  Votre date d'arrivée :
                </label>
                <input id="reservation-date" type="date" name="date" required="required">
              </div>
            </form>
            <a class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3 padding"
               @click="toggleModalReservation()">
              Réserver maintenant
            </a>
          </div>

        </div>

      </div>

      <!-- ### Services -->
      <div id="services" class="row">
        <div class="cell-12">
          <h2 class="color-green-lagoon">Services</h2>
        </div>
        <div class="cell-12">
          <div class="tabset">

            <!-- Tab 1 -->
            <input type="radio" name="tabset" id="tab1" aria-controls="equipments" checked="checked">
            <label class="txt-size-small-xs" for="tab1" @click="displayLess()">Equipements</label>

            <!-- Tab 2 -->
            <input type="radio" name="tabset" id="tab2" aria-controls="familyEquipments">
            <label class="txt-size-small-xs" for="tab2" @click="displayLess()">Equipements pour la famille</label>

            <div class="tab-panels">

              <section id="equipments" class="tab-panel">
                <div class="row">
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 612 612">
                      <path
                        d="M306 417.8c-30.8 0-55.9 25-55.9 55.9s25 55.9 55.9 55.9 55.9-25 55.9-55.9S336.8 417.8 306 417.8zM605.4 222.4C530.7 133.4 421.5 82.4 306 82.4S81.3 133.4 6.6 222.4c-9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 17.9 6.6 8 0 15.9-3.4 21.4-10 64.1-76.2 157.6-120 256.7-120 99 0 192.6 43.7 256.7 120 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6C613.8 251.8 615.4 234.2 605.4 222.4zM306 194.2c-82.5 0-160.5 36.4-213.9 99.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 42.7-50.8 105.1-80 171.1-80 66 0 128.4 29.2 171.1 80 5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C466.5 230.6 388.5 194.2 306 194.2zM306 306c-49.6 0-96.3 21.9-128.3 59.9 -9.9 11.8-8.4 29.4 3.4 39.4 5.2 4.4 11.6 6.6 18 6.6 8 0 15.9-3.4 21.4-10 21.4-25.4 52.6-40 85.5-40s64.2 14.6 85.5 40c5.5 6.6 13.5 10 21.4 10 6.4 0 12.7-2.1 18-6.6 11.8-9.9 13.4-27.6 3.4-39.4C402.3 327.8 355.5 306 306 306z"/>
                    </svg>
                    <span class="margin-10-left">Wifi</span>
                  </div>
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 453 453">
                      <path
                        d="M420.1 110.2H280.1l49.7-81.6c4.3-7.1 2.1-16.3-5-20.6 -7.1-4.3-16.3-2.1-20.6 5l-59.2 97.2h-36.9L148.8 13c-4.3-7.1-13.5-9.3-20.6-5 -7.1 4.3-9.3 13.5-5 20.6l49.7 81.6H32.9C14.7 110.2 0 124.9 0 143.1v271.3c0 18.1 14.7 32.9 32.9 32.9h387.3c18.1 0 32.9-14.7 32.9-32.9V143.1C453 124.9 438.3 110.2 420.1 110.2zM317.7 374.9c0 9.9-8 17.9-17.9 17.9H71.2c-9.9 0-17.9-8-17.9-17.9V182.5c0-9.9 8-17.9 17.9-17.9h228.6c9.9 0 17.9 8 17.9 17.9V374.9zM383.8 369.2c-17.1 0-31-13.9-31-31 0-17.1 13.9-31 31-31 17.1 0 31 13.9 31 31S400.9 369.2 383.8 369.2zM383.8 250.2c-17.1 0-31-13.9-31-31s13.9-31 31-31c17.1 0 31 13.9 31 31S400.9 250.2 383.8 250.2z"/>
                    </svg>
                    <span class="margin-10-left">Télévision</span>
                  </div>
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 621.3 621.3">
                      <path
                        d="M352 402.3c-23.8 38.8-70.7 32-85.7 1.4 -39.5 42.9-71.6-1.4-71.6-1.4 7.2 57.2 56 101.4 115.1 101.4 60.1 0 109.5-45.6 115.4-104.2C425.3 399.4 372.4 430.1 352 402.3L352 402.3z"
                        class="a"/>
                      <path
                        d="M310 531.9c-75.9 0-137.5-61.5-137.5-137.5 0-75.9 61.5-137.5 137.5-137.5 75.9 0 137.5 61.6 137.5 137.5C447.4 470.4 385.9 531.9 310 531.9L310 531.9zM66.9 177.5v427.5c0 9 7.6 16.3 17 16.3h453.6c9.4 0 17-7.3 17-16.3V177.5H66.9L66.9 177.5z"
                        class="a"/>
                      <path
                        d="M237.1 97.5c-13.5 0-24.4-10.9-24.4-24.4 0-13.5 10.9-24.4 24.4-24.4 13.5 0 24.4 10.9 24.4 24.4C261.5 86.6 250.6 97.5 237.1 97.5L237.1 97.5zM156.6 97.5c-13.5 0-24.4-10.9-24.4-24.4 0-13.5 10.9-24.4 24.4-24.4 13.5 0 24.4 10.9 24.4 24.4C181 86.6 170.1 97.5 156.6 97.5L156.6 97.5zM537.5 0H83.9c-9.4 0-17 7.9-17 17.6v128.7h487.6V17.6C554.4 7.9 546.8 0 537.5 0L537.5 0z"
                        class="a"/>
                    </svg>
                    <span class="margin-10-left">Machine à laver</span>
                  </div>
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 384 384">
                      <path
                        d="M144.5 76.2c-15.4-14.1-35.8-22.7-58.2-22.7C38.7 53.5 0 92.2 0 139.7c0 30.2 15.6 56.8 39.2 72.2 6.2 27.2 17.1 53.9 27.9 78 9.8 21.7 23.9 48.9 53 38 24.3-9.1 24.2-33.2 16.6-53.5 -5.9-15.6-13.2-35.2-17.9-54.9 13.6-5.6 25.5-14.6 34.6-25.9l99.3-20.3 39.6 4.4V94l-39.6 4.4L144.5 76.2zM80.8 88.1c-2 1.7-4.1 3.6-6.5 6 -8.1 8.1-11.3 13.5-14.1 18.2 -2.6 4.4-4.9 8.3-11.5 14.9 -6.3 6.3-10.1 8.7-14.3 11.2C35 112.2 55.2 90.8 80.8 88.1zM44.4 170.5c-3-4.1-5.5-8.7-7.2-13.6 1.8-1.3 3.5-2.3 5.3-3.3 4.7-2.8 10.1-6 18.2-14.1 8.1-8.1 11.3-13.5 14.1-18.2 2.6-4.4 4.9-8.3 11.5-14.9 6.6-6.6 10.4-8.9 14.9-11.5 1.5-0.9 3.1-1.8 4.8-3 5.2 2.1 9.9 5.1 14 8.7 -2.4 1.8-4.5 3.1-6.8 4.4 -4.7 2.8-10.1 6-18.2 14.1 -8.1 8.1-11.3 13.5-14.1 18.2 -2.6 4.4-4.9 8.3-11.5 14.9 -6.6 6.6-10.4 8.9-14.9 11.5C51.6 165.4 48.4 167.3 44.4 170.5zM76.7 185.9c-1.7 1-3.6 2.1-5.6 3.5 -5.1-1.6-9.9-3.9-14.2-6.9 2.3-1.7 4.3-2.9 6.5-4.2 4.7-2.8 10.1-6 18.2-14.1 8.1-8.1 11.3-13.5 14.1-18.2 2.6-4.4 4.9-8.3 11.5-14.9 6.6-6.6 10.4-8.9 14.9-11.5 2.7-1.6 5.6-3.3 9-6 2.3 4 4.1 8.3 5.3 12.9 -0.3 0.2-0.7 0.4-1.1 0.6 -4.7 2.8-10.1 6-18.2 14.1 -8.1 8.1-11.3 13.5-14.1 18.2 -2.6 4.4-4.9 8.3-11.5 14.9C84.9 181 81.1 183.3 76.7 185.9zM100.4 189.7c1-1 2.1-2 3.2-3.1 8.1-8.1 11.3-13.5 14.1-18.2 2.6-4.4 4.9-8.3 11.5-14.9 3.4-3.4 6-5.6 8.4-7.4C135.2 167 120.2 184 100.4 189.7zM202.1 106.2c-0.4 2.2-2.4 3.8-4.6 3.8 -0.3 0-0.6 0-0.9-0.1l-32.3-6.2c-2.5-0.5-4.2-2.9-3.7-5.4 0.5-2.5 2.9-4.2 5.4-3.7l32.3 6.2C201 101.2 202.6 103.7 202.1 106.2zM235.5 112.6c-0.4 2.2-2.4 3.8-4.6 3.8 -0.3 0-0.6 0-0.9-0.1l-14.5-2.8c-2.5-0.5-4.2-2.9-3.7-5.4 0.5-2.5 2.9-4.2 5.4-3.7l14.5 2.8C234.4 107.6 236 110 235.5 112.6z"/>
                      <path
                        d="M305.9 111.6c5.4 0 7.9 1.1 10.9 2.3 3.2 1.3 6.9 2.9 13.8 2.9 7 0 10.6-1.5 13.8-2.9 2.9-1.2 5.5-2.3 10.9-2.3 5.4 0 7.9 1.1 10.9 2.3 3.2 1.3 6.9 2.9 13.9 2.9 2.1 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9c-5.4 0-7.9-1.1-10.9-2.3 -3.2-1.3-6.9-2.9-13.9-2.9 -7 0-10.6 1.5-13.9 2.9 -2.9 1.2-5.5 2.3-10.9 2.3s-7.9-1.1-10.9-2.3c-3.2-1.3-6.9-2.9-13.8-2.9 -2.1 0-3.9 1.7-3.9 3.9C302 109.9 303.8 111.6 305.9 111.6z"/>
                      <path
                        d="M380.1 134.7c-5.4 0-7.9-1.1-10.9-2.3 -3.2-1.3-6.9-2.9-13.9-2.9 -7 0-10.6 1.5-13.9 2.9 -2.9 1.2-5.5 2.3-10.9 2.3s-7.9-1.1-10.9-2.3c-3.2-1.3-6.9-2.9-13.8-2.9 -2.1 0-3.9 1.7-3.9 3.9 0 2.1 1.7 3.9 3.9 3.9 5.4 0 7.9 1.1 10.9 2.3 3.2 1.3 6.9 2.9 13.8 2.9 7 0 10.6-1.5 13.8-2.9 2.9-1.2 5.5-2.3 10.9-2.3s7.9 1.1 10.9 2.3c3.2 1.3 6.9 2.9 13.9 2.9 2.1 0 3.9-1.7 3.9-3.9C384 136.5 382.2 134.7 380.1 134.7z"/>
                      <path
                        d="M380.1 160.5c-5.4 0-7.9-1.1-10.9-2.3 -3.2-1.3-6.9-2.9-13.9-2.9 -7 0-10.6 1.5-13.9 2.9 -2.9 1.2-5.5 2.3-10.9 2.3s-7.9-1.1-10.9-2.3c-3.2-1.3-6.9-2.9-13.8-2.9 -2.1 0-3.9 1.7-3.9 3.9s1.7 3.9 3.9 3.9c5.4 0 7.9 1.1 10.9 2.3 3.2 1.3 6.9 2.9 13.8 2.9 7 0 10.6-1.5 13.8-2.9 2.9-1.2 5.5-2.3 10.9-2.3s7.9 1.1 10.9 2.3c3.2 1.3 6.9 2.9 13.9 2.9 2.1 0 3.9-1.7 3.9-3.9C384 162.2 382.2 160.5 380.1 160.5z"/>
                    </svg>
                    <span class="margin-10-left">Sèche-cheveux</span>
                  </div>
                  <div class="width-100">
                    <div class="row margin-bottom" v-if="openMoreServices">
                      <div class="cell-3 flex flex-y-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                             viewBox="0 0 492 492">
                          <path
                            d="M492 420.5c-10.667 0-20.667-2.333-30-7-10.668-4.667-21.334-7-32-7-10.667 0-21 2.333-31 7-9.333 4.667-19.333 7-30 7s-20.667-2.333-30-7c-10.668-4.667-21.335-7-32-7-10.667 0-21 2.333-31 7-9.333 4.667-19.333 7-30 7s-20.667-2.333-30-7c-10-4.667-20.333-7-31-7s-21.333 2.333-32 7c-9.333 4.667-19.333 7-30 7s-20.667-2.333-30-7c-10-4.667-20.333-7-31-7s-21 2.333-31 7-20.333 7-31 7v-45c10.667 0 21-2.333 31-7s20.333-7 31-7 21 2.333 31 7 20.167 7 30.5 7 20.167-2.333 29.5-7c10-4.667 20.5-7 31.5-7s21.5 2.333 31.5 7 20.167 7 30.5 7c10.334 0 20.167-2.333 29.5-7 10-4.667 20.667-7 32-7 10 0 20.333 2.333 31 7 9.335 4.667 19.168 7 29.5 7 10.333 0 20.5-2.333 30.5-7s20.5-7 31.5-7 21.5 2.333 31.5 7c9.333 4.667 19.333 7 30 7v45zM421 292.5c16 0 29.667-5.667 41-17s17-25 17-41-5.667-29.667-17-41-25.167-17-41.5-17-30.167 5.667-41.5 17-17 25-17 41c0 16.667 5.5 30.5 16.5 41.5s25.167 16.5 42.5 16.5z"/>
                          <path
                            d="M80 325.5c4 .667 8.333 2 13 4 10 4.667 20.167 7 30.5 7s20.167-2.333 29.5-7c10.667-4.667 21.167-7 31.5-7s20.833 2.333 31.5 7c10 4.667 20.167 7 30.5 7 10.334 0 20.167-2.333 29.5-7 10.667-4.667 21.167-7 31.5-7s20.833 2.333 31.5 7c9.333 4.667 19.333 7 30 7 7.336 0 14.67-1.333 22-4l-97-174 113-21c8.667-1.333 15.667-5 21-11s8-13.333 8-22-3.333-16.333-10-23c-6.668-6.667-14.335-10-23-10-2 0-3.333.333-4 1l-175 31c-7.333 2-13.5 7.167-18.5 15.5s-5.5 17.5-1.5 27.5l1 1.5 1 1.5 46 82-172 94z"/>
                        </svg>
                        <span class="margin-10-left">Piscine</span>
                      </div>
                      <div class="cell-3 flex flex-y-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                             viewBox="0 0 203.344 203.344">
                          <path
                            d="M199.78 142.966H68.17a3.567 3.567 0 0 1-3.563-3.564v-82.5a3.567 3.567 0 0 1 3.563-3.563h131.61a3.567 3.567 0 0 1 3.563 3.563v82.5a3.566 3.566 0 0 1-3.563 3.564zm-36.471 26.039h-13.333v-16.039h-32v16.039h-13.334c-2.762 0-5 2.238-5 5s2.238 5 5 5h58.667a5 5 0 1 0 0-10zM79.844 43.338H68.17c-.73 0-1.441.074-2.141.186a4.959 4.959 0 0 0-1.279-.186H15.094c-2.762 0-5 2.238-5 5s2.238 5 5 5h40.004a13.484 13.484 0 0 0-.491 3.563v9.309H15.094c-2.762 0-5 2.238-5 5s2.238 5 5 5h39.513v12.873H15.094c-2.762 0-5 2.238-5 5s2.238 5 5 5h39.513v40.318c0 7.479 6.085 13.564 13.563 13.564h11.674v21.039a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V29.338a5 5 0 0 1 5-5h69.844a5 5 0 0 1 5 5v14zm-47.63 98.726a7.708 7.708 0 1 0 15.416 0 7.708 7.708 0 0 0-15.416 0z"/>
                        </svg>
                        <span class="margin-10-left">Ordinateur</span>
                      </div>
                    </div>
                    <span class="inline-block cursor-pointer hover-color-green-lagoon" @click="displayMore">
                      <span>{{ moreEquipement }}</span>
                      <span v-html="moreEquipementArrow"></span>
                    </span>
                  </div>
                </div>
              </section>

              <section id="familyEquipments" class="tab-panel">
                <div class="row">
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 512 512">
                      <path
                        d="M486.4 172.2v-28.4c14.7-3.8 25.6-17.1 25.6-32.9 0-18.8-15.3-34.1-34.1-34.1 -18.8 0-34.1 15.3-34.1 34.1 0 15.9 10.9 29.1 25.6 32.9v28.4c-9.9 3.5-17.1 12.9-17.1 24v8.5H59.7v-8.5c0-11.1-7.2-20.5-17.1-24v-28.4c14.7-3.8 25.6-17.1 25.6-32.9 0-18.8-15.3-34.1-34.1-34.1 -18.8 0-34.1 15.3-34.1 34.1 0 15.9 10.9 29.1 25.6 32.9v28.4c-9.9 3.5-17.1 12.9-17.1 24v307.2c0 4.7 3.8 8.5 8.5 8.5H51.2h409.6 34.1c4.7 0 8.5-3.8 8.5-8.5V196.3C503.5 185.2 496.3 175.8 486.4 172.2zM110.9 460.8h-51.2V221.9h51.2V460.8zM179.2 460.8h-51.2V221.9h51.2V460.8zM247.5 460.8h-51.2V221.9h51.2V460.8zM315.7 460.8h-51.2V221.9h51.2V460.8zM384 460.8h-51.2V221.9h51.2V460.8zM452.3 460.8h-51.2V221.9h51.2V460.8z"/>
                      <path
                        d="M426.2 133.1c-1-3.1-3.7-5.3-6.9-5.8l-19.2-2.8 -8.6-17.4c-0.1-0.2-0.2-0.3-0.3-0.5 -0.2-0.4-0.5-0.8-0.8-1.1 -0.5-0.6-1.1-1.2-1.7-1.6 -0.1-0.1-0.2-0.2-0.3-0.3L264.5 29.3V8.5C264.5 3.8 260.7 0 256 0c-4.7 0-8.5 3.8-8.5 8.5v20.7L133.8 94.1c-22.2 1.4-39.9 19.8-39.9 42.4 0 23.5 19.1 42.7 42.7 42.7 7.5 0 14.6-2 21.4-5.9 2.6-1.5 4.2-4.3 4.2-7.4 0-3-1.6-5.8-4.2-7.4 -8-4.7-12.8-12.9-12.8-22s4.8-17.3 12.8-22c2.6-1.5 4.2-4.3 4.2-7.4 0-3-1.5-5.7-4-7.2l89.4-51.1v55.2c-2.7 1.1-5.2 2.7-7.4 4.9l-19.9 19.9c-4.3 4.3-6.6 9.9-6.6 16 0 6 2.4 11.7 6.6 16l19.9 19.9c4.3 4.3 9.9 6.6 16 6.6 6 0 11.7-2.3 16-6.6l19.9-19.9c4.3-4.3 6.6-9.9 6.6-16 0-6-2.4-11.7-6.6-16l-19.9-19.9c-2.2-2.2-4.7-3.8-7.4-4.9V49.2l108.3 65 -5.1 10.4 -19.2 2.8c-3.2 0.5-5.9 2.7-6.9 5.8 -1 3.1-0.2 6.5 2.2 8.7l13.9 13.5 -3.3 19.1c-0.5 3.2 0.8 6.4 3.4 8.3 1.5 1.1 3.2 1.6 5 1.6 1.4 0 2.7-0.3 4-1l17.2-9 17.2 9c2.9 1.5 6.4 1.3 9-0.6 2.6-1.9 3.9-5.1 3.4-8.4l-3.3-19.1 13.9-13.5C426.4 139.6 427.2 136.2 426.2 133.1z"/>
                    </svg>
                    <span class="margin-10-left">Lit bébé</span>
                  </div>
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 512 512">
                      <path
                        d="M385.4 232.3c11.7-4.8 19.9-16.2 19.9-29.6 0-10.7-5.3-20-13.3-25.9L400.2 128H416c5.9 0 10.7-4.8 10.7-10.7 0-5.9-4.8-10.7-10.7-10.7H172.5l-13.4-80.2C156.5 11.1 143.4 0 127.9 0c0 0 0 0 0 0 -9.3 0-18.2 4.1-24.2 11.2 -6.1 7.1-8.6 16.5-7.1 25.7l23.4 139.9c-8 5.8-13.3 15.2-13.3 25.8 0 13.4 8.3 24.8 19.9 29.6L85.5 499.7c-0.5 3.1 0.4 6.2 2.4 8.6C89.9 510.6 92.9 512 96 512h42.7c5.3 0 9.7-3.8 10.5-9L167.5 384h177l18.3 119c0.8 5.2 5.3 9 10.5 9H416c3.1 0 6.1-1.4 8.1-3.7 2-2.4 2.9-5.5 2.4-8.6L385.4 232.3zM177.4 320l13.1-85.3h131L334.6 320H177.4zM328.7 170.7H183.2L176.1 128h159.8L328.7 170.7z"/>
                    </svg>
                    <span class="margin-10-left">Chaise-haute</span>
                  </div>
                  <div class="cell-3 flex flex-y-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="grey-icon" width="20" height="20"
                         viewBox="0 0 480 480">
                      <path
                        d="M448 216H32c-17.6 0-32 14.4-32 32 0 15.2 10.6 27.8 24.8 31.1l19.9 165.7C47.1 464.8 64.2 480 84.4 480h311.2c20.2 0 37.3-15.2 39.7-35.2l19.9-165.7C469.4 275.8 480 263.2 480 248 480 230.4 465.6 216 448 216zM419.4 442.9C418 454.9 407.8 464 395.6 464H84.4c-12.1 0-22.4-9.1-23.8-21.1L41 280h398L419.4 442.9zM448 264H32c-8.8 0-16-7.2-16-16 0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16C464 256.8 456.8 264 448 264z"/>
                      <path
                        d="M168 136c-17.6 0-32 14.4-32 32s14.4 32 32 32 32-14.4 32-32S185.6 136 168 136zM168 184c-8.8 0-16-7.2-16-16 0-8.8 7.2-16 16-16 8.8 0 16 7.2 16 16C184 176.8 176.8 184 168 184z"/>
                      <path
                        d="M240 56c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48S266.5 56 240 56zM240 136c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32S257.6 136 240 136z"/>
                      <path
                        d="M152 0c-22.1 0-40 17.9-40 40 0 22.1 17.9 40 40 40 22.1 0 40-17.9 40-40C192 17.9 174.1 0 152 0zM152 64c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24S165.2 64 152 64z"/>
                    </svg>
                    <span class="margin-10-left">Baignoire bébé</span>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </div>

      <!-- ### Contact -->
      <div id="contact" class="row">
        <div class="cell-12">
          <h2 class="color-green-lagoon">Contact</h2>
          <ul class="list-unstyled">
            <li>
              The Joshua Tree House
            </li>
            <li>
              52 Quai Amiral Hamelin, 14000 Caen, France
            </li>
            <li>
              <a href="tel:01 23 45 67 89" class="color-green-lagoon transition-3 hover-color-sweet-potato">01 23 45 67
                89</a>
            </li>
            <li>
              <a href="malto:hotel@exemple.com" class="color-green-lagoon transition-3 hover-color-sweet-potato">hotel@exemple.com</a>
            </li>
          </ul>
        </div>
        <!-- MAP -->
        <div id="map" class="cell-12">
          <div class="map-container">
            <google-map-component :latitude="this.lat" :longitude="this.long"></google-map-component>
          </div>
          <div class="margin align-center">
            <a :href="this.mapLink" class="padding color-green-lagoon transition-3 hover-color-sweet-potato"
               target="_blank">Ouvrir avec Google Map</a>
          </div>
        </div>
      </div>

      <!-- ### Comments -->
      <comments :persons="this.persons"></comments>

    </div>

    <modal-reservation v-show="visible"></modal-reservation>

  </div>
</template>

<script>
  import StarRatings from '../modules/StarRatings.vue'
  import GoogleMapComponent from '../modules/GoogleMap.vue'
  import Comments from '../layouts/Comments'
  import CarouselComponentDetailed from '../modules/CarouselComponentDetailed'
  import ModalReservation from '../layouts/ModalReservation'
  import vueSmoothScroll from 'vue-smooth-scroll'
  import Vue from 'vue'

  Vue.use(vueSmoothScroll)

  export default {
    components: {
      StarRatings,
      GoogleMapComponent,
      Comments,
      CarouselComponentDetailed,
      ModalReservation
    },
    name: 'Detail',
    data () {
      return {
        openMoreServices: false,
        moreEquipement: 'Afficher plus d\'équipements ',
        persons: [],
        images: [],
        name: '',
        city: '',
        lat: Number,
        long: Number,
        visible: false,
        mapLink: ''
      }
    },
    methods: {
      toggleModalReservation () {
        this.visible = !this.visible
      },
      displayMore () {
        this.openMoreServices = !this.openMoreServices
        this.moreEquipement = this.openMoreServices ? 'Afficher moins d\'équipements ' : 'Afficher plus d\'équipements '
      },
      displayLess () {
        this.openMoreServices = false
      }
    },
    computed: {
      moreEquipementArrow: function () {
        return !this.openMoreServices ? '<svg viewBox="0 0 18 18" height="10px" width="10px">' +
          '<path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"></path>' +
          '</svg>' : '<svg xmlns="http://www.w3.org/2000/svg" height="10px" width="10px" viewBox="-44 46 10 10">' +
        '<path d="M-43.1 53.6c-.2.2-.6.2-.8 0s-.2-.6 0-.8l4.4-4.4c.2-.2.6-.2.8 0l4.4 4.4c.2.2.2.6 0 .8s-.6.2-.8 0l-4-4.1-4 4.1z"/>' +
        '</svg>'
      }
    },
    created () {
      this.name = 'Hotel California'
      this.city = 'La Ferté Mathet'
      this.lat = 49.276656
      this.long = -0.2586579999999685
      this.mapLink = `https://www.google.com/maps/search/?api=1&query=${this.lat},${this.long}`
      for (let i = 1; i <= 3; i++) {
        this.persons.push({
          id: i,
          name: 'Lorem ipsum',
          comment: 'Sed et efficitur velit. Donec pellentesque fringilla dui, a dapibus quam ultricies eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fermentum facilisis ante, sit amet aliquam sem faucibus vel. Aliquam erat volutpat. Integer sit amet elit vel nulla gravida pellentesque eu vitae tellus. Maecenas a arcu vitae justo venenatis luctus elementum id odio.',
          path: '../../assets/media/fake/persons/person' + i + '.jpg',
          date: '01/01/1992'
        })
      }
      for (let i = 1; i <= 4; i++) {
        this.images.push({
          id: i,
          path: '../../assets/media/fake/detailedRoom/room' + i + '.jpeg'
        })
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
    color: #E1694E;
  }

  .tabset > label:hover::after,
  .tabset > input:focus + label::after,
  .tabset > input:checked + label::after {
    background: #E1694E;
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

  #add-to-favorites {
    cursor: pointer;
    vertical-align: top;
  }

  .grey-icon path {
    fill: #404852;
  }

  #add-to-favorites:hover path {
    fill: #789F8A;
  }

</style>

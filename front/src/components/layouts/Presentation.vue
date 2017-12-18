<template>
  <div id="presentation" class="row">
    <div class="row">
      <div class="cell-8 c-12-s padding-right padding-0-s">
        <h2 class="color-green-lagoon">Présentation</h2>
        <h3 class="margin-0 inline-block">The Joshua Tree House</h3>
        <svg id="add-to-favorites" class="margin-left grey-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
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
</template>

<script>
  export default {
    name: 'Presentation'
  }
</script>

<style scoped>
  .grey-icon path {
    fill: #404852;
  }

  #add-to-favorites {
    cursor: pointer;
    vertical-align: top;
  }

  #add-to-favorites:hover path {
    fill: #789F8A;
  }
</style>

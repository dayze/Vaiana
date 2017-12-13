<template>
  <div>
    <div class="row container-medium margin-auto">
      <div class="cell-4 border-right padding-right hide-s">
      <ul class="list-unstyled align-center padding-top">
        <li class="padding bg-deep-blue hover-bg-peter-river color-clouds border-bottom cursor-pointer">Mes réservations</li>
        <li class="padding bg-deep-blue hover-bg-peter-river color-clouds border-bottom cursor-pointer">Mes hôtels favoris</li>
        <li class="padding bg-deep-blue hover-bg-peter-river color-clouds cursor-pointer">Mon profil</li>
      </ul>
      </div>
      <div class="cell-8 cell-12-s">
        <h3 class="align-center">Mes réservations</h3>
        <table class="styled-table">
          <thead>
          <tr>
            <th>Hôtel</th>
            <th>Date</th>
            <th>Personnes</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><img class="img-table round-10" src="../../assets/media/fake/promoHotels/hotel-promo1.jpg" alt=""></td>
            <td>15/06/2018 12h-17h</td>
            <td>
              <select id="select">
                <template v-for="(n, index) in 5">
                  <option value="valeur1">{{n}}</option>
                </template>
              </select>
            </td>
          </tr>
          </tbody>
        </table>
        <h3 class="align-center">Mes hôtels favoris</h3>
        <h3 class="align-center">Mon profil</h3>
      </div>
    </div>
  </div>
  <!--<div class="row container-tiny margin-auto">
    <div class="cell-4">
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </div>
    <div class="cell-6">
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </div>
  </div>-->
</template>
<script>
  export default {
    name: 'UserAccount',
    data () {
      return {}
    }
  }
</script>
<style scoped>
  .img-table {
    max-width: 80px;
  }
</style>

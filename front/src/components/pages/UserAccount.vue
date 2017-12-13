<template>
  <div>
    <div class="row container-medium margin-auto">
      <div class="cell-4 border-right padding-right hide-s">
        <ul class="list-unstyled align-center padding-top">
          <li class="padding  color-clouds border-bottom cursor-pointer hover-bg-peter-river"
              @click="changeTab(0)" :class="[isCurrentTab(0) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Mes réservations
          </li>
          <li class="padding bg-deep-blue hover-bg-peter-river color-clouds border-bottom cursor-pointer"
              @click="changeTab(1)" :class="[isCurrentTab(1) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Mes hôtels favoris
          </li>
          <li class="padding bg-deep-blue hover-bg-peter-river color-clouds cursor-pointer"
              @click="changeTab(2)" :class="[isCurrentTab(2) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Mon profil
          </li>
        </ul>
      </div>
      <div class="cell-8 cell-12-s">
        <div class="show-s" :class="{'hide': !isCurrentTab(0)}">
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
              <td><img class="img-table round-10" src="../../assets/media/fake/promoHotels/hotel-promo1.jpg" alt="">
              </td>
              <td>15/06/2018 12h-17h</td>
              <td>
                <select>
                  <template v-for="(n, index) in 5">
                    <option value="valeur1">{{n}}</option>
                  </template>
                </select>
              </td>
            </tr>
            <tr>
              <td><img class="img-table round-10" src="../../assets/media/fake/promoHotels/hotel-promo2.jpg" alt="">
              </td>
              <td>16/06/2018 08h-17h</td>
              <td>
                <select>
                  <template v-for="(n, index) in 5">
                    <option value="valeur1">{{n}}</option>
                  </template>
                </select>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="show-s" :class="{'hide': !isCurrentTab(1)}">
          <h3 class="align-center">Mes hôtels favoris</h3>
          <p>test</p>
        </div>
        <div class="show-s" :class="{'hide': !isCurrentTab(2)}">
          <h3 class="align-center">Mon profil</h3>
          <p>test</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UserAccount',
    data () {
      return {
        currentTab: 0
      }
    },
    methods: {
      changeTab (nbTab) {
        this.currentTab = nbTab
      },
      isCurrentTab (tab) {
        return tab === this.currentTab
      }
    }
  }
</script>
<style scoped>
  .img-table {
    max-width: 80px;
  }
</style>

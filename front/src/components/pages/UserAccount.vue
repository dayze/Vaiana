<template>
  <div>
    <div class="row container-medium margin-auto">
      <div class="cell-4 border-right padding-right hide-s">
        <ul class="list-unstyled align-center padding-top">
          <li class="padding  color-clouds border-bottom cursor-pointer hover-bg-peter-river"
              @click="changeTab(0)" :class="[isCurrentTab(0) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Mes réservations
          </li>
          <li class="padding hover-bg-peter-river color-clouds border-bottom cursor-pointer"
              @click="changeTab(1)" :class="[isCurrentTab(1) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Mes hôtels favoris
          </li>
          <li class="padding hover-bg-peter-river color-clouds cursor-pointer border-bottom"
              @click="changeTab(2)" :class="[isCurrentTab(2) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Mon profil
          </li>
          <li class="padding hover-bg-peter-river color-clouds cursor-pointer"
              @click="changeTab(3)" :class="[isCurrentTab(3) ? 'bg-peter-river' : 'bg-deep-blue' ]">
            Changer mon mot de passe
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
          <form method="post" class="flex-form styled-form">
            <div class="field-box">
              <input type="text" name="email" placeholder="Email" required="required" value="vaiana@gmail.com">
            </div>
            <h4>Adresse de facturation</h4>
            <div class="inline-field padding-bottom">
              <input type="text" class="margin-right" name="date" required="required" placeholder="Numéro de voie">
              <input type="text" class="margin-right" name="date" required="required" placeholder="Adresse">
              <input type="text" class="margin-right" name="date" required="required"placeholder="Ville" >
              <input type="text" name="date" required="required" placeholder="Complement">
            </div>
            <div class="actions-box">
              <input type="submit" value="Modifier"
                     class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
            </div>
          </form>
        </div>
        <div class="show-s" :class="{'hide': !isCurrentTab(3)}">
          <h3 class="align-center">Changer mon mot de passe</h3>
          <form method="post" class="flex-form styled-form">
            <div class="field-box">
              <input type="password" name="oldPassword" placeholder="Ancien mot de passe" required="required">
              <input type="password" name="newPassword" placeholder="Nouveau mot de passe" required="required">
              <input type="password" name="newPasswordConfirm" placeholder="Confirmer" required="required">
            </div>
            <div class="actions-box">
              <input type="submit" value="Modifier"
                     class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
            </div>
          </form>
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
<style scoped lang="scss">
  .img-table {
    max-width: 80px;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .inline-field {
    display: flex;
    flex-grow: 1;

    input {
      flex-grow: 1;
    }
  }
</style>

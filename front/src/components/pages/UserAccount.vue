<template>
  <div>
    <div class="row container-medium margin-auto">
      <div class="cell-3 border-right padding-right hide-s">
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
      <div class="cell-9 cell-12-s">
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
              <td><img src="../../assets/media/fake/promoHotels/hotel-promo1.jpg" alt="">
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
              <td><img src="../../assets/media/fake/promoHotels/hotel-promo2.jpg" alt="">
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
          <table class="styled-table">
            <thead>
            <tr>
              <th>Hôtel</th>
              <th>Nom</th>
              <th>Ville</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <router-link :to="{ path: 'detail' }">
                  <img src="../../assets/media/fake/promoHotels/hotel-promo1.jpg" alt="">
                </router-link>
              </td>
              <td>
                <router-link :to="{ path: 'detail' }">Taverne de la paix</router-link>
              </td>
              <td>
                <router-link :to="{ path: 'detail' }">La Ferté-Macé</router-link>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                  <g id="dislike">
                    <title>Retirer</title>
                    <path
                      d="M313.647 221.248l23.831-23.832c7.699-7.7 11.939-17.936 11.939-28.824s-4.24-21.125-11.939-28.823c-15.893-15.893-41.753-15.894-57.646 0L256 163.6l-23.832-23.831c-7.699-7.699-17.936-11.939-28.823-11.939-10.889 0-21.125 4.24-28.823 11.939-7.699 7.699-11.939 17.935-11.939 28.823s4.24 21.124 11.939 28.823l23.831 23.832-23.832 23.831c-15.893 15.893-15.893 41.753-.001 57.645 7.698 7.7 17.935 11.94 28.824 11.94 10.888 0 21.124-4.239 28.824-11.938L256 278.894l23.832 23.832c7.699 7.698 17.935 11.938 28.823 11.938 10.89 0 21.126-4.24 28.823-11.939 15.893-15.893 15.893-41.753 0-57.646l-23.831-23.831zm2.617 60.263c-2.032 2.032-4.733 3.151-7.608 3.151s-5.578-1.119-7.61-3.151l-34.438-34.438a15 15 0 0 0-21.214 0l-34.437 34.438c-2.033 2.033-4.736 3.152-7.611 3.152s-5.577-1.119-7.61-3.152c-4.196-4.196-4.196-11.023 0-15.22l34.438-34.438a15 15 0 0 0 0-21.212l-34.438-34.438c-4.196-4.196-4.196-11.024 0-15.221a10.694 10.694 0 0 1 7.609-3.152c2.874 0 5.577 1.12 7.61 3.152l34.438 34.438c5.857 5.858 15.355 5.858 21.213 0l34.438-34.438c4.196-4.196 11.024-4.196 15.22 0 4.196 4.196 4.196 11.024.001 15.22l-34.438 34.438a15 15 0 0 0 0 21.212l34.438 34.437c4.196 4.197 4.196 11.024-.001 15.222z"/>
                    <path
                      d="M461.46 63.908c-32.596-32.486-75.818-50.279-121.632-50.138-29.542.1-58.327 7.738-83.828 22.17-25.506-14.435-54.3-22.074-83.846-22.17l-.572-.001c-45.622 0-88.595 17.796-121.048 50.145C17.946 96.396 0 139.524 0 185.354c0 43.787 16.495 85.478 46.444 117.392l165.585 176.447c11.352 12.098 27.377 19.037 43.969 19.038 16.593 0 32.62-6.939 43.973-19.037l165.585-176.448C495.505 270.832 512 229.142 512 185.354c0-45.833-17.949-88.964-50.54-121.446zm-17.78 218.309L278.094 458.666a30.411 30.411 0 0 1-22.095 9.565 30.412 30.412 0 0 1-22.094-9.566L68.318 282.216C43.609 255.885 30 221.485 30 185.354c0-37.799 14.813-73.381 41.713-100.193 26.791-26.704 62.242-41.393 99.873-41.393l.471.001c26.806.087 52.852 7.692 75.358 21.995 4.833 3.364 11.413 3.691 16.675.315 22.615-14.505 48.839-22.22 75.838-22.311l.486-.001c37.626 0 73.079 14.688 99.868 41.388C467.185 111.968 482 147.553 482 185.354c0 36.131-13.609 70.531-38.32 96.863z"/>
                  </g>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <router-link :to="{ path: 'detail' }">
                  <img src="../../assets/media/fake/promoHotels/hotel-promo2.jpg" alt="">
                </router-link>
              </td>
              <td>
                <router-link :to="{ path: 'detail' }">Inter-Hôtel de France</router-link>
              </td>
              <td>
                <router-link :to="{ path: 'detail' }">Caen</router-link>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                  <g id="dislike">
                    <title>Retirer</title>
                    <path
                      d="M313.647 221.248l23.831-23.832c7.699-7.7 11.939-17.936 11.939-28.824s-4.24-21.125-11.939-28.823c-15.893-15.893-41.753-15.894-57.646 0L256 163.6l-23.832-23.831c-7.699-7.699-17.936-11.939-28.823-11.939-10.889 0-21.125 4.24-28.823 11.939-7.699 7.699-11.939 17.935-11.939 28.823s4.24 21.124 11.939 28.823l23.831 23.832-23.832 23.831c-15.893 15.893-15.893 41.753-.001 57.645 7.698 7.7 17.935 11.94 28.824 11.94 10.888 0 21.124-4.239 28.824-11.938L256 278.894l23.832 23.832c7.699 7.698 17.935 11.938 28.823 11.938 10.89 0 21.126-4.24 28.823-11.939 15.893-15.893 15.893-41.753 0-57.646l-23.831-23.831zm2.617 60.263c-2.032 2.032-4.733 3.151-7.608 3.151s-5.578-1.119-7.61-3.151l-34.438-34.438a15 15 0 0 0-21.214 0l-34.437 34.438c-2.033 2.033-4.736 3.152-7.611 3.152s-5.577-1.119-7.61-3.152c-4.196-4.196-4.196-11.023 0-15.22l34.438-34.438a15 15 0 0 0 0-21.212l-34.438-34.438c-4.196-4.196-4.196-11.024 0-15.221a10.694 10.694 0 0 1 7.609-3.152c2.874 0 5.577 1.12 7.61 3.152l34.438 34.438c5.857 5.858 15.355 5.858 21.213 0l34.438-34.438c4.196-4.196 11.024-4.196 15.22 0 4.196 4.196 4.196 11.024.001 15.22l-34.438 34.438a15 15 0 0 0 0 21.212l34.438 34.437c4.196 4.197 4.196 11.024-.001 15.222z"/>
                    <path
                      d="M461.46 63.908c-32.596-32.486-75.818-50.279-121.632-50.138-29.542.1-58.327 7.738-83.828 22.17-25.506-14.435-54.3-22.074-83.846-22.17l-.572-.001c-45.622 0-88.595 17.796-121.048 50.145C17.946 96.396 0 139.524 0 185.354c0 43.787 16.495 85.478 46.444 117.392l165.585 176.447c11.352 12.098 27.377 19.037 43.969 19.038 16.593 0 32.62-6.939 43.973-19.037l165.585-176.448C495.505 270.832 512 229.142 512 185.354c0-45.833-17.949-88.964-50.54-121.446zm-17.78 218.309L278.094 458.666a30.411 30.411 0 0 1-22.095 9.565 30.412 30.412 0 0 1-22.094-9.566L68.318 282.216C43.609 255.885 30 221.485 30 185.354c0-37.799 14.813-73.381 41.713-100.193 26.791-26.704 62.242-41.393 99.873-41.393l.471.001c26.806.087 52.852 7.692 75.358 21.995 4.833 3.364 11.413 3.691 16.675.315 22.615-14.505 48.839-22.22 75.838-22.311l.486-.001c37.626 0 73.079 14.688 99.868 41.388C467.185 111.968 482 147.553 482 185.354c0 36.131-13.609 70.531-38.32 96.863z"/>
                  </g>
                </svg>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="show-s" :class="{'hide': !isCurrentTab(2)}">
          <h3 class="align-center">Mon profil</h3>
          <form method="post" class="flex-form styled-form">
            <div class="field-box">
              <input type="text" name="email" placeholder="Email" required="required" value="vaiana@gmail.com">
            </div>
            <h4>Adresse de facturation</h4>
            <div class="field-box">
              <input type="text" name="date" required="required" placeholder="Numéro de voie" size="1">
              <input type="text" name="date" required="required" placeholder="Adresse" size="1">
              <input type="text" name="date" required="required" placeholder="Ville" size="1">
              <input type="text" name="date" required="required" placeholder="Complement" size="1">
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
              <input type="password" name="oldPassword" placeholder="Ancien mot de passe" required="required" size="1">
              <input type="password" name="newPassword" placeholder="Nouveau mot de passe" required="required" size="1">
              <input type="password" name="newPasswordConfirm" placeholder="Confirmer" required="required" size="1">
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

  table tbody tr, table tbody td {
    height: 100%;
  }

  table tbody td {
    vertical-align: middle;
  }

  table tbody td:not(:last-child) > a {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  table tbody td:not(:last-child),
  table tbody td:first-child a {
    padding: 0;
  }

  table tbody td:first-child img {
    max-width: 120px;
  }

  table svg {
    cursor: pointer;
  }

  table svg:hover #dislike path {
    fill: red;
  }
</style>

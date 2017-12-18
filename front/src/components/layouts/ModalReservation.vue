<template>
  <div id="modal">
    <spinner :active="false"></spinner>
    <div id="modal-content" class="round-5">
      <div class="row">
        <div class="cell-12 align-right">
          <svg @click="toggleModalReservation()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.9 21.9">
            <path class="hover-color-sweet-potato cursor-pointer"
              d="M14.1 11.3c-0.2-0.2-0.2-0.5 0-0.7l7.5-7.5c0.2-0.2 0.3-0.5 0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20 0.1 19.7 0 19.5 0c-0.3 0-0.5 0.1-0.7 0.3l-7.5 7.5c-0.2 0.2-0.5 0.2-0.7 0L3.1 0.3C2.9 0.1 2.6 0 2.4 0S1.9 0.1 1.7 0.3L0.3 1.7C0.1 1.9 0 2.2 0 2.4s0.1 0.5 0.3 0.7l7.5 7.5c0.2 0.2 0.2 0.5 0 0.7l-7.5 7.5C0.1 19 0 19.3 0 19.5s0.1 0.5 0.3 0.7l1.4 1.4c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l7.5-7.5c0.2-0.2 0.5-0.2 0.7 0l7.5 7.5c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l1.4-1.4c0.2-0.2 0.3-0.5 0.3-0.7s-0.1-0.5-0.3-0.7L14.1 11.3z"/>
          </svg>
        </div>
      </div>
      <form method="post" class="flex-form styled-form">

        <fieldset class="border-none bg-clouds width-100 padding-30">
          <legend class="bg-green-lagoon padding color-yang margin-bottom">Réserver maintenant</legend>
          <div class="field-box">
            <input type="text" name="firstname" placeholder="Votre prénom" required="required">
          </div>
          <div class="field-box">
            <input type="text" name="lastname" placeholder="Votre nom" required="required">
          </div>
          <div class="field-box">
            <input type="text" name="mail" placeholder="Votre adresse mail" required="required">
          </div>
          <div class="field-box">
            <input type="text" name="telephone" placeholder="Votre numéro de téléphone" required="required">
          </div>
          <div class="field-box">
            <input type="date" name="date" required="required">
          </div>
          <div class="field-box margin-0-bottom">
            <div class="align-field-box">
              <label for="heure-arrivee">Votre heure d'arrivée : </label>
              <input id="heure-arrivee" type="time" name="heurearrivee" required="required">
            </div>
          </div>
        </fieldset>

        <div class="actions-box margin">
          <input type="submit" value="Réserver votre chambre" @click="toggleModalReservation()"
                 class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
        </div>

      </form>
    </div>
  </div>
</template>
<script>
  import Spinner from '../modules/Spinner.vue'

  export default {
    props: {
      isOpen: Boolean
    },
    components: {
      Spinner
    },
    data () {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        spinning: false
      }
    },
    methods: {
      toggleModalReservation () {
        this.$parent.toggleModalReservation()
      }
    }

  }
</script>
<style scoped>
  #modal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
  }

  #modal-content {
    position: relative;
    margin: 15% auto;
    background-color: #fff;
    width: 80%;
    padding: 15px;
  }
</style>

<template>
  <div class="container-tiny margin-auto">
    <div class="row flex-row margin-auto flex-y-center flex-y-stretch-xs flex-x-center align-center-m">

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
          <input type="submit" value="Réserver votre chambre"
                 class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookForm'
  }
</script>

<style>

</style>

<template>
  <div class="container-tiny margin-auto">
    <div class="row flex-row margin-auto border-bottom border-silver
      padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">


      <form method="post" class="flex-form styled-form padding padding-0-bottom">
        <div class="field-box">
          <label class="required">Prénom</label>
          <input type="text" name="firstname" placeholder="Prénom" required="required">
        </div>
        <div class="field-box">
          <label class="required">Nom</label>
          <input type="text" name="lastname" placeholder="Nom" required="required">
        </div>
        <div class="field-box">
          <label class="required">Code postal - Ville</label>
          <input type="text" name="code" placeholder="14000 Caen" required="required">
        </div>
        <div class="field-box">
          <label class="required">Adresse</label>
          <input type="text" name="address" placeholder="8 rue des Lilas" required="required">
        </div>
        <div class="field-box">
          <label class="required">Date de réservation</label>
          <input type="date" name="date" required="required">
        </div>
        <div class="align-field-box">
          <label class="required">Heure de début</label>
          <input type="time" name="date" required="required">
          <label class="required">Heure de fin</label>
          <input type="time" name="date" required="required">
        </div>
        <div class="field-box">

        </div>

        <div class="actions-box">
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

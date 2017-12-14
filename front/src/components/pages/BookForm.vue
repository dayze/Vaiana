<template>
  <div class="container-tiny margin-auto">
    <div class="row flex-row margin-auto border-bottom border-silver
      padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">


      <form method="post" class="flex-form styled-form padding padding-0-bottom">
        <div class="field-box">
          <input type="text" name="firstname" placeholder="prénom" required="required">
        </div>
        <div class="field-box">
          <input type="text" name="lastname" placeholder="nom" required="required">
        </div>
        <div class="field-box">
          <input type="text" name="mail" placeholder="john.doe@mail.com" required="required">
        </div>
        <div class="field-box">
          <input type="text" name="telephone" placeholder="0213374202" required="required">
        </div>
        <div class="field-box">
          <input type="date" name="date" required="required">
        </div>
        <div class="field-box">
          <div class="align-field-box">
            <input type="time" name="heuredebut" required="required">
            <input type="time" name="heurefin" required="required">
          </div>
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

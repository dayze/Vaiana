<template>
  <div class="container-tiny margin-auto">
    <form method="post" class="flex-form styled-form bg-yin padding padding-0-bottom">

      <div class="field-box">
        <input type="text" name="localisation" placeholder="localisation ..." required="required">
      </div>

      <div class="field-box">
        <input type="date" name="date" required="required">
      </div>

      <div class="field-box">
        <input type="submit" value="Search"
               class="border-none bg-green-sea color-yang cursor-pointer hover-bg-turquoise"/>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'SearchForm',
    data () {
      return {}
    }
  }
</script>

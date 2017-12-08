<template>
  <form method="post" class="flex-form styled-form padding padding-0-bottom">

    <div class="field-box">
      <input type="text" name="localisation" placeholder="Caen" required="required">
    </div>

    <div class="field-box">
      <input type="date" name="date" required="required">
    </div>

    <div class="field-box">
      <input type="submit" value="Search"
             class="border-none bg-pumpkin color-yang cursor-pointer hover-bg-carrot transition-3"/>
    </div>

  </form>
</template>

<script>
  export default {
    name: 'SearchForm',
    data () {
      return {}
    }
  }
</script>

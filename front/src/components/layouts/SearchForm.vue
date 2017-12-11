<template>
  <form method="post" class="flex-form styled-form padding padding-0-bottom">
    <div class="field-box">
      <input type="text" name="localisation" placeholder="Caen" required="required" v-model="city">
    </div>
    <input type="checkbox" v-model="check1">

    <div class="field-box">
      <input type="date" name="date" required="required">
    </div>

    <div class="field-box">
      <router-link :to="{ path: 'results' }">
        <input type="submit" value="Trouver une chambre"
               class="border-none bg-pumpkin color-yang cursor-pointer hover-bg-carrot transition-3"/>
      </router-link>
    </div>

  </form>
</template>

<script>
  export default {
    name: 'SearchForm',
    mounted () {
      console.log('coucou')
    },
    data () {
      return {
        city: '',
        check1: true
      }
    },
    method: {
      send () {

      }
    }
  }
</script>

  <template>
  <form action="/results" class="flex-form styled-form padding padding-0-bottom">
    <div class="field-box">
      <input type="text" name="localisation" placeholder="Caen" required="required" v-model="city">
    </div>
    <div class="field-box">
      <input type="date" name="date" required="required">
    </div>
    <div class="actions-box">
      <input type="submit" value="Trouver une chambre"
             class="border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'SearchForm',
    data () {
      return {
        city: ''
      }
    },
    method: {
      send () {

      }
    }
  }
</script>

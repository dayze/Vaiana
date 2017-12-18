<template>
  <div id="map" class="cell-12">
    <div class="map-container">
      <google-map-component :latitude="this.lat" :longitude="this.long"></google-map-component>
    </div>
    <div class="margin align-center">
      <a :href="this.mapLink" class="padding color-green-lagoon transition-3 hover-color-sweet-potato" target="_blank">Ouvrir
        avec Google Map</a>
    </div>
  </div>
</template>

<script>
  import GoogleMapComponent from '../modules/GoogleMap'

  export default {
    components: {GoogleMapComponent},
    data () {
      return {
        lat: Number,
        long: Number,
        mapLink: ''
      }
    },
    created () {
      this.lat = 49.276656
      this.long = -0.2586579999999685
      this.mapLink = `https://www.google.com/maps/search/?api=1&query=${this.lat},${this.long}`
    }
  }
</script>

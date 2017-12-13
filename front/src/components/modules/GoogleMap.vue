<template>
  <gmap-map
    :center="center"
    :zoom="14"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAsJpX6Uxk8C2F41X-IWm0FNAUFPA11rcI'
    }
  })

  export default {
    name: 'GoogleMapComponent',
    props: {
      latitude: Number,
      longitude: Number
    },
    mounted () {
      // console.log(this.latitude)
    },
    data () {
      return {
        center: {lat: this.latitude, lng: this.longitude},
        markers: [{
          position: {lat: this.latitude, lng: this.longitude}
        }]
      }
    }
  }
</script>

<style>
  .vue-map-container {
    width: 100%; height: 100%
  }
</style>

<template>
  <div>
    <!-- ### Carousel -->
    <carousel-component-detailed :name="this.name" :city="this.city"
                                 :images="this.images"></carousel-component-detailed>
    <!-- ### Services -->
    <div class="container margin-auto">
      <div class="row">
        <div class="cell-12">
          <nav class="border-bottom border-silver padding-10-top-bottom">
            <ul class="list-inline list-unstyled">
              <li>
                <a href="#presentation" title="Voir la présentation" class="color-deep-blue hover-color-green-lagoon"
                   v-smooth-scroll="{duration: 1000, offset: -50}">Présentation</a>
              </li>
              <li>
                <a href="#services" title="Voir les services"
                   class="color-deep-blue hover-color-green-lagoon" v-smooth-scroll="{duration: 1000, offset: -50}">Services</a>
              </li>
              <li>
                <a href="#comments" title="Voir les commentaires" class="color-deep-blue hover-color-green-lagoon"
                   v-smooth-scroll="{duration: 1000, offset: -50}">Commentaires</a>
              </li>
              <li>
                <a href="#contact" title="Contacter l'hôtel"
                   class="color-deep-blue hover-color-green-lagoon" v-smooth-scroll="{duration: 1000, offset: -50}">Contact</a>
              </li>
              <li>
                <a href="#map" title="Voir l'emplacement"
                   class="color-deep-blue hover-color-green-lagoon" v-smooth-scroll="{duration: 1000, offset: -90}">Emplacement</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <detail-presentation></detail-presentation>
      <detail-services></detail-services>

      <!-- ### Contact -->
      <div id="contact" class="row">
        <div class="cell-12">
          <h2 class="color-green-lagoon">Contact</h2>
          <ul class="list-unstyled">
            <li>
              The Joshua Tree House
            </li>
            <li>
              52 Quai Amiral Hamelin, 14000 Caen, France
            </li>
            <li>
              <a href="tel:01 23 45 67 89" class="color-green-lagoon transition-3 hover-color-sweet-potato">01 23 45 67
                89</a>
            </li>
            <li>
              <a href="malto:hotel@exemple.com" class="color-green-lagoon transition-3 hover-color-sweet-potato">hotel@exemple.com</a>
            </li>
          </ul>
        </div>
        <!-- MAP -->
        <div id="map" class="cell-12">
          <div class="map-container">
            <google-map-component :latitude="this.lat" :longitude="this.long"></google-map-component>
          </div>
          <div class="margin align-center">
            <a :href="this.mapLink" class="padding color-green-lagoon transition-3 hover-color-sweet-potato"
               target="_blank">Ouvrir avec Google Map</a>
          </div>
        </div>
      </div>

      <!-- ### Comments -->
      <comments :persons="this.persons"></comments>

    </div>

  </div>
</template>

<script>
  import StarRatings from '../modules/StarRatings.vue'
  import GoogleMapComponent from '../modules/GoogleMap.vue'
  import Comments from '../layouts/Comments'
  import CarouselComponentDetailed from '../modules/CarouselComponentDetailed'
  import DetailPresentation from '../layouts/DetailPresentation'
  import DetailServices from '../layouts/DetailServices'
  import vueSmoothScroll from 'vue-smooth-scroll'
  import Vue from 'vue'

  Vue.use(vueSmoothScroll)

  export default {
    components: {
      StarRatings,
      GoogleMapComponent,
      Comments,
      CarouselComponentDetailed,
      DetailPresentation,
      DetailServices
    },
    name: 'Detail',
    data () {
      return {
        openMoreServices: false,
        moreEquipement: 'Afficher plus d\'équipements ',
        persons: [],
        images: [],
        name: '',
        city: '',
        lat: Number,
        long: Number,
        visible: false,
        mapLink: ''
      }
    },
    created () {
      this.name = 'Hotel California'
      this.city = 'La Ferté Mathet'
      this.lat = 49.276656
      this.long = -0.2586579999999685
      this.mapLink = `https://www.google.com/maps/search/?api=1&query=${this.lat},${this.long}`
      for (let i = 1; i <= 3; i++) {
        this.persons.push({
          id: i,
          name: 'Lorem ipsum',
          comment: 'Sed et efficitur velit. Donec pellentesque fringilla dui, a dapibus quam ultricies eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut fermentum facilisis ante, sit amet aliquam sem faucibus vel. Aliquam erat volutpat. Integer sit amet elit vel nulla gravida pellentesque eu vitae tellus. Maecenas a arcu vitae justo venenatis luctus elementum id odio.',
          path: '../../assets/media/fake/persons/person' + i + '.jpg',
          date: '01/01/1992'
        })
      }
      for (let i = 1; i <= 4; i++) {
        this.images.push({
          id: i,
          path: '../../assets/media/fake/detailedRoom/room' + i + '.jpeg'
        })
      }
    }
  }
</script>

<style>
  .map-container {
    width: 100%;
    height: 50vh;
  }
</style>

<template>
  <div>
    <search-filters></search-filters>
    <!-- ROOM 1 -->
    <div
      class="row-column-xs container margin-auto border-bottom border-silver padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
      <div class="cell-5 c-7-m c-10-s">
        <figure>
          <img class="responsive-img border-2 border-pumpkin"
               src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
               alt="Image de chambre"/>
          <figcaption class="hide">
            description chambre lorem ipsum blabalbal
          </figcaption>
        </figure>
      </div>
      <div class="cell-7 c-10-m">
        <ul class="list-unstyled color-pumpkin">
          <li>
            <h3 class="margin-0">Nom de l'hotel</h3>
          </li>
          <li>
            <h3 class="margin-0">Adresse/ville</h3>
          </li>
          <li>
            <star-ratings></star-ratings>
          </li>
        </ul>
        <p class="truncate-4 hide-s">
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
        </p>
        <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
          <div class="cell-4">
            <h4 class="margin-0 color-pumpkin">
              <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
              <span class="txt-size-big">45</span>
              <span>€</span>
            </h4>
          </div>
          <div class="cell-4">
            <a href="#" class="bg-nephritis hover-bg-emerald padding-10 color-yang block align-center"
               title="Plus de détails">
              Plus de détails
            </a>
          </div>
          <div class="cell-4">
            <a href="#" class="bg-belize-hole hover-bg-peter-river padding-10 color-yang block align-center"
               title="Voir le calendrier">
              Le calendrier
            </a>
          </div>
        </div>
      </div>
    </div>


    <!-- ROOM 2 -->
    <div
      class="row-column-xs container margin-auto border-bottom border-silver padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
      <div class="cell-5 c-7-m c-10-s">
        <figure>
          <img class="responsive-img  border-2 border-pumpkin"
               src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
               alt="Image de chambre"/>
          <figcaption class="hide">
            description chambre lorem ipsum blabalbal
          </figcaption>
        </figure>
      </div>
      <div class="cell-7 c-10-m">
        <ul class="list-unstyled color-pumpkin">
          <li>
            <h3 class="margin-0">Nom de l'hotel</h3>
          </li>
          <li>
            <h3 class="margin-0">Adresse/ville</h3>
          </li>
          <li>
            <star-ratings></star-ratings>
          </li>
        </ul>
        <p class="truncate-4 hide-s">
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
        </p>
        <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
          <div class="cell-4">
            <h4 class="margin-0 color-pumpkin">
              <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
              <span class="txt-size-big">45</span>
              <span>€</span>
            </h4>
          </div>
          <div class="cell-4">
            <a href="#" class="bg-nephritis hover-bg-emerald padding-10 color-yang block align-center"
               title="Plus de détails">
              Plus de détails
            </a>
          </div>
          <div class="cell-4">
            <a href="#" class="bg-belize-hole hover-bg-peter-river padding-10 color-yang block align-center"
               title="Voir le calendrier">
              Le calendrier
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- ROOM 3 -->
    <div
      class="row-column-xs container margin-auto border-bottom border-silver padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
      <div class="cell-5 c-7-m c-10-s">
        <figure>
          <img class="responsive-img  border-2 border-pumpkin"
               src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
               alt="Image de chambre"/>
          <figcaption class="hide">
            description chambre lorem ipsum blabalbal
          </figcaption>
        </figure>
      </div>
      <div class="cell-7 c-10-m">
        <ul class="list-unstyled color-pumpkin">
          <li>
            <h3 class="margin-0">Nom de l'hotel</h3>
          </li>
          <li>
            <h3 class="margin-0">Adresse/ville</h3>
          </li>
          <li>
            <star-ratings></star-ratings>
          </li>
        </ul>
        <p class="truncate-4 hide-s">
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
        </p>
        <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
          <div class="cell-4">
            <h4 class="margin-0 color-pumpkin">
              <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
              <span class="txt-size-big">45</span>
              <span>€</span>
            </h4>
          </div>
          <div class="cell-4">
            <a href="#" class="bg-nephritis hover-bg-emerald padding-10 color-yang block align-center"
               title="Plus de détails">
              Plus de détails
            </a>
          </div>
          <div class="cell-4">
            <a href="#" class="bg-belize-hole hover-bg-peter-river padding-10 color-yang block align-center"
               title="Voir le calendrier">
              Le calendrier
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--....-->


  </div>
</template>

<script>
  import StarRatings from '../modules/StarRatings.vue'
  import SearchFilters from '../layouts/SearchFilters.vue'

  export default {
    components: {
      StarRatings,
      SearchFilters
    },
    name: 'SearchResults',
    data () {
      return {}
    }
  }
</script>

<template>
  <div>
    <search-filters-mobile></search-filters-mobile>
    <search-filters-desktop></search-filters-desktop>
    <div id="results-container" class="border-left border-silver">
      <!-- room 1-->
      <div
        class="row-column-xs padding padding-50-top-bottom border-bottom border-silver flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
        <div class="cell-5 c-7-m c-10-s">
          <figure>
            <img class="responsive-img"
                 src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
                 alt="Image de chambre"/>
            <figcaption class="hide">
              description chambre lorem ipsum blabalbal
            </figcaption>
          </figure>
        </div>
        <div class="cell-7 c-10-m">
          <ul class="list-unstyled color-green-lagoon">
            <li>
              <h2 class="margin-0">Nom de l'hotel</h2>
            </li>
            <li>
              <h3 class="margin-0">Adresse/ville</h3>
            </li>
            <li>
              <star-ratings :note="4"></star-ratings>
            </li>
          </ul>
          <p class="truncate-4 hide-s">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
          </p>
          <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
            <div class="cell-4">
              <h4 class="margin-0 color-deep-blue">
                <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
                <span class="txt-size-big">45</span>
                <span>€</span>
              </h4>
            </div>
            <div class="cell-4">
              <router-link :to="{ path: 'detail' }"
                           class="bg-sunglow hover-bg-yang border transition-3 border-sunglow hover-color-sunglow padding-10 color-yang block align-center"
                           title="Plus de détails">
                Plus de détails
              </router-link>
            </div>
            <div class="cell-4">
              <a href="#"
                 class="bg-sweet-potato hover-bg-yang border transition-3 border-sweet-potato hover-color-sweet-potato padding-10 color-yang block align-center"
                 title="Voir le calendrier">
                Le calendrier
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- room 2 -->
      <div
        class="row-column-xs padding padding-50-top-bottom bg-clouds border-bottom border-silver flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
        <div class="cell-5 c-7-m c-10-s">
          <figure>
            <img class="responsive-img"
                 src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
                 alt="Image de chambre"/>
            <figcaption class="hide">
              description chambre lorem ipsum blabalbal
            </figcaption>
          </figure>
        </div>
        <div class="cell-7 c-10-m">
          <ul class="list-unstyled color-green-lagoon">
            <li>
              <h2 class="margin-0">Nom de l'hotel</h2>
            </li>
            <li>
              <h3 class="margin-0">Adresse/ville</h3>
            </li>
            <li>
              <star-ratings :note="4"></star-ratings>
            </li>
          </ul>
          <p class="truncate-4 hide-s">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
          </p>
          <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
            <div class="cell-4">
              <h4 class="margin-0 color-deep-blue">
                <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
                <span class="txt-size-big">45</span>
                <span>€</span>
              </h4>
            </div>
            <div class="cell-4">
              <router-link :to="{ path: 'detail' }"
                           class="bg-sunglow hover-bg-yang border transition-3 border-sunglow hover-color-sunglow padding-10 color-yang block align-center"
                           title="Plus de détails">
                Plus de détails
              </router-link>
            </div>
            <div class="cell-4">
              <a href="#"
                 class="bg-sweet-potato hover-bg-yang border transition-3 border-sweet-potato hover-color-sweet-potato padding-10 color-yang block align-center"
                 title="Voir le calendrier">
                Le calendrier
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- room 3 -->
      <div
        class="row-column-xs padding padding-50-top-bottom border-bottom border-silver flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
        <div class="cell-5 c-7-m c-10-s">
          <figure>
            <img class="responsive-img"
                 src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
                 alt="Image de chambre"/>
            <figcaption class="hide">
              description chambre lorem ipsum blabalbal
            </figcaption>
          </figure>
        </div>
        <div class="cell-7 c-10-m">
          <ul class="list-unstyled color-green-lagoon">
            <li>
              <h2 class="margin-0">Nom de l'hotel</h2>
            </li>
            <li>
              <h3 class="margin-0">Adresse/ville</h3>
            </li>
            <li>
              <star-ratings :note="4"></star-ratings>
            </li>
          </ul>
          <p class="truncate-4 hide-s">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
          </p>
          <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
            <div class="cell-4">
              <h4 class="margin-0 color-deep-blue">
                <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
                <span class="txt-size-big">45</span>
                <span>€</span>
              </h4>
            </div>
            <div class="cell-4">
              <router-link :to="{ path: 'detail' }"
                           class="bg-sunglow hover-bg-yang border transition-3 border-sunglow hover-color-sunglow padding-10 color-yang block align-center"
                           title="Plus de détails">
                Plus de détails
              </router-link>
            </div>
            <div class="cell-4">
              <a href="#"
                 class="bg-sweet-potato hover-bg-yang border transition-3 border-sweet-potato hover-color-sweet-potato padding-10 color-yang block align-center"
                 title="Voir le calendrier">
                Le calendrier
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- room 4 -->
      <div
        class="row-column-xs padding padding-50-top-bottom bg-clouds border-bottom border-silver flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
        <div class="cell-5 c-7-m c-10-s">
          <figure>
            <img class="responsive-img"
                 src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
                 alt="Image de chambre"/>
            <figcaption class="hide">
              description chambre lorem ipsum blabalbal
            </figcaption>
          </figure>
        </div>
        <div class="cell-7 c-10-m">
          <ul class="list-unstyled color-green-lagoon">
            <li>
              <h2 class="margin-0">Nom de l'hotel</h2>
            </li>
            <li>
              <h3 class="margin-0">Adresse/ville</h3>
            </li>
            <li>
              <star-ratings :note="4"></star-ratings>
            </li>
          </ul>
          <p class="truncate-4 hide-s">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
          </p>
          <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
            <div class="cell-4">
              <h4 class="margin-0 color-deep-blue">
                <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
                <span class="txt-size-big">45</span>
                <span>€</span>
              </h4>
            </div>
            <div class="cell-4">
              <router-link :to="{ path: 'detail' }"
                           class="bg-sunglow hover-bg-yang border transition-3 border-sunglow hover-color-sunglow padding-10 color-yang block align-center"
                           title="Plus de détails">
                Plus de détails
              </router-link>
            </div>
            <div class="cell-4">
              <a href="#"
                 class="bg-sweet-potato hover-bg-yang border transition-3 border-sweet-potato hover-color-sweet-potato padding-10 color-yang block align-center"
                 title="Voir le calendrier">
                Le calendrier
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- room 5 -->
      <div
        class="row-column-xs padding padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
        <div class="cell-5 c-7-m c-10-s">
          <figure>
            <img class="responsive-img"
                 src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
                 alt="Image de chambre"/>
            <figcaption class="hide">
              description chambre lorem ipsum blabalbal
            </figcaption>
          </figure>
        </div>
        <div class="cell-7 c-10-m">
          <ul class="list-unstyled color-green-lagoon">
            <li>
              <h2 class="margin-0">Nom de l'hotel</h2>
            </li>
            <li>
              <h3 class="margin-0">Adresse/ville</h3>
            </li>
            <li>
              <star-ratings :note="4"></star-ratings>
            </li>
          </ul>
          <p class="truncate-4 hide-s">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
          </p>
          <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
            <div class="cell-4">
              <h4 class="margin-0 color-deep-blue">
                <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
                <span class="txt-size-big">45</span>
                <span>€</span>
              </h4>
            </div>
            <div class="cell-4">
              <router-link :to="{ path: 'detail' }"
                           class="bg-sunglow hover-bg-yang border transition-3 border-sunglow hover-color-sunglow padding-10 color-yang block align-center"
                           title="Plus de détails">
                Plus de détails
              </router-link>
            </div>
            <div class="cell-4">
              <a href="#"
                 class="bg-sweet-potato hover-bg-yang border transition-3 border-sweet-potato hover-color-sweet-potato padding-10 color-yang block align-center"
                 title="Voir le calendrier">
                Le calendrier
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- <div class="row">
     <search-filters-mobile></search-filters-mobile>
     <div id="filters">
       <search-filters-desktop></search-filters-desktop>
     </div>

     <div id="results" class="container margin-auto">

       &lt;!&ndash; ROOM 1 &ndash;&gt;
       <div
         class="row-column-xs container margin-auto border-bottom border-silver padding-50-top-bottom flex-y-center flex-y-stretch-xs flex-x-center align-center-m">
         <div class="cell-5 c-7-m c-10-s">
           <figure>
             <img class="responsive-img"
                  src="../../assets/media/fake/room1/pexels-photo-271618.jpeg"
                  alt="Image de chambre"/>
             <figcaption class="hide">
               description chambre lorem ipsum blabalbal
             </figcaption>
           </figure>
         </div>
         <div class="cell-7 c-10-m">
           <ul class="list-unstyled color-green-lagoon">
             <li>
               <h2 class="margin-0">Nom de l'hotel</h2>
             </li>
             <li>
               <h3 class="margin-0">Adresse/ville</h3>
             </li>
             <li>
               <star-ratings :note="4"></star-ratings>
             </li>
           </ul>
           <p class="truncate-4 hide-s">
             Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.
           </p>
           <div class="row-column-s flex-y-center flex-y-stretch-s align-center">
             <div class="cell-4">
               <h4 class="margin-0 color-deep-blue">
                 <span class="color-wet-asphalt txt-unstyled margin-right">à partir de :</span>
                 <span class="txt-size-big">45</span>
                 <span>€</span>
               </h4>
             </div>
             <div class="cell-4">
               <router-link :to="{ path: 'detail' }"
                            class="bg-sunglow hover-bg-yang border transition-3 border-sunglow hover-color-sunglow padding-10 color-yang block align-center"
                            title="Plus de détails">
                 Plus de détails
               </router-link>
             </div>
             <div class="cell-4">
               <a href="#"
                  class="bg-sweet-potato hover-bg-yang border transition-3 border-sweet-potato hover-color-sweet-potato padding-10 color-yang block align-center"
                  title="Voir le calendrier">
                 Le calendrier
               </a>
             </div>
           </div>
         </div>
       </div>

     </div>
   </div>-->
</template>

<script>
  import StarRatings from '../modules/StarRatings.vue'
  import SearchFiltersMobile from '../layouts/SearchFiltersMobile.vue'
  import SearchFiltersDesktop from '../layouts/SearchFiltersDesktop.vue'

  export default {
    components: {
      StarRatings,
      SearchFiltersMobile,
      SearchFiltersDesktop
    },
    name: 'SearchResults',
    data () {
      return {}
    }
  }
</script>

<style>

  #results-container {
    margin-left: 300px;
  }

  @media screen and (max-width: 992px) {
    #results-container {
      margin-left: 0;
    }
  }

  /*#results {
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
  }

  #results > div:nth-child(2n) {
    background: #ECF0F1;
  }

  @media screen and (max-width: 768px) {
    #results {
      margin-left: 10px;
    }
  }*/
</style>

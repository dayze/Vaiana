<template>
  <div class="row bg-yang flex-y-center fixed-row-top" id="navbar" role="navigation">

    <!-- MENU BURGER ICON -->
    <burger-menu></burger-menu>

    <!-- LOGO -->
    <div class="cell-5 c-6-s align-left align-center-s">
      <h1 class="transition-3 margin-0 txt-unset txt-size-big txt-size-normal-xs txt-upper">
        <a href="/" class="inline-block" title="Accueil">Booking Day</a>
      </h1>
    </div>

    <!-- MENU LIST -->
    <div class="cell-7 align-right hide-s" id="menuList">
      <navbar-content></navbar-content>
    </div>
    <!-- SEARCH ICON -->
    <div class="cell-3 hide show-s align-right">
      <img id="search-icon" class="responsive-img cursor-pointer" src="../../assets/icons/search.svg"/>
    </div>

  </div>
</template>

<script>
  import BurgerMenu from '../modules/BurgerMenu.vue'
  import NavbarContent from '../layouts/NavbarContent.vue'

  export default {
    components: {BurgerMenu, NavbarContent},
    name: 'Navbar',
    data () {
      return {
        isChecked: false
      }
    },
    methods: {
      toggle () {
        this.isChecked = !this.isChecked
      }
    }
  }
</script>

<style>

  <
  <
  <
  <
  <
  <
  <
  HEAD
  #nav-bar {
    z-index: 1001;

  /* gt 1000 for counter before and after magicmonkey */
  =
  =
  =
  =
  =
  =
  =
  #navbar {
    border-bottom: 1px solid #BDC3C7;
  > > > > > > > 8051209559 c703d87bb902982061231e80ba01ae
  }

  #search-icon {
    max-width: 25px;
  }

  #menuList ul li {
    display: inline;
  }

  /*
   * Transform all the slices of hamburger
   * into a crossmark.
   */
  /*#menuToggle input:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-13px, -11px);
    background: #232323;
  }

  !*
   * But let's hide the middle one.
   *!
  #menuToggle input:checked ~ span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  !*
   * Ohyeah and the last one should go the other direction
   *!
  #menuToggle input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(-45deg) translate(-8px, 7px);
  }*/
</style>

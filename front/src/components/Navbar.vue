<template>
  <div class="row bg-yang flex-y-center padding" role="navigation">

    <!-- MENU BURGER ICON -->
    <div class="cell-3 hide show-s" id="menuToggle">
      <input type="checkbox"/>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- LOGO -->
    <div class="cell-6 align-left align-center-s">
      <h1 class="transition-3 txt-unset txt-size-big txt-size-normal-xs txt-upper">
        <a href="/" class="inline-block" title="Accueil">Booking Day</a>
      </h1>
    </div>

    <!-- MENU LIST -->
    <div class="cell-6 align-right hide-s">
      <ul class="list-unstyled list-inline list-separator">
        <li class="border-orange">
          <a class="hover-color-pumpkin" href="#" title="Mon Compte">Mon compte</a>
        </li>
        <li class="border-orange">
          <a class="hover-color-pumpkin" href="#" title="A propos">A propos</a>
        </li>
        <li class="border-orange">
          <a class="hover-color-pumpkin" href="#" title="Contact">Contact</a>
        </li>
      </ul>
    </div>

    <!-- SEARCH ICON -->
    <div class="cell-3 hide show-s align-right">
      <img class="responsive-img cursor-pointer" src="../assets/icons/search.svg"/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>

  img {
    max-width: 25px;
  }

  #menuToggle {
    /*display: block;*/
    position: relative;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }

  /*
   * Just a quick hamburger
   */
  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #404852;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0 0;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0 100%;
  }

  #menuToggle span:last-child {
    margin-bottom: 0;
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

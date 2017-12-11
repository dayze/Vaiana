<template>
  <div>
    <div id="menuBurger" :class="{move: !isChecked}" class="transition-2">
        <div class="align-right padding cursor-pointer" @click="toggle()">X</div>
        <navbar-content></navbar-content>
    </div>
    <div class="cell-3 hide show-s" id="menuToggle">
      <input type="checkbox" v-model="isChecked" @click="toggle()"/>
      <span></span>
      <span></span>
      <span></span>
    </div>


  </div>
</template>

<script>
  import NavbarContent from '../layouts/NavbarContent.vue'
  export default {
    components: {NavbarContent},
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
  .move {
    left: -200px;
  }
  #menuBurger {
    top: 0;
    height: 100vh;
    width: 200px;
    position: absolute;
    background-color: #fff;
    z-index: 1;
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
</style>

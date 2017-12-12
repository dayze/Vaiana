<template>
  <div>
    <ul
      class="list-unstyled list-inline list-separator list-block-s align-center-s list-no-separator color-clouds-s padding-top-s">
      <li class="padding-s border-bottom-s bg-sky-s border-yang">
        <a class="hover-color-pumpkin" href="#" title="Rechercher">Rechercher</a>
      </li>
      <li class="padding-s border-bottom-s bg-sky-s border-yang">
        <a class="hover-color-pumpkin" href="#" title="Mon Compte">Mon compte</a>
      </li>
      <li class="padding-s border-bottom-s bg-sky-s border-yang">
        <a class="hover-color-pumpkin" href="#" title="A propos">A propos</a>
      </li>
      <li class="padding-s bg-sky-s border-yang border-bottom-s">
        <a class="hover-color-pumpkin" href="#" title="Contact">Contact</a>
      </li>
      <li class="padding-s bg-sky-s border-yang">
        <a class="hover-color-pumpkin" href="#" @click="toggle()" title="Connexion">Se connecter</a>
      </li>
    </ul>
    <template v-if="isModalUserOpen">
      <modal-connexion v-on:close="toggle()" :isOpen="isModalUserOpen"></modal-connexion>
    </template>
  </div>
</template>

<script>
  import ModalConnexion from './ModalConnexion.vue'

  export default {
    components: {ModalConnexion},
    data () {
      return {
        isModalUserOpen: false
      }
    },
    methods: {
      toggle () {
        console.log('toggle')
        this.isModalUserOpen = !this.isModalUserOpen
      }
    }
  }
</script>


<style lang="scss">

</style>

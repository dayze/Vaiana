<template>
  <div>
    <ul
      class="list-unstyled list-inline list-separator list-block-s align-center-s list-no-separator color-clouds-s padding-top-s">
      <li class="padding-s border-bottom-s bg-sky-s border-yang">
        <a class="hover-color-green-lagoon" href="#" title="Rechercher">Rechercher</a>
      </li>
      <li class="padding-s border-bottom-s bg-sky-s border-yang">
        <a class="hover-color-green-lagoon" href="#" title="Mon Compte">Mon compte</a>
      </li>
      <li class="padding-s border-bottom-s bg-sky-s border-yang">
        <a class="hover-color-green-lagoon" href="#" title="A propos">A propos</a>
      </li>
      <li class="padding-s bg-sky-s border-yang border-bottom-s">
        <a class="hover-color-green-lagoon" href="#" title="Contact">Contact</a>
      </li>
      <li class="padding-s bg-sky-s border-yang">
        <a class="hover-color-green-lagoon" @click="toggle()" title="Connexion">Se connecter</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      toggle () {
        this.$emit('toggle')
      }
    }

  }
</script>


<style lang="scss">

</style>

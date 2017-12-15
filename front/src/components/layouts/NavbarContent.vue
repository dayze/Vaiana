<template>
  <div>
    <ul
      class="list-unstyled list-inline list-separator list-block-s align-center-s list-no-separator color-clouds-s padding-top-s">
      <li class="padding-s border-bottom-s bg-green-lagoon-s border-yang">
        <a class="hover-color-green-lagoon" href="/results" title="Rechercher">Rechercher</a>
      </li>
      <li class="padding-s border-bottom-s bg-green-lagoon-s border-yang">
        <a class="hover-color-green-lagoon" href="/user" title="Mon Compte">Mon compte</a>
      </li>
      <li class="padding-s border-bottom-s bg-green-lagoon-s border-yang">
        <a class="hover-color-green-lagoon" href="/#about" title="A propos">A propos</a>
      </li>
      <li class="padding-s bg-green-lagoon-s border-yang border-bottom-s">
        <a class="hover-color-green-lagoon" href="/#footer" title="Contact">Contact</a>
      </li>
      <li class="padding-s bg-green-lagoon-s border-yang">
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

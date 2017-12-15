<template>
  <div>
    <ul
      class="list-unstyled list-inline list-separator list-block-m align-center-m list-no-separator color-clouds-m padding-top-m">
      <li class="padding-m border-bottom-m bg-green-lagoon-m border-yang">
        <router-link class="hover-color-green-lagoon" :to="{ path: 'results' }" title="Rechercher">Rechercher</router-link>
      </li>
      <li class="padding-m border-bottom-m bg-green-lagoon-m border-yang">
        <router-link class="hover-color-green-lagoon" :to="{ path: 'user' }" title="Mon compte">Mon compte</router-link>
      </li>
      <li class="padding-m border-bottom-m bg-green-lagoon-m border-yang">
        <a class="hover-color-green-lagoon" href="/#about" title="A propos">A propos</a>
      </li>
      <li class="padding-m bg-green-lagoon-m border-yang border-bottom-m">
        <a class="hover-color-green-lagoon" href="/#contact" title="Contact">Contact</a>
      </li>
      <li class="padding-m bg-green-lagoon-m border-yang">
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

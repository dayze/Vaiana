<template>
    <ul
      class="list-unstyled list-inline list-separator list-block-m align-center-m list-no-separator color-clouds-m">
      <li class="border-bottom-m bg-deep-blue-m border-yang">
        <router-link class="padding-30-m block-m hover-color-sunglow transition-2" :to="{ path: 'results' }" title="Rechercher">Rechercher</router-link>
      </li>
      <li class="border-bottom-m bg-deep-blue-m border-yang">
        <router-link class="padding-30-m block-m hover-color-sunglow transition-2" :to="{ path: 'user' }" title="Mon compte">Mon compte</router-link>
      </li>
      <li class="border-bottom-m bg-deep-blue-m border-yang">
        <a class="padding-30-m block-m hover-color-sunglow transition-2" href="/#about" title="A propos">A propos</a>
      </li>
      <li class="bg-deep-blue-m border-yang border-bottom-m">
        <a class="padding-30-m block-m hover-color-sunglow transition-2" href="/#footer" title="Contact">Contact</a>
      </li>
      <li class="bg-deep-blue-m border-yang">
        <a class="padding-30-m block-m hover-color-sunglow transition-2" @click="toggle()" title="Connexion">Se connecter</a>
      </li>
    </ul>
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

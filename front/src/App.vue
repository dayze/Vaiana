<template>
  <div id="app">
    <!-- load header -->
    <template v-if="isModalUserOpen">
      <modal-connexion v-on:toggle="toggle()" :isOpen="isModalUserOpen"></modal-connexion>
    </template>
    <navbar v-on:toggle="toggle()"></navbar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/layouts/Navbar'
  import ModalConnexion from '@/components/layouts/ModalConnexion'
  import FooterLayout from '@/components/layouts/FooterLayout'

  export default {
    components: {
      Navbar,
      ModalConnexion,
      FooterLayout
    },
    name: 'app',
    data () {
      return {
        isModalUserOpen: false
      }
    },
    methods: {
      toggle () {
        this.isModalUserOpen = !this.isModalUserOpen
      }
    }
  }
</script>

<style>
  body {
    font-size: 1.05em;
  }

  main {
    margin-top: 75px;
  }

  input, a {
    border-radius: 5px;
  }
</style>

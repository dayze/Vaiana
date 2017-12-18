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
    <footer-layout></footer-layout>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
  import Navbar from '@/components/layouts/Navbar'
  import ModalConnexion from '@/components/layouts/ModalConnexion'
  import FooterLayout from '@/components/layouts/FooterLayout'
  import BackToTop from '@/components/modules/BackToTop'

  export default {
    components: {
      Navbar,
      ModalConnexion,
      FooterLayout,
      BackToTop
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
  html,
  body {
    height: 100%
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    margin-top: 75px;
    flex: 1;
  }

  input, a {
    border-radius: 5px;
  }
</style>

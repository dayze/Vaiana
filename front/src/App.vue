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

  body {
    margin: 0
  }

  #app {
    display: table;
    width: 100%;
    height: 100%;
  }

  main {
    margin-top: 75px;
    margin-bottom: 75px;
  }

  input, a {
    border-radius: 5px;
  }
</style>

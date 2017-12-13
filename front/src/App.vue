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

  export default {
    components: {
      Navbar,
      ModalConnexion
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
    },
    mounted: function () {
      this.$nextTick(function () {
        let nav = document.querySelector('div[role=navigation]')
        let main = document.querySelector('main')
        let home = document.querySelector('main #home')
        if (home === null) {
          main.style.marginTop = nav.offsetHeight + 'px'
        }
      })
    }
  }
</script>

<style>
  body {
    font-size: 1.05em;
  }

  input, a {
    border-radius: 5px;
  }
</style>

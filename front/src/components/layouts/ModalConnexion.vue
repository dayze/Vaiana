<template>
  <div id="modal">
    <spinner :active="false"></spinner>
    <div id="modal-content" class="round-5">
      <span class="cursor-pointer align-right float-right" @click="toggle()">X</span>
      <form method="post" class="flex-form styled-form padding padding-0-bottom">
        <div class="field-box">
          <input type="text" name="email" placeholder="Email" required="required" v-model="email">
        </div>
        <div class="field-box">
          <input type="password" placeholder="Mot de passe" name="password" required="required" v-model="password">
        </div>
        <div class="field-box">
          <router-link :to="{ path: 'results' }">
            <input type="submit" value="Se connecter/S'inscrire" @click="toggle()"
                   class="border-none bg-pumpkin color-yang cursor-pointer hover-bg-carrot transition-3"/>
          </router-link>
        </div>

      </form>
    </div>
  </div>
</template>
<script>
  import Spinner from '../modules/Spinner.vue'

  export default {
    props: {
      isOpen: Boolean
    },
    components: {
      Spinner
    },
    data () {
      return {
        email: '',
        password: '',
        spinning: false
      }
    },
    methods: {
      toggle () {
        this.$emit('toggle')
      }
    }

  }
</script>
<style scoped>
  #modal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }

  #modal-content {
    position: relative;
    margin: 15% auto;
    background-color: #fff;
    width: 50%;
    padding: 15px;
  }
</style>

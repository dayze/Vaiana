<template>
  <footer class="bg-deep-blue color-yang">
    <div class="row flex-y-center flex-x-center">
      <!-- FORM NEWS LETTER -->
      <div class="cell-6 align-center">
        <form>
          <label for="email">La newsletter Bookingday.fr : </label>
          <input class="padding-10 border-none" type="email" name="email" id="email" placeholder="email"/>
          <input type="submit" id="newsletter" value="S'inscrire" class="txt-uppercase padding-10 border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
        </form>
      </div>

      <!-- SOCIAL NETWORKS -->
      <div class="cell-1 txt-size-giant">
        <i class="devicon-facebook-plain"></i>
        <i class="devicon-twitter-plain"></i>
      </div>
    </div>
  </footer>
</template>

<script>
  import NavbarContent from '@/components/layouts/NavbarContent'

  export default {
    components: {
      NavbarContent
    },
    name: 'FooterLayout'
  }
</script>

<style>
  footer{
    height: 75px;
    display: table-row;
  }

  #newsletter{
    text-transform: uppercase;
  }
</style>

<template>
  <footer class="bg-deep-blue color-yang padding-50-top-bottom">
    <div class="row flex-y-center">
      <!-- FORM NEWS LETTER -->
      <div class="cell-6 align-center">
        <form>
          <label for="email">Inscrivez-vous à la newsletter de BookingDay</label>
          <input class="padding-10 border-none" type="email" name="email" id="email" placeholder="Votre email"/>
          <input type="submit" value="S'inscrire"/>
        </form>
      </div>

      <!-- SOCIAL NETWORKS -->
      <div class="cell-6 txt-size-giant bg-silver">
        <i class="devicon-facebook-plain"></i>
        <i class="devicon-twitter-plain"></i>
      </div>
    </div>
    <div class="row">
      <div class="cell-12 c-12-margin-0-s">
        <navbar-content></navbar-content>
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

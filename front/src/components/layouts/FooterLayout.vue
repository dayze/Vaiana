<template>
  <footer id="footer" class="bg-deep-blue color-yang">
    <div class="row flex-y-center flex-x-center">
      <!-- FORM NEWS LETTER -->
        <div class="cell-6 c-12-l align-center">
          <form class="form-responsive">
            <label class="" for="email">La newsletter Bookingday.fr : </label>
            <input class="padding-10 border-none" type="email" name="email" id="email" placeholder="email"/>
            <input type="submit" id="newsletter" value="S'inscrire" class="txt-upper padding-10 border-none bg-sunglow color-yang cursor-pointer hover-bg-sweet-potato transition-3"/>
          </form>
        </div>
        <div class="cell-6 c-12-l icons">
          <i class="devicon-facebook-plain"></i>
          <i class="devicon-twitter-plain"></i>
          <i class="devicon-vuejs-plain"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-html5-plain"></i>
          <i class="devicon-css3-plain"></i>
        </div>
      </div>


      <!-- SOCIAL NETWORKS -->

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
    display: table-row;
  }

  .icons{
    display: inline-flex;
    justify-content: center;
    font-size: 2rem;
  }
  .icons > i{
    padding: 10px;
  }

  @media screen and (max-width: 1200px) {
    .form-responsive{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;

      margin: auto;
      margin-bottom: 20px;
      flex-basis: 100%;

      max-width: 600px;
    }

    .form-responsive > label, .form-responsive > input{
      width: 100%;
      margin: 5px 0 5px;
    }
  }

  @media screen and (max-width: 480px) {
    .icons{
      font-size: 1.5rem;
    }
  }

</style>

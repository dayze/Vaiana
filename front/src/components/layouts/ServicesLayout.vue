<template>
  <div id="services" class="margin-auto">
    <div class="container margin-auto">
      <div class="row">
        <div id="first" class="cell-12">
          <h3 class="color-green-lagoon txt-upper align-center txt-unset txt-size-medium">Lorem ipsum dolor sit
            amet</h3>
          <p class="align-center align-justify margin margin-50-top"> Donec porta rutrum risus, vitae hendrerit felis
            mollis vel.
            Vestibulum
            lacinia,
            tellus
            pulvinar aliquet vehicula, odio neque ornare augue, eu malesuada lorem ligula in neque. Curabitur ac
            interdum
            justo. Morbi ac tristique libero. Cras finibus erat vel diam congue, ut imperdiet dui hendrerit. Cras eu
            tempus
            eros.</p>
        </div>
      </div>
      <hr class="width-10 margin-50-top-bottom border-solid border-silver border-thin">
      <div class="row padding-30-top flex-y-center flex-x-center">

        <div class="cell-3 c-6-l c-12-s flex-item-order-0-l align-center">
          <icon name="briefcase" scale="4" class="color-deep-blue"></icon>
        </div>


        <div class="cell-3 c-6-l c-12-s flex-item-order-1-l flex-item-order-2-s align-center">
          <icon name="shower" scale="4" class="color-green-lagoon"></icon>
        </div>

        <div class="cell-3 c-6-l c-12-s flex-item-order-4-l align-center">
          <icon name="map" scale="4" class="color-sunglow"></icon>
        </div>


        <div class="cell-3 c-6-l c-12-s flex-item-order-5-l flex-item-order-6-s align-center">
          <icon name="bed" scale="4" class="color-sweet-potato"></icon>
        </div>

        <div class="cell-3 c-6-l c-12-s flex-item-order-2-l flex-item-order-1-s align-center">
          <p class="align-center align-justify margin">
            <span class="margin-left">Donec</span> porta rutrum risus, vitae hendrerit felis mollis vel. Vestibulum lacinia, tellus
            pulvinar aliquet vehicula, odio neque ornare augue, eu malesuada lorem ligula in neque. Curabitur ac
            interdum
            justo. Morbi ac tristique libero. Cras finibus erat vel diam congue, ut imperdiet dui hendrerit. Cras eu
            tempus
            eros.
          </p>
        </div>


        <div class="cell-3 c-6-l c-12-s flex-item-order-3-l flex-item-order-3-s align-center">
          <p class="align-center align-justify margin">
            Donec porta rutrum risus, vitae hendrerit felis mollis vel. Vestibulum lacinia, tellus
            pulvinar aliquet vehicula, odio neque ornare augue, eu malesuada lorem ligula in neque. Curabitur ac
            interdum
            justo. Morbi ac tristique libero. Cras finibus erat vel diam congue, ut imperdiet dui hendrerit. Cras eu
            tempus
            eros.
          </p>
        </div>


        <div class="cell-3 c-6-l c-12-s flex-item-order-6-l flex-item-order-5-s align-center">
          <p class="align-center align-justify margin">
            Donec porta rutrum risus, vitae hendrerit felis mollis vel. Vestibulum lacinia, tellus
            pulvinar aliquet vehicula, odio neque ornare augue, eu malesuada lorem ligula in neque. Curabitur ac
            interdum
            justo. Morbi ac tristique libero. Cras finibus erat vel diam congue, ut imperdiet dui hendrerit. Cras eu
            tempus
            eros.
          </p>
        </div>


        <div class="cell-3 c-6-l c-12-s flex-item-order-7-l align-center">
          <p class="align-center align-justify margin">
            Donec porta rutrum risus, vitae hendrerit felis mollis vel. Vestibulum lacinia, tellus
            pulvinar aliquet vehicula, odio neque ornare augue, eu malesuada lorem ligula in neque. Curabitur ac
            interdum
            justo. Morbi ac tristique libero. Cras finibus erat vel diam congue, ut imperdiet dui hendrerit. Cras eu
            tempus
            eros
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'services.vue',
    components: {
      Icon
    }
  }
</script>

<style>
  #services {
    margin: 100px 0 100px;
  }

  .border-thin {
    border-width: 0.5px;
  }
</style>

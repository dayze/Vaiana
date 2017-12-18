<template>
  <div class="tab" :class="{'active': isDisplayed}">
    <slot></slot>
  </div>
</template>

<script>
  import { bus } from './bus'

  export default {
    props: {
      relatedTo: {type: Number, required: true}
    },
    data () {
      return {
        isDisplayed: false
      }
    },
    created () {
      bus.$on('show', payload => {
        this.isDisplayed = payload === this.relatedTo
        bus.$emit('showed', payload)
      })
    }
  }
</script>

<style scoped>
  .tab {
    display: none
  }

  .active {
    display: initial;
  }
</style>

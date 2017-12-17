<template>
  <div :class="classToDisplay" @click="show()">
    <slot></slot>
  </div>
</template>

<script>
  import { bus } from './bus'

  export default {
    props: {
      relatedTo: {type: Number, required: true},
      isDefault: Boolean,
      classOnActive: '',
      classOnInactive: ''
    },
    data () {
      return {
        active: false
      }
    },
    methods: {
      show () {
        bus.$emit('show', this.relatedTo)
      }
    },
    computed: {
      classToDisplay () {
        return this.active ? this.classOnActive : this.classOnInactive
      }
    },
    mounted () {
      if (this.isDefault) {
        this.show()
      }
    },
    created () {
      bus.$on('showed', payload => {
        this.active = payload === this.relatedTo
      })
    }
  }
</script>


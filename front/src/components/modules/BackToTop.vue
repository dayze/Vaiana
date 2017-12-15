<template>
  <div id="back-to-top" class="init dont-show">
    <a href="#app" v-smooth-scroll="{duration: 500, offset: 0}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.064 26.064" width="25" height="25">
        <path
          d="M24.87 14.261l-8.643-8.869c-.765-.767-1.691-1.223-2.691-1.223v-.067h-.623c-1.096 0-2.121.49-2.885 1.256l-8.834 8.868a4.107 4.107 0 0 0 0 5.79l.737.746c.768.77 1.793 1.197 2.886 1.197s2.117-.422 2.887-1.19l5.328-5.327 5.328 5.328c.77.77 1.794 1.193 2.887 1.193s2.118-.424 2.887-1.193l.736-.736a4.086 4.086 0 0 0 0-5.773zm-1.414 4.358l-.737.737c-.403.405-.938.606-1.472.606s-1.067-.201-1.473-.606l-6.742-6.742-6.742 6.742a2.072 2.072 0 0 1-1.473.606 2.079 2.079 0 0 1-1.473-.606l-.736-.737a2.085 2.085 0 0 1 0-2.944l8.836-8.836a2.068 2.068 0 0 1 1.588-.597 2.067 2.067 0 0 1 1.589.597l8.835 8.836c.81.81.81 2.135 0 2.944z" fill="#FFFFFF"/>
      </svg>
    </a>
  </div>
</template>

<script>
  import vueSmoothScroll from 'vue-smooth-scroll'
  import Vue from 'vue'

  Vue.use(vueSmoothScroll)

  export default {
    name: 'back-to-top',
    mounted () {
      document.addEventListener('scroll', displayHideButton)
    }
  }

  function displayHideButton () {
    let backToTop = document.querySelector('#back-to-top')
    if (backToTop.classList.contains('init')) {
      backToTop.classList.remove('init')
    }
    if (window.scrollY === 0 && !backToTop.classList.contains('dont-show')) {
      backToTop.classList.add('dont-show')
      backToTop.classList.remove('show')
    } else if (window.scrollY >= 0 && backToTop.classList.contains('dont-show')) {
      backToTop.classList.remove('dont-show')
      backToTop.classList.add('show')
    }
  }
</script>

<style scoped>
  #back-to-top {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 30px;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  #back-to-top.init {
    opacity: 0;
    display: none;
  }

  #back-to-top.dont-show {
    animation-name: dont-show;
  }

  #back-to-top.show {
    animation-name: show;
  }

  @keyframes dont-show {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      z-index: -100;
    }
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      z-index: inherit;
    }
  }

  #back-to-top a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #E1B753;
    border: none;
    padding: 0;
  }
</style>

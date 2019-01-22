<template>
  <div>
    <header class="flex justify-between items-center a-px-md header">
      <nuxt-link to='/'>AG Studio</nuxt-link>
      <div class="menus">
        <nuxt-link class="menu a-ml-md" to="/">
          Home
        </nuxt-link>
        <nuxt-link class="menu a-ml-md" to="/projects">
          Projects
        </nuxt-link>
        <nuxt-link class="menu a-ml-md" to="/about">
          About
        </nuxt-link>
        <nuxt-link class="menu a-ml-md" to="/contact">
          Contact
        </nuxt-link>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>
// import nextLink from 'next'
export default {
  components: {
    // nextLink
  }
}
</script>

<style lang="stylus">
// Global styles
@import '../assets/styles/index.styl'
.header
  position fixed
  top 0
  left 0
  z-index 1
  width 100%
  height $menuHeight
  background white
.menus
  menu
    color #FFF !important
</style>

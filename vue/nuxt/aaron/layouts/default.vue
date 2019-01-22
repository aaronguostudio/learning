<template>
  <div>
    <header class="flex justify-between items-center a-px-md header">
      <div>
        AG Studio
      </div>
      <div class="menus">
        <nuxt-link class="menu" to="/" exact>
          Home
        </nuxt-link>
        <nuxt-link class="menu" to="/projects">
          Projects
        </nuxt-link>
        <nuxt-link class="menu" to="/about">
          About
        </nuxt-link>
        <nuxt-link class="menu" to="/contact">
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
  .menu
    padding 0px 10px
    text-align center
</style>

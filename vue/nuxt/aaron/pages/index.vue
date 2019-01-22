<template>
  <div>
    <section class="banner">
      Home
    </section>
    <section class="container a-mt-lg">
      <h3 class="text-center">Focusing Features</h3>
      <div class="row">
        <div class="col-3 a-pa-sm">
          <div class="img-feature"></div>
          <h5>Full Stack</h5>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi asperiores ad dolore pariatur! Vitae corrupti error voluptas inventore dignissimos libero, perspiciatis voluptatibus optio quasi asperiores quas excepturi maxime consequatur facilis?</div>
        </div>
        <div class="col-3 a-pa-sm">
          <div class="img-feature"></div>
          <h5>User Experience</h5>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi asperiores ad dolore pariatur! Vitae corrupti error voluptas inventore dignissimos libero, perspiciatis voluptatibus optio quasi asperiores quas excepturi maxime consequatur facilis?</div>
        </div>
        <div class="col-3 a-pa-sm">
          <div class="img-feature"></div>
          <h5>Cross Platform</h5>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi asperiores ad dolore pariatur! Vitae corrupti error voluptas inventore dignissimos libero, perspiciatis voluptatibus optio quasi asperiores quas excepturi maxime consequatur facilis?</div>
        </div>
        <div class="col-3 a-pa-sm">
          <div class="img-feature"></div>
          <h5>Could</h5>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi asperiores ad dolore pariatur! Vitae corrupti error voluptas inventore dignissimos libero, perspiciatis voluptatibus optio quasi asperiores quas excepturi maxime consequatur facilis?</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
    // Logo
  }
}
</script>

<style lang="stylus" scoped>
@import '~vars'
.banner
  width 100%
  height 800px
  background-color $light
.img-feature
  width 100%
  height 150px
  background-color $light
</style>

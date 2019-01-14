<template>
  <div class="page">
    <Main />
  </div>
</template>

<script>
import Main from './layouts/Main'
export default {
  name: 'app',
  components: {
    Main
  },
  data(){
    return {
      collapsed: false,
    }
  }
}
</script>

<style>
.page {
  width: 100vw;
  height: 100vh;
}
</style>

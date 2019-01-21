<template>
  <q-page class="flex flex-center">
    <croppa
      v-model="myCroppa"
      :width="350"
      :height="350"
      :placeholder-font-size="0"
      :disabled="false"
      :prevent-white-space="false"
      :show-remove-button="true"
      placeholder="Choose an image"
    >
    </croppa >
  </q-page>
</template>

<style>
</style>

<script>
import 'vue-croppa/dist/vue-croppa.css'
export default {
  name: 'PageIndex',
  components: {
    // Croppa
  },
  data () {
    return {
      myCroppa: {}
    }
  }
}
</script>

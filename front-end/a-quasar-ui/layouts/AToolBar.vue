<template>
  <q-toolbar
    color="primary"
  >
    <!-- <q-btn
      flat
      dense
      round
      no-caps
      @click="leftDrawerOpen = !leftDrawerOpen"
      aria-label="Menu"
    >
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      Credential Wallet
    </q-toolbar-title>
    <div class="flex items-center">
      <span v-if="auth.role === 'client'">Welcome Dan</span>
      <span v-if="auth.role === 'university'">Welcome Mary</span>
      <q-btn no-caps label="Logout" outline style="margin-left: 10px;" @click="_logout" />
    </div> -->
  </q-toolbar>
</template>

<script>
export default {
  name: 'AToolBar'
}
</script>

<style lang="stylus" scoped>
</style>

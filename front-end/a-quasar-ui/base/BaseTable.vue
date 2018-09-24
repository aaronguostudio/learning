<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'BaseComponent',
  props: {
    test: {
      type: String,
      default: 'test'
    }
  },
  data () {
    return {
      tableConfig: {},
      tableData: []
    }
  }
}
</script>

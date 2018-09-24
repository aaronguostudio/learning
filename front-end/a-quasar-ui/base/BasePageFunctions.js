export default {

  confirmDialog (options) {
    let { title, confirm, cancel } = options
    this.$q.dialog({
      title,
      color: 'primary',
      position: 'top',
      ok: {
        color: 'negative',
        'no-caps': true,
        label: '确定并删除'
      },
      cancel:  {
        color: 'primary',
        'no-caps': true,
        'outline': true,
        label: '取消'
      },
    }).then(() => {
      confirm()
    }).catch(() => {
      cancel()
    })
  },

  handleRes (options) {
    let { result, success, fail, successMes, failMes } = options
    if (result) {
      this.$q.notify({
        position: 'top',
        type: 'positive',
        message: successMes
      })
      success && success()
    } else {
      this.$q.notify({
        position: 'top',
        type: 'negative',
        message: failMes
      })
      fail && fail()
    }
  }

}

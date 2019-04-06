const UIFB = {
  showToast: function(params) {
    if (
      params != undefined &&
      params.title != undefined &&
      params.title.length > 0
    ) {
      if (params.icon == undefined) {
        params.icon = 'none'
      }
      if (params.mask === undefined) {
        params.mask = true
      }
      uni.showToast({
        duration: 2000,
        ...params
      })
    }
  },

  showLoading: function(params) {
    params = { ...params }
    if (params.title == undefined || params.title.length < 1) {
      params.title = '加载中...'
    }
    if (params.mask === undefined) {
      params.mask = true
    }
    uni.showLoading({
      ...params
    })
  },

  hideLoading: function() {
    uni.hideLoading()
  },

  showModal: function(params) {
    if (
      params != undefined &&
      params.content != undefined &&
      params.content.length > 0
    ) {
      if (!params.title || params.title.length == 0) {
        params.title = '提示'
      }
      uni.showModal({
        ...params
      })
    }
  },

  showActionSheet: function(params) {
    if (
      params != undefined &&
      params.itemList != undefined &&
      params.itemList.length > 0
    ) {
      uni.showActionSheet({
        ...params
      })
    }
  }
}

export default UIFB

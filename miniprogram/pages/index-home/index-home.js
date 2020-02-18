Page({
  onLoad: function(options) {
    // 页面创建时执行
  },
  chooseList: function() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
})

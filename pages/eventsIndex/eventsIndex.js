// pages/eventsIndex/eventsIndex.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    events: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
      url: `${app.globalData.baseUrl}/events`,
      // method: 'GET',
      header: app.globalData.header,
      success(res) {
        console.log('events res', res)
        // this => wx.request
        page.setData(res.data)
        // page.setData({ events: res.data.events })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
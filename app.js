// app.js
App({
  onLaunch() {
    const app = this
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          // url: 'http://localhost:3000/api/v1/login',
          url: `${app.globalData.baseUrl}/login`,
          method: 'POST',
          data: { code: res.code },
          success(loginRes) {
            console.log({loginRes})
            app.globalData.user = loginRes.data.user
            app.globalData.header = loginRes.data.headers
          },
          fail(loginErr) {
            console.error({loginErr})
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    user: null,
    header: null,
    baseUrl: 'http://localhost:3000/api/v1'
    // baseUrl: 'https://app_name.wogengapp.cn/api/v1'
  }
})

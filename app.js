var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');

App({
  onLaunch: function () {
    //获取用户的登录信息
    user.checkLogin().then(res => {
      console.log('app login')
      this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjU2NjE5MzgsImV4cCI6MTU1NzE5NzkzOCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5pY2tuYW1lIjoiVGVuY2VudCIsInVzZXJuYW1lIjoiVGVuY2VudFRIIiwiYXZhdGFyIjoiaHR0cDovL3lhbnh1YW4ubm9zZG4uMTI3Lm5ldC84OTQ1YWU2M2Q5NDBjYzQyNDA2YzNmNjcwMTljNWNiNi5wbmcifQ.WekL1i5A81bVFoVsJXkZVJx3panBCpDdFZbWN0571Hw';//wx.getStorageSync('token');
    }).catch(() => {
      
    });
  },
  
  globalData: {
    userInfo: {
      nickname: 'Hi,Tencent',
      username: 'TencentTH',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjU2NjE5MzgsImV4cCI6MTU1NzE5NzkzOCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5pY2tuYW1lIjoiVGVuY2VudCIsInVzZXJuYW1lIjoiVGVuY2VudFRIIiwiYXZhdGFyIjoiaHR0cDovL3lhbnh1YW4ubm9zZG4uMTI3Lm5ldC84OTQ1YWU2M2Q5NDBjYzQyNDA2YzNmNjcwMTljNWNiNi5wbmcifQ.WekL1i5A81bVFoVsJXkZVJx3panBCpDdFZbWN0571Hw',
  }
})
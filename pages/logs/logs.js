//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
     tap:['保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨']
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})

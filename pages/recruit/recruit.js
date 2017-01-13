//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
     tap:['保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨','保洁阿姨'],
     scroll_height:"500rpx"
  },
  onLoad: function () {
      try {
      var res = wx.getSystemInfoSync()
      var h = res.windowHeight-140;
      this.setData({scroll_height:h+"px"});
    
    } catch (e) {
      // Do something when catch error
    }


  }
})

//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
     tap:[],
     scroll_height:"400px"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })

    //获取不同手机对应的对应page高度。
    try {
      var res = wx.getSystemInfoSync()
      var h = res.windowHeight-180;
      this.setData({scroll_height:h+"px"});
    } catch (e) {
      // Do something when catch error
    }

    var arr = []; 
    for (let i = 0; i <10; i++) { 
      arr.push("保洁阿姨");   
    }
    this.setData({tap:arr});  
  }
})

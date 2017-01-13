//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
     tap:[],
     scroll_height:"400px"
  },
  onLoad: function () {
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

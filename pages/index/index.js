Page({
  data:{
    lod:false,
    markers: [{
      iconPath: "/image1/diqu1.png",
      latitude: 30.737290,
      longitude: 120.819510,
      width:30,
      height:30,
      scale:16
    }],
    scroll_height:"500rpx"
  }, 
  onLoad:function(options){
    //获取不同手机对应的对应page高度。
    try {
      var res = wx.getSystemInfoSync()
      var h = res.windowHeight-140;
      console.log();
      this.setData({scroll_height:h+"px"});
    } catch (e) {
      // Do something when catch error
    }
  },
  getpos:function(){
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
      var latitude = res.latitude
      var longitude = res.longitude

      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
        scale: 28
      })
  }
})
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   // String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    //String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    //String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    //String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})
{
  Page({
    data:{
      date:'点击添加',
      time:'点击添加',
      isAgree:false,
      isAgree1:false,
      countries: ["嘉兴", "上海", "北京"],
      countryIndex: 0,
      checkboxItems: [
            {name: '经验不限', value: '0', checked: true},
            {name: '普通话', value: '1'},
            {name: '性别不限', value: '2'},
            {name: '学历不限', value: '3'}
        ],
        checkboxItems1: [
            {name: '默认用兼职猫报名，同步到邮箱', value: '默认', checked: true},
            {name: '同时接受短信报名(固话不可选)', value: '短信'},
            {name: '提供电话咨询', value: '电话'},
        ],
    },

     
  bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
        },
  bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
        },

   bindAgreeChange: function (e) {
        this.setData({
            isAgree: !!e.detail.value.length
        });
    },


   bindAgreeChange1: function (e) {
        this.setData({
            isAgree1: !!e.detail.value.length
        });
    },



    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems
        });
    },


    checkboxChange1: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems1 = this.data.checkboxItems1, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems1.length; i < lenI; ++i) {
            checkboxItems1[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems1[i].value == values[j]){
                    checkboxItems1[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems1: checkboxItems1
        });
    },




     bindCountryChange: function(e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    },

    onLoad:function(options){
      // 生命周期函数--监听页面加载
      String2
    },
    onReady:function(){
      // 生命周期函数--监听页面初次渲染完成
      String3
    },
    onShow:function(){
      // 生命周期函数--监听页面显示
      String4
    },
    onHide:function(){
      // 生命周期函数--监听页面隐藏
      String5
    },
    onUnload:function(){
      // 生命周期函数--监听页面卸载
      String6
    },
    onPullDownRefresh: function() {
      // 页面相关事件处理函数--监听用户下拉动作
      String7
    },
    onReachBottom: function() {
      // 页面上拉触底事件的处理函数
      String8
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
}
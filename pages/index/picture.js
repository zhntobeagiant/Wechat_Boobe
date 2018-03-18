// pages/index/picture.js
var index = 1

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pic: 'http://104.192.80.177/Booberx/img/rx0001.jpg',
    cursor: '第'+ index +'/150张'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  button11: function () {
    index--
    if (index==0)
      index = 150
    this.setData({
      cursor: '第' + index + '/150张',
      pic: 'http://104.192.80.177/Booberx/img/rx000' + index + '.jpg'
    })
    if (index>9)
      this.setData({
        cursor: '第' + index + '/150张',
        pic: 'http://104.192.80.177/Booberx/img/rx00'+ index +'.jpg'
      })
    if (index>99)
      this.setData({
        cursor: '第' + index + '/150张',
        pic: 'http://104.192.80.177/Booberx/img/rx0' + index + '.jpg'
      })
  },
  button22: function () {
    index++
    if (index == 151)
      index = 1
    this.setData({
      cursor: '第' + index + '/150张',
      pic: 'http://104.192.80.177/Booberx/img/rx000' + index + '.jpg'
    })
    if (index > 9)
      this.setData({
        cursor: '第' + index + '/150张',
        pic: 'http://104.192.80.177/Booberx/img/rx00' + index + '.jpg'
      })
    if (index > 99)
      this.setData({
        cursor: '第' + index + '/150张',
        pic: 'http://104.192.80.177/Booberx/img/rx0' + index + '.jpg'
      })
  }
})
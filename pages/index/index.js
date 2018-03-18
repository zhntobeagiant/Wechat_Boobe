//index.js
//获取应用实例
const app = getApp()
var cursor = 0
var record = 0

Page({
  data: {
    heart: '♥',
    motto: 'Ours Garden.',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: 'show'
    })
  },
  onLoad: function() {
    var that = this
    setInterval(function() {
      if(record) {
        that.setData({
          heart: '&emsp;'
        })
        record = 0
      }
      else
      {
        that.setData({
          heart: '♥'
        })
        record = 1
      }
    }, 200)
    setTimeout(function () {
      wx.navigateTo({
        url: 'show'
      })
    }, 2000)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

function musicPlayer()
{
  var musicUrl = ''
  var title = ''
  var imageUrl = ''
  if (cursor == 0) {
    musicUrl = 'http://104.192.80.177/Booberx/m1.mp3'
    title = '告白气球'
    imageUrl = 'http://104.192.80.177/Booberx/w1.png'
    cursor = 1
  }
  else {
    if (cursor == 1)
    {
      musicUrl = 'http://104.192.80.177/Booberx/m2.mp3'
      title = '好想你'
      imageUrl = 'http://104.192.80.177/Booberx/w1.png'
      cursor = 2
    }
    else
    {
      musicUrl = 'http://104.192.80.177/Booberx/m3.mp3'
      title = '有何不可'
      imageUrl = 'http://104.192.80.177/Booberx/w1.png'
      cursor = 0
    }
  }
  wx.playBackgroundAudio({
    dataUrl: musicUrl,
    title: title,
    coverImgUrl: imageUrl,
    success: function (res) {

    },
    fail: function (res) {

    },
    complete: function (res) {

    },
  })
}

musicPlayer()

wx.onBackgroundAudioStop(musicPlayer)

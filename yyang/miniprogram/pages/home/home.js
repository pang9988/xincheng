// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hl:'./../../images/tu/0.jpg',
    videoimage: "block", //默认显示封面
    shipi:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400}",
    che:1,
    // 视频图片封面
    tpfm:"./../../images/tu/2.jpg",
    ksfm:"./../../images/tu/pyhi.png",
    // 假数据 

    paohui:[
  {
        hometext: "本人由漂亮mm市专供one", homeimg: './../../images/tu/0.jpg', homeT1: "漂亮mm妹仔单身可撩", homeT2:"高168cm/重48kg/微an7724-996",guangzuren:'4.2',homedate1:'12',homedate2:'23',yishou:"399",sling:"3000",price:"9.9",price1:"100"
  },
  {
        hometext: "本人由漂亮mm市专供two", homeimg: './../../images/tu/0.jpg', homeT1: "漂亮mm妹仔单身可撩", homeT2:"高168cm/重48kg/微an7724-996",guangzuren:'4.2',homedate1:'12',homedate2:'23',yishou:"399",sling:"3000",price:"9.9",price1:"100"
  },
  {
        hometext: "本人由漂亮mm市专供", homeimg: './../../images/tu/0.jpg', homeT1: "漂亮mm妹仔单身可撩", homeT2:"高168cm/重48kg/微an7724-996",guangzuren:'4.2',homedate1:'12',homedate2:'23',yishou:"399",sling:"3000",price:"9.9",price1:"100"
  },
  {
        hometext: "本人由漂亮mm市专供", homeimg: './../../images/tu/0.jpg', homeT1: "漂亮mm妹仔单身可撩", homeT2:"高168cm/重48kg/微an7724-996",guangzuren:'4.2',homedate1:'12',homedate2:'23',yishou:"399",sling:"3000",price:"9.9",price1:"100"
  },
  {
        hometext: "本人由漂亮mm市专供", homeimg: './../../images/tu/0.jpg', homeT1: "漂亮mm妹仔单身可撩", homeT2:"高168cm/重48kg/微an7724-996",guangzuren:'4.2',homedate1:'12',homedate2:'23',yishou:"399",sling:"3000",price:"9.9",price1:"100"
  },
  {
        hometext: "本人由漂亮mm市专供six", homeimg: './../../images/tu/0.jpg', homeT1: "漂亮mm妹仔单身可撩", homeT2:"高168cm/重48kg/微an7724-996",guangzuren:'4.2',homedate1:'12',homedate2:'23',yishou:"399",sling:"3000",price:"9.9",price1:"100"
  }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindplay: function (e) {
    this.setData({
      tab_image: "none"
    }),
      this.videoCtx.play()
  },
  
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx = wx.createVideoContext('myVideo')
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

  }
})
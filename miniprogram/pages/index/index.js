// 引入地图SDK核心类
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// 实例化地图API核心类
const qqmapsdk = new QQMapWX({
  key: 'JEHBZ-IMWL5-47LIP-QKBUW-BKGT3-BDFG4' // 必填
});
const swiper = require('../../utils/swiper.js');
const chooseJob = require('../../utils/chooseJob.js');
const that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getLocation({
      success: (res) => {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: (res) => {
            const city = res.result.ad_info.city.substring(0, res.result.ad_info.city.length - 1);
            this.setData({
              address: city,
							swiper,
							chooseJob
            });
          },
          fail: (error) => {
            console.error(error);
          },
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const that = this;
    wx.getStorage({
      key: 'city',
      success(res) {
        that.setData({
          address: res.data
        });
      },
      fail(err) {
        console.log(err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
		wx.removeStorage({
			key: 'city',
			success: function(res) {
				console.log(res);
			},
		})
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /** 
   * 点击进入城市选择页面
   */
  goToCityChoose: function(event) {
    wx.navigateTo({
      url: '../../pages/city/city?city=' + this.data.address,
    })
  }
})
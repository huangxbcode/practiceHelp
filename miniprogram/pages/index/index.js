// 引入地图SDK核心类
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// 实例化地图API核心类
const qqmapsdk = new QQMapWX({
	key: 'JEHBZ-IMWL5-47LIP-QKBUW-BKGT3-BDFG4' // 必填
});

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		address:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// wx.getLocation({
		// 	success: (res) => {
		// 		qqmapsdk.reverseGeocoder({
		// 			location: {
		// 				latitude:res.latitude,
		// 				longitude:res.longitude
		// 			},
		// 			success:(res) => {
		// 				console.log(res.result.ad_info.province);
		// 				this.setData({
		// 					address: res.result.ad_info.province
		// 				});
		// 			},
		// 			fail: (error) => {
		// 				console.error(error);
		// 			},
		// 		})
		// 	},
		// })
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
		
	}
})
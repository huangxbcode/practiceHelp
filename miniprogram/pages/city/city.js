const cityList = require('../../utils/city.js');
// pages/city/city.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		positionCity:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			positionCity:options.city,
			cityList
		});
	},
	/**
	 * 选择需要找实习的城市
	 */
	chooseCity:function (event) {
		console.log(event.currentTarget.dataset.city);
		wx.setStorage({
			key: 'city',
			data: event.currentTarget.dataset.city
		})
		wx.switchTab({
			url: '../../pages/index/index'
		})
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
		wx.setNavigationBarTitle({
			title: '当前城市+'+this.data.positionCity,
		})
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
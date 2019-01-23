// pages/recommend/recommend.js
const classify = require('../../utils/classify.js');
const area = require('../../utils/area.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			classify,
			areaList:area
		});
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
	/**
	 * 选择期望职位
	 */
	chooseJob: function (event) {
		this.setData({
			jobSelectShow:true
		});
	},

			/**
		 * 关闭期望职位蒙层
		 */
	onJobSelectClose:function (event) {
		this.setData({
			jobSelectShow: false
		});
	},
	/**
	 * 选择期望城市
	 */
	chooseCity: function (event) {
		this.setData({
			citySlectShow:true
		});
	},

	/**
 * 关闭期望城市蒙层
 */
	onCitySelectClose: function (event) {
		console.log(1);
		this.setData({
			citySlectShow: false
		});
	},
	/**
	 * 分类选项相关
	 */
	// 期望职位
	onClickJobNav({ detail = {} }) {
		console.log(detail);
		this.setData({
			mainActiveJobIndex: detail.index || 0
		});
	},
	onClickJobItem({ detail = {} }) {
		console.log(detail);
		this.setData({
			activeJobId: detail.id,
			activeJobText:detail.text,
			jobSelectShow:false
		});
	},
	// 期望城市
	onCitySelectConfirm:function (event) {
		const activeCityId = event.detail.values[1].code;
		const activeCityText = event.detail.values[1].name;
		this.setData({
			activeCityId,
			activeCityText
		});
		this.onCitySelectClose();
	},
	/**
	 * 提交筛选项目
	 */
	submit : function (event) {
		const { activeJobText, activeCityText } = this.data;
		if (!activeJobText) {
			wx.showToast({
				title: '请选择期望职位',
				icon: 'none'
			});
			return;
		} else if(!activeCityText) {
			wx.showToast({
				title: '请选择期望城市',
				icon:'none'
			});
			return;
		}
		console.log(activeJobText,activeCityText);

	}
})
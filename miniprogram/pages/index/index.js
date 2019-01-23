// 引入地图SDK核心类
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// 实例化地图API核心类
const qqmapsdk = new QQMapWX({
  key: 'JEHBZ-IMWL5-47LIP-QKBUW-BKGT3-BDFG4' // 必填
});
const classify = require('../../utils/classify.js');
const filterCondition = require('../../utils/filterCondition.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
		activeJobText:'职位类别',
		practiceDay:'不限',
		practicePrice:'不限',
		practiceMonth:'不限',
		practiceEducation:'不限',
		practiceRegular:'不限',
		swiper:[],
		chooseJob:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
		wx.cloud.getTempFileURL({
			fileList: [
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/swiper/swiper1.png',
				maxAge: 24 * 60 * 60, // one hour
			},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/swiper/swiper2.png',
					maxAge: 24 * 60 * 60, // one hour
				},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/swiper/swiper3.png',
					maxAge: 24 * 60 * 60, // one hour
				},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/swiper/swiper4.jpg',
					maxAge: 24 * 60 * 60, // one hour
				},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/shixi/duanqi.png',
					maxAge: 24 * 60 * 60, // one hour
				},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/shixi/gaoxin.png',
					maxAge: 24 * 60 * 60, // one hour
				},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/shixi/jizhao.png',
					maxAge: 24 * 60 * 60, // one hour
				},
				{
					fileID: 'cloud://ceshi-fd7997.6365-ceshi-fd7997/images/shixi/tuijian.png',
					maxAge: 24 * 60 * 60, // one hour
				}
			]
		}).then(res => {
			// get temp file URL
			let chooseJob = res.fileList.splice(4,4);
			chooseJob[0].name = "急招职位";
			chooseJob[1].name = "推荐职位";
			chooseJob[2].name = "高薪实习";
			chooseJob[3].name = "短期实习";
			this.setData({
				swiper:res.fileList.splice(0,4),
				chooseJob,
				classify,
				filterCondition
			});
		}).catch(error => {
			console.log(error);
		});
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
  },

	/**
	 * 选择职位类型
	 */
	chooseJob:function (event) {
		const type = event.currentTarget.dataset.type;
		switch(type) {
			case '急招职位':{
				wx.navigateTo({
					url: '../../pages/urgent/urgent'
				})
			};break;
			case '推荐职位':{
				wx.navigateTo({
					url: '../../pages/recommend/recommend'
				})
			};break;
			case '高薪实习': {
				wx.navigateTo({
					url: '../../pages/urgent/urgent'
				})
			}; break;
			case '短期实习': {
				wx.navigateTo({
					url: '../../pages/noJob/noJob'
				})
			}; break;
			default:break;
		}
	},
	/**
	 * 选择职位类别
	 */
	chooseJobType:function (event) {
		console.log(event);
		this.setData({
			jobTypeShow:true
		});
	},
	// 职位类别
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
			activeJobText: detail.text,
			jobTypeShow: false
		});
	},
	/**
	 * 选择职位类别蒙层关闭
	 */
	chooseJobTypeClose:function (event) {
		this.setData({
			jobTypeShow:false
		});
	},
	/**
	 * 选择筛选条件
	 */
	chooseCondition: function (event) {
		this.setData({
			conditionShow:true,
		});
	},
	/**
	 * 筛选条件蒙层关闭
	 */
	chooseConditionClose:function (event) {
		this.setData({
			conditionShow:false
		});
	},
	/**
	 * 筛选条件蒙层中条件选择(数据结构设计失误，暂时的烂代码)
	 */
	chooseConditionType:function (event) {
		const type = event.currentTarget.dataset.type;
		const option = event.currentTarget.dataset.option;
		filterCondition.map((item) => {
			if(item.value === type) {
				return item.children.map((item1) => {
					item1.isChoose = false;
					if(item1.text === option) {
						return item1.isChoose = true;
					}
				});
			}
		});
		this.setData({
			filterCondition
		});

	},
	/**
	 * 重置筛选条件
	 */
	conditionReset:function (event) {
		filterCondition.map((item) => {
				return item.children.map((item1) => {
					item1.isChoose = false;
					if (item1.text === '不限') {
						return item1.isChoose = true;
					}
				});
		});
		this.setData({
			filterCondition
		});
	},
	/**
	 * 提交筛选条件
	 */
	conditionSubmit:function (event) {
		console.log(event);
		const { filterCondition } = this.data;
		let filter = [];
		for(let i = 0;i<filterCondition.length;i++) {
			for(let j =0;j<filterCondition[i].children.length;j++) {
				if (filterCondition[i].children[j].isChoose === true) {
					filter.push({ type: filterCondition[i].text, typeValue: filterCondition[i].value,value: filterCondition[i].children[j].value, text: filterCondition[i].children[j].text});
				}
			}
		}
		this.setData({
			filter
		});
	}

})
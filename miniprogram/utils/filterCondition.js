const filterCondition = [
	{
		text:'每周实习天数',
		value:1,
		children:[
			{
				text:"不限",
				value:[0],
				isChoose:true
			},
			{
				text: "1-3天",
				value: [1,2,3],
				isChoose: false,
			},
			{
				text: "3-7天",
				value: [3,4,5,6,7],
				isChoose: false
			}
		]
	},
	{
		text: '实习薪资( 元 )',
		value:2,
		children: [
			{
				text: "不限",
				value: [0],
				isChoose: true
			},
			{
				text: "100-200",
				value: [100,200],
				isChoose: false
			},
			{
				text: "200以上",
				value: [200],
				isChoose: false
			}
		]
	},
	{
		text: '实习月数',
		value: 3,
		children: [
			{
				text: "不限",
				value: 0,
				isChoose: true
			},
			{
				text: "1-3月",
				value: [1, 3],
				isChoose: false
			},
			{
				text: "3月以上",
				value: [3],
				isChoose: false
			}
		]
	},
	{
		text: '学历要求',
		value: 4,
		children: [
			{
				text: "不限",
				value: 0,
				isChoose: true
			},
			{
				text: "大专",
				value: 1,
				isChoose: false
			},
			{
				text: "本科",
				value: 2,
				isChoose: false
			},
			{
				text: "硕士及以上",
				value: 3,
				isChoose: false
			}
		]
	},
	{
		text: '能否转正',
		value: 5,
		children: [
			{
				text: "不限",
				value: 0,
				isChoose: true
			},
			{
				text: "可转正",
				value: 1,
				isChoose: false
			},
			{
				text: "面议",
				value: 2,
				isChoose: false
			}
		]
	},
];

module.exports = filterCondition;
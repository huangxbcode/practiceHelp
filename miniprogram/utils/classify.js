const classify =  [
	{
		// 导航名称
		text: 'IT互联网',
		// 禁用选项
		disabled: false,
		// 该导航下所有的可选项
		children: [
			{
				// 名称
				text: '产品',
				// id，作为匹配选中状态的标识
				id: 11,
      },
			{
				text: '软件',
				id: 12
      },
			{
				text: '运营',
				id: 13,
			},
			{
				text: '硬件',
				id: 14,
			},
			{
				text: '设计',
				id: 15,
			},
			{
				text: '通信',
				id: 16,
			},
		]
	},
	{
		text:'媒体设计',
		disabled: false,
		// 该导航下所有的可选项
		children: [
			{
				// 名称
				text: '广告',
				// id，作为匹配选中状态的标识
				id: 21,
			},
			{
				text: '编辑',
				id: 22
			},
			{
				text: '设计',
				id: 23,
			},
			{
				text: '媒体',
				id: 24,
			},
			{
				text: '艺术',
				id: 25,
			}
		]
	}
];

module.exports = classify;

// 方法已在全局注册,使用方法时 this.$utils.方法名(参数) 
//自动补全图片路径
const urlImg =function(str,host='') {
	var patt = new RegExp('data'); //要查找的字符串
	var patt2 = new RegExp('http'); //要查找的字符串
	if(str == undefined)return
	if(patt.test(str) || patt2.test(str)){ //字符串存在返回true否则返回false
		return str
	}else{
		return host + str
	}
}
//图片url 转base64
const ploadFilePromiseSync = function(url) {
	return new Promise((resolve, reject) => {
		// #ifdef MP-WEIXIN
		uni.getFileSystemManager().readFile({
			filePath: url,
			encoding: 'base64',
			success: res => {
				let base64 = 'data:image/jpeg;base64,' + res.data
				resolve(base64)
			},
			fail: (e) => {
				reject("图片转换失败")
			}
		});
		// #endif
		// #ifdef H5
		uni.request({
			url: url,
			method: 'GET',
			responseType: 'arraybuffer',
			success: ress => {
				let base64 = uni.arrayBufferToBase64(ress.data)
				base64 = 'data:image/jpeg;base64,' + base64
				resolve(base64)
			},
			fail: (e) => {
				reject("图片转换失败")
			}
		});
		// #endif
		// #ifdef APP-PLUS
		plus.io.resolveLocalFileSystemURL(url, (entry) => {
			entry.file((file) => {
				let fileReader = new plus.io.FileReader();
				fileReader.onloadend = (evt) => {
					const base64 = evt.target.result.substr(22)
					resolve(base64)
				};
				fileReader.readAsDataURL(file)
			});
		}, (e) => {
			reject("Resolve file URL failed: " + e.message)
		});
		// #endif
	});
}
//经纬度格式化
function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
//时间戳格式化
function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}
//时间戳转换为微信朋友圈时间格式
const dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
//获取当前时间 年-月-日
const formatDate = function(timestamp) {
	let nowDate;
	if (timestamp) {
		nowDate = new Date(timestamp)
	} else {
		nowDate = new Date()
	}
	let date = {
		year: nowDate.getFullYear(),
		month: nowDate.getMonth() + 1,
		date: nowDate.getDate(),
	}
	let month = ''
	let lifeday = ''
	if (date.month < 10) {
		month = '0'
	}
	if (date.date < 10) {
		lifeday = '0'
	}
	let systemDate = date.year + '-' + month + date.month + '-' + lifeday + date.date;
	return systemDate
}

//获取当前页面以及参数
const getUrl = function() {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const url = currentPage.route
	const options = currentPage.options
	let urlWithArgs = `/${url}?`
	for (let key in options) {
		const value = options[key]
		urlWithArgs += `${key}=${value}&`
	}
	urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
	return urlWithArgs
}

//----------------------------正则匹配--------------------

//匹配帐号
const regUid = function(str) {
	return !RegExp(/^\w{6,12}$/).test(str);
}

const regName = function(str) {
	return !RegExp(/^[\u4e00-\u9fa5]{2,5}$/).test(str);
}

//输入是否全为空
const regAir = function(str) {
	return str.split(" ").join("").length
}

//匹配身份证
const regIDC = function(str) {
	return !RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(str);
}
//匹配手机号
const regPhone = function(str) {
	// return "12313"
	return !RegExp(/^1[345789]\d{9}$/).test(str);
}

//手机号以 3 - 4 - 4 格式显示
const regPhoneFormat = function(str) {
	return str.replace(/(\d{3})(\d{4})/, "$1 $2 "); //添加空格
}

//匹配验证码
const regCheckNum = function(str) {
	return !RegExp(/^\d{4}$/).test(str);
}

//匹配邮箱格式
const regEmail = function(str) {
	return !RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(str);
}


export default {
	serveUrl: 'http://www.jff6688.com',
	urlImg,
	ploadFilePromiseSync,
	formatLocation,
	formatTime,
	dateUtils,
	formatDate,
	getUrl,
	regUid,
	regPhone,
	regPhoneFormat,
	regName,
	regIDC,
	regEmail,
	regCheckNum,
	regAir,
}
import fly from '@/utils/request.js';

//用户个人信息
export const userIndex = function(data = {}) {
	//return fly.post('/User/index', data)
	//模拟登录返回数据
	var promise = new Promise(function(resolve,reject){
		resolve({'username':'18888888888','nickname':"张三",'head_img':'/static/logo.png'})
	})
	return promise
}

//修改个人信息
export const userProfile= function(data = {}) {
	return fly.post('/User/profile', data)
}

//修改手机号
export const userChangemobile= function(data = {}) {
	return fly.post('/User/changemobile', data)
}

//修改密码
export const userResetpwd= function(data = {}) {
	return fly.post('/User/resetpwd', data)
}

//提现历史
export const withdrawList = function(data = {}) {
	return fly.post('/Withdraw/withdrawList', data)
}

//提现
export const withdraw = function(data = {}) {
	return fly.post('/Withdraw/withdraw', data)
}

//反馈历史
export const suggestList = function(data = {}) {
	return fly.post('/Suggest/suggestList', data)
}

//反馈
export const suggest = function(data = {}) {
	return fly.post('/Suggest/suggest', data)
}

//最近播放历史
export const moviesMoviesLook = function(data = {}) {
	return fly.post('/Movies/moviesLook', data)
}

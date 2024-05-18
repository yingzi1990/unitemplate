import fly from '@/utils/request.js';

//注册
export const register = function(data = {}) {
	return fly.post('/api/User/register', data)
}
//账密登录
export const userLogin = function(data = {}) {
	//return fly.post('/api/User/login', data)
	//模拟登录返回数据
	var promise = new Promise(function(resolve,reject){
		resolve({'username':'18888888888','nickname':"张三",'head_img':'/static/logo.png','token':'11111111111'})
	})
	return promise
}
//账密登录
export const misspwd = function(data = {}) {
	return fly.post('/api/User/resetpwd', data)
}
//发送验证码
export const smsSend = function(data = {}) {
	return fly.post('/api/Sms/send', data)
}

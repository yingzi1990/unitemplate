import fly from '@/utils/request.js';

//注册
export const register = function(data = {}) {
	return fly.post('/User/register', data)
}

//账密登录
export const userLogin = function(data = {}) {
	return fly.post('/User/login', data)
}
//账密登录
export const misspwd = function(data = {}) {
	return fly.post('/User/resetpwd', data)
}
//发送验证码
export const smsSend = function(data = {}) {
	return fly.post('/Sms/send', data)
}

//验证码登录
export const userMobilelogin = function(data = {}) {
	return fly.post('/User/mobilelogin', data)
}

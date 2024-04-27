import fly from '@/utils/request.js';
import store from "@/store";
import utils from '@/utils/util'
export const loginSucess = function() { 
	const lastVisitedPage = uni.getStorageSync('lastVisitedPage');
	if (lastVisitedPage) {
		// 跳转到上次浏览的页面
		uni.removeStorageSync('lastVisitedPage')
		uni.redirectTo({
			url: lastVisitedPage
		});
	} else {
		//跳转到首页
		uni.switchTab({
			url: '/pages/index/index'
		});
	}
}
//上传图片
export const commonUpload = function(data = {}) {
	return fly.post('/Common/upload', data)
}

//验证码获取
export const commonCaptcha = function(data = {}) {
	return fly.post('/Common/captcha', data)
}
// ------------未知接口------------
//系统配置
export const config = function(data = {}) {
	return fly.post('/Index/getConfig', data)
}
//文章列表
export const categoryPageList = function(data = {}) {
	return fly.post('/Category/pageList', data)
}
//文章详情
export const categoryPageInfo = function(data = {}) {
	return fly.post('/Category/pageInfo', data)
}
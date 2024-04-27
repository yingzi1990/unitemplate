var Fly = require("flyio/dist/npm/wx")
import store from "@/store"
import utils from '@/utils/util'
var fly = new Fly;
if (process.env.NODE_ENV === 'development') {
	//开发环境请求地址---在manifest.json配置跨域
	//fly.config.baseURL = "/api"
	fly.config.baseURL = `${utils.serveUrl}/api`
} else if (process.env.NODE_ENV === 'production') {
	//正式环境请求地址
	fly.config.baseURL = `${utils.serveUrl}/api`
	//fly.config.baseURL = `/api`
}
// 添加请求拦截器
fly.interceptors.request.use((request) => {
	const token = store.state.token;
	if (!request.body['checkFree'] && !token) {
		console.log('跳转登录',utils.getUrl())
		//需要登录才能请求,未登录
		uni.setStorageSync('lastVisitedPage', utils.getUrl());
		uni.redirectTo({
			url: '/pages/login/index'
		})
		return Promise.reject("跳转登录页面")
	} else if (!request.body['checkFree'] || token) {
		//不需要登录就能请求,已登录,自动携带token
		request.headers.authorization = token;
	}
	//最后删除标记
	delete request.body['checkFree']
	return request
}, function(error) {
	uni.showToast({
		title: '发送请求失败!',
		icon: 'none'
	});
	// 对请求错误做些什么
	return Promise.reject(error)
})

// 添加响应拦截器
fly.interceptors.response.use((res) => {
	const token = store.state.token;
	if (![1].includes(res.data.code)) {
		//1 错误码
		uni.showToast({
			title: res.data.msg,
			icon: 'none'
		});
		return Promise.reject(res.data.msg)
	}
	return res.data
}, (error) => {
	if ([401].includes(error.status)) {
		console.log('401响应',utils.getUrl())
		uni.setStorageSync('lastVisitedPage', utils.getUrl());
		let storeuser = {'token':''}
		store.commit('setUser',storeuser)
	} else {
		uni.showToast({
			title: '加载数据失败',
			icon: 'error'
		});
	}
	return Promise.reject(error)
})
export default fly
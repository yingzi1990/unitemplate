import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		token: '',
		//用户头像名称等
		userInfo: {},
	},
	getters: {
		nickname: function(state) {
			return state.userInfo.nickname
		},
	},
	mutations: {
		setToken: function(state, data) {
			state.token = data
		},
		setUserInfo: function(state, data) {
			state.userInfo = data
		},
	},
	plugins: [
		createPersistedState({
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key, value) => uni.setStorageSync(key, value),
				removeItem: key => () => {}
			}
		})
	]
})

export default store;
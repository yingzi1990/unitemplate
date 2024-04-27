import fly from '@/utils/request.js';

//推广数据
export const userTgcount = function(data = {}) {
	return fly.post('/User/tgcount', data)
}
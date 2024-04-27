import fly from '@/utils/request.js';

//详情
export const detail = function(data = {}) {
	return fly.post('/Category/pageInfo', data)
}

import fly from '@/utils/request.js';
//获取轮播
export const slideSlideList = function(data = {}) {
	return fly.post('/Slide/slideList', data)
}

//平台列表
export const moviesPlatList = function(data = {}) {
	return fly.post('/Movies/platList', data)
}

//分类列表
export const moviesCateList = function(data = {}) {
	return fly.post('/Movies/cateList', data)
}

//影视列表
export const moviesMoviesList = function(data = {}) {
	return fly.post('/Movies/moviesList', data)
}

//随机影视列表
export const moviesSjMoviesList = function(data = {}) {
	return fly.post('/Movies/sjMoviesList', data)
}

//影视详情
export const moviesMoviesInfo = function(data = {}) {
	return fly.post('/Movies/moviesInfo', data)
}

//试看
export const moviesMoviesStart = function(data = {}) {
	return fly.post('/Movies/moviesStart', data)
}

//搜索记录
export const moviesSearch = function(data = {}) {
	return fly.post('/Movies/getMoviesSearch', data)
}

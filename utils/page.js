import store from "@/store"
//跳转页面之前判断token以及是否需要登录
export const pageTo =function(url,type='1',obj={},check=false){
	//验证token如不存在则跳转登录页
	const token = store.state.token;
	if(check && !token){
		let str = objtostr(obj)
		url=url+str;
		uni.setStorageSync('lastVisitedPage', url);
		navigateTo("/pages/login/index")
	}else{
		type = String(type);
		switch(type){
			case '1':
				navigateTo(url,obj)
				break;
			case '2':
				redirectTo(url,obj)
				break;
			case '3':
				switchTab(url,obj)
				break;
			case '4':
				reLaunch(url,obj)
				break;
		}
	}
}
//保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
export const navigateTo =function(url,obj={}){
	let str = objtostr(obj)
	url=url+str;
	uni.navigateTo({
		url:url
	})
}
//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
export const switchTab =function(url,obj={}){
	let str = objtostr(obj)
	url = url + str;
	uni.switchTab({
	    url: url
	});
}

//关闭当前页面，跳转到应用内的某个页面。
export const redirectTo =function(url,obj={}){
	let str = objtostr(obj)
	url = url + str;
	uni.redirectTo({
	    url: url
	});
}
//关闭所有页面，打开到应用内的某个页面。
export const reLaunch =function(url,obj={}){
	let str = objtostr(obj)
	url = url + str;
	uni.reLaunch({
	    url: url
	});
}
//转换对象附加字符串
export const objtostr =function(obj={}){
	let str='';
	for(let key  in obj){
		if(str==''){
			str='?'+key+'='+obj[key];
		}else{
			str=str+'&'+key+'='+obj[key];
		}
	}
	return str;
}
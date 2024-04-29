<template>
	<view>
        <view class="logo">
			<view class="img">
				<image mode="widthFix" src="/static/logo.png"></image>
			</view>
		</view>
		<!-- 账号密码输入框 -->
		<view class="form">
			<view class="username">
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="btn" @click="doLogin">登 录</view>
			<view class="res">
				<view @click="pageTo('register')">用户注册</view>
				<view @click="pageTo('resetpasswd')">忘记密码</view>
			</view>
		</view>
		<!-- 第三方登录 -->
		<view class="oauth" v-if="isShowOauth">
			<view class="text">— 快速登录 —</view>
			<view class="list">
				<view @click="oauthLogin('weixin')" v-if="showProvider.weixin" class="icon weixin"></view>
				<view @click="oauthLogin('qq')" v-if="showProvider.qq" class="icon qq"></view>
				<view @click="oauthLogin('sinaweibo')" v-if="showProvider.sinaweibo" class="icon sinaweibo"></view>
				<view @click="oauthLogin('xiaomi')" v-if="showProvider.xiaomi" class="icon xiaomi"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		loginSucess
	} from "@/api/common"
	export default {
		data() {
			return {
				phoneNumber: '',
				passwd:'',
				isShowOauth:true,
				showProvider:{
					weixin:true,
					qq:true,
					sinaweibo:false,
					xiaomi:false
				}
			}
		},
		onShow() {
			
		},
		onLoad() {
			//APP显示第三方登录
			// #ifdef APP-PLUS
				this.isShowOauth=true;
			// #endif
			this.getProvider();
			
		}, 
		methods: {
			oauthLogin(provider){
				uni.showToast({title: '三方登录',icon:"none"});
			},
			getProvider(){
				//获取第三方登录服务
				uni.getProvider({
					service: 'oauth',
					success: (res)=>{
						let len = res.provider.length;
						for(let i=0;i<len;i++){
							//有服务才显示按钮图标
							this.showProvider[res.provider[i]] = true;
						}
						if(res.provider.length==0){
							this.isShowOauth=false;
						}
					}
				});
			},
			doLogin(){
				//验证手机号码
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				}
				uni.showLoading({
					title: '登录成功'
				})
				setTimeout(()=>{
					loginSucess()
				},500)
			},
			pageTo(url){
				this.$pageTo(url)
			}
		}
	}
</script>

<style lang="scss">
	@import "@/css/login.scss";
	.form {
		.res {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			color: rgba($color: #ffffff, $alpha: 0.8);
		}
	}
	.oauth{
		@media all and (max-height:150vw){
			display: none;
		}
		position: absolute;
		bottom: 50upx;
		width: 100%;
		.text{
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba($color: #ffffff, $alpha: 0.8);
			font-size: 28upx;
		}
		.list{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20upx 0;
			.icon{
				font-size:80upx;
				margin: 0 30upx;
			}
		}
	}
</style>

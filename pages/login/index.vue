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
				<input placeholder="请输入手机号" v-model="form.account" placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="form.password" password=true placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="btn" @click="doLogin">登 录</view>
			<view class="res">
				<view @click="pageTo('register')">用户注册</view>
				<view @click="pageTo('resetpasswd')">忘记密码</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {loginSucess} from "@/api/common"
	import {userLogin} from "@/api/login"
	export default {
		data() {
			return {
				form: {
					account: '',
					password: '',
				}
			}
		},
		onShow() {},
		onLoad() {}, 
		methods: {
			doLogin(){
				//验证手机号码
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.account))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				}
				userLogin({...this.form,checkFree: true}).then(data => {
					this.$store.commit('setToken', data.token)
					this.$store.commit('setUserInfo', data)
					setTimeout(()=>{
						loginSucess()
					},500)
				})
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

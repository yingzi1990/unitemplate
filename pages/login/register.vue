<template>
	<view>
        <view class="logo">
			<view class="img">
				<image mode="widthFix" src="/static/logo.png"></image>
			</view>
		</view>
		<view class="form re">
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);"/>
			</view>
			<view class="btn" @click="doReg">立即注册</view>
			<view class="res">
				<view @click="pageTo('/pages/login/index')">已有账号立即登录</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:"",
				code:'',
				passwd:"",
				getCodeText:'获取验证码',
				getCodeBtnColor:"#ffffff",
				getCodeisWaiting:false
			}
		},
		onLoad() {

		},
		methods: {
			Timer(){},
			getCode(){
				uni.hideKeyboard()
				if(this.getCodeisWaiting){
					return ;
				}
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(255,255,255,0.5)"
				//示例用定时器模拟请求效果
				setTimeout(()=>{
					uni.showToast({title: '验证码已发送',icon:"none"});
					this.setTimer();
				},1000)
			},
			setTimer(){
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(()=>{
					if(holdTime<=0){
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ffffff";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return ;
					}
					this.getCodeText = "重新获取("+holdTime+")"
					holdTime--;
				},1000)
			},
			doReg(){
				uni.hideKeyboard()
				//模板示例部分验证规则
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				//请求服务器
				uni.showToast({title: '注册成功',icon:"success"});
				setTimeout(()=>{
					this.$pageTo('/pages/login/index')
				},1500)
			},
			pageTo(url){ 
				this.$pageTo(url,2)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../css/login.scss";
</style>

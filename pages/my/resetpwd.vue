<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					原密码
				</view>
				<view class="input">
					<input placeholder="请输入旧密码" type="password" v-model="form.oldpwd" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					新密码
				</view>
				<view class="input">
					<input placeholder="请输入新密码" type="password" v-model="form.newpwd" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					确认密码
				</view>
				<view class="input">
					<input placeholder="请确认密码" type="password" v-model="form.repwd" />
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				修改
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{oldpwd:"",newpwd:"",repwd:""},
			};
		},
		onLoad(e) {},
		methods: {
			save(){
				if(!this.form.oldpwd){
					uni.showToast({title:'请输入旧密码',icon:'none'});
					return ;
				}
				if(!this.form.newpwd){
					uni.showToast({title:'请输入新密码',icon:'none'});
					return ;
				}
				if(!this.form.repwd){
					uni.showToast({title:'请输入确认密码',icon:'none'});
					return ;
				}
				if(this.form.repwd != this.form.newpwd){
					uni.showToast({title:'两次密码不一致',icon:'none'});
					return ;
				}
				uni.showLoading({
					title:'正在提交'
				})
				//实际应用中请提交ajax,模板定时器模拟提交效果
				setTimeout(function(){
					uni.showToast({title:'修改成功',icon:'success'});
				},1000)
			}
		},
	};
</script>
<style lang="scss">

.save{
		view{
			display: flex;
		}
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.btn{
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.4);
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			background-color: #f06c7a;
			color: #fff;
			justify-content: center;
			align-items: center;
			.icon{
				height: 80upx;
				color: #fff;
				font-size: 30upx;
				justify-content: center;
				align-items: center;
			}
			font-size: 30upx;
		}
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		view{
			display: flex;
		}
		.row{
			width: 94%;
			
			margin: 0 3%;
			border-top: solid 1upx #eee;
			.nominal{
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}
			.input{
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;
				&.switch{
					justify-content: flex-end;
				}
				.textarea{
					margin: 20upx 0;
					min-height: 120upx;
				}
			}
			.del{
				width: 100%;
				height: 100upx;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #f06c7a;
				background-color: rgba(255,0,0,0.05);
				border-bottom: solid 1upx #eee;
			}
		}
	}
	
</style>

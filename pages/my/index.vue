<template>
	<view>
		<view class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="addr"></view>
			<view class="input-box">
				
			</view>
			<view class="icon-btn">
				<view class="icon tongzhi" @tap="pageTo('/pages/chat/chatlist')"></view>
				<view class="icon setting" @tap="pageTo('/pages/my/setting')"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 用户信息 -->
		<view class="user"  v-if="token">
			<!-- 头像 -->
			<view class="left">
				<image :src="userinfo.head_img" @tap="pageTo('/pages/my/setting')"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right" @tap="pageTo('/pages/my/setting')">
				<view class="username">{{userinfo.nickname}}</view>
				<view class="signature">{{userinfo.username}}</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="erweima" @tap="pageTo('/pages/my/myQR')">
				<view class="icon qr"></view>
			</view>
		</view>
		<view class="user" v-else>
			<!-- 头像 -->
			<view class="left">
				<image src="/static/logo.png" @tap="pageTo('/pages/login/index')"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right" @tap="pageTo('/pages/login/index')">
				<view class="username">游客</view>
				<view class="signature">个性签名</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="erweima" @tap="pageTo('/pages/login/index')">
				<view class="icon qr"></view>
			</view>
		</view>
		<!-- VIP banner -->
		<view class="VIP">
			<view class="img">
				<image src="/static/user/VIP.png"></image>
			</view>
			<view class="title">开通VIP会员</view>
			<view class="tis">会员特权</view>
		</view>
		<!-- 订单-余额 -->
		<view class="order">
			<!-- 订单类型 -->
			<view class="list">
				<view class="box" v-for="(row,index) in orderList" :key="index" @tap="pageTo(row.url)">
					<view class="img">
						<view class="icon" :class="row.icon"></view>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
			<!-- 余额 -->
			<view class="balance-info">
				<view class="left">
					<view class="box">
						<view class="num">{{userinfo.score||'0.00'}}</view>
						<view class="text">积分</view>
					</view>
					<view class="box">
						<view class="num">{{userinfo.score||'0.00'}}</view>
						<view class="text">佣金</view>
					</view>
					<view class="box">
						<view class="num">{{userinfo.money||'0.00'}}</view>
						<view class="text">余额</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @tap="pageTo('/pages/my/deposit')">
						<view class="img">
							<view class="icon chongzhi"></view>
						</view>
						<view class="text">充值</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="title">我的工具栏</view>
			<view class="list">
				<view class="box" v-for="(row,index) in mytoolbarList" :key="index" @tap="pageTo(row.url)">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place-bottom"></view>
	</view>
</template>
<script>
	import {userIndex} from "@/api/user"
	export default {
		data() {
			return {
				isfirst:true,
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				// 订单类型
				orderList:[
					{text:'待付款',icon:"fukuan",url:'/pages/order/orderlist?tbIndex=1'},
					{text:'待发货',icon:"fahuo",url:'/pages/order/orderlist?tbIndex=2'},
					{text:'待收货',icon:"shouhuo",url:'/pages/order/orderlist?tbIndex=3'},
					{text:'待评价',icon:"pingjia",url:'/pages/order/orderlist?tbIndex=4'},
					{text:'已完成',icon:"tuihuo",url:'/pages/order/orderlist?tbIndex=5'}
				],
				// 工具栏列表
				mytoolbarList:[
					{url:'/pages/my/keep',text:'我的收藏',img:'/static/icon/point.png'},
					{url:'/pages/my/coupon',text:'优惠券',img:'/static/icon/quan.png'}, 
					{url:'/pages/address/address',text:'收货地址',img:'/static/icon/addr.png'},
					{url:'/pages/my/resetpwd',text:'账户安全',img:'/static/icon/security.png'},
					// {url:'',text:'新客豪礼',img:'/static/icon/renw.png'},
					// {url:'',text:'领红包',img:'/static/icon/momey.png'},
					// {url:'',text:'银行卡',img:'/static/icon/bank.png'},
					// {url:'',text:'抽奖',img:'/static/icon/choujiang.png'},
					// {text:'客服',img:'/static/icon/kefu.png'},
					// {text:'签到',img:'/static/icon/mingxi.png'}
				]
			}
		},
		computed: {
			token() {
				return this.$store.state.token
			},
			userinfo(){
				return this.$store.state.userInfo
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onLoad() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			console.log(this.statusHeight)
			// #endif
		},
		onReady(){},
		onShow(){
			//获取用户信息
			if (this.token) {
				this.getUserinfo()
			}
		},
		methods: {
			getUserinfo(){
				userIndex().then(data =>{
					this.$store.commit('setUserInfo', data)
				})
			},
			pageTo(url,type,data){
				this.$pageTo(url,type,data)
			}
		}
	} 
</script>
<style lang="scss">
	page{position: relative;background-color: #fff;}
	
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #f06c7a;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.icon-btn{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.place{
		background-color: #f06c7a;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.place-bottom{
		height: 300upx;
	}
	.user{
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background-color: #f06c7a;
		padding-bottom: 120upx;
		.left{
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			
		}
		.right{
			width: 100%;
			.username{
				font-size: 36upx;
				color: #fff;
			}
			.signature{
				color: #eee;
				font-size: 28upx;
			}
		}
		.erweima{
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
		
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
			.icon{
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
	.order{
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.list{
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;
			.box{
				width: 20%;
				.img{
					width: 100%;
					display: flex;
					justify-content: center;
					.icon{
						font-size: 50upx;
						color: #464646;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}
		.balance-info{
			display: flex;
			padding: 10upx 0;
			.left{
				width: 75%;
				display: flex;
				.box{
					width: 50%;
					font-size: 28upx;
					
					.num{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #f9a453;
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}
			.right{
				border-left: solid 1upx #17e6a1;
				width: 25%;
				.box{
					
					.img{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						.icon{
							font-size: 45upx;
							color: #e78901;
						}
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: #3d3d3d;
					}
				}
			}
		}
	}
	.VIP{
		width: 84%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #dea96d 0%,#f6d59b 100%);
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;
		.img{
			flex-shrink: 0;
			width: 60upx;
			height: 60upx;
			image{
				width: 60upx;
				height: 60upx;
			}
		}
		.title{
			width: 100%;
			color: #796335;
			font-size: 30upx;
		}
		.tis{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
	}
	.toolbar{
		width: 92%;
		margin: 0 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.title{
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			.box{
				width: 25%;
				margin-bottom: 30upx;
				.img{
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;
					
					image{
						width: 9vw;
						height: 9vw;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}
</style>
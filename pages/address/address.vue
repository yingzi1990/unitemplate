<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" v-for="(row,index) in addressList" :key="index" @tap="select(row)">
					<view class="left">
						<view class="head">
							{{row.head}}
						</view>
					</view>
					<view class="center">
						<view class="name-tel">
							<view class="name">{{row.name}}</view>
							<view class="tel">{{row.tel}}</view>
							<view class="default" v-if="row.isDefault">
								默认
							</view>
						</view>
						<view class="address">
							{{row.province}}-{{row.city}}-{{row.area}} {{row.address}}
						</view>
					</view>
					<view class="right">
						<view class="icon bianji" @tap.stop="edit('/pages/address/edit?type=edit',row)">
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add">
			<view class="btn" @tap="pageTo('/pages/address/edit?type=add',2)">
				<view class="icon tianjia"></view>新增地址
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isSelect:false,//是否返回选中页
				source:'',
				addressList:[
					{id:1,name:"大黑哥",head:"大",tel:"18816881688",province:"广东省",city:"深圳市",area:"福田区",address:"深北小道2222号有名公寓502",isDefault:true},
					{id:2,name:"大黑哥",head:"大",tel:"15812341234",province:"广东省",city:"深圳市",area:"福田区",address:"深北小道2222号有名公寓502",isDefault:false},
					{id:3,name:"老大哥",head:"老",tel:"18155467897",province:"广东省",city:"深圳市",area:"福田区",address:"深北小道2222号有名公寓502",isDefault:false},
					{id:4,name:"王小妹",head:"王",tel:"13425654895",province:"广东省",city:"深圳市",area:"福田区",address:"深北小道2222号有名公寓502",isDefault:false},
				]
			};
		},
		onShow() {},
		onLoad(e) {
			if(e.type=='select'){
				this.isSelect = true;
				this.source = e.source
			}
		},
		methods:{
			select(row){
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if(!this.isSelect){
					return ;
				}
				this.$pageTo(this.source,2);
			},
			edit(url,data){
				let that = this
				uni.setStorage({
					key:'editaddress',
					data:data,
					success() {
						that.$pageTo(url,2)
					}
				});
			},
			pageTo(url,type,data){
				this.$pageTo(url,type,data)
			}
		}
	}
</script>

<style lang="scss">
view{
	display: flex;
}
	.icon {
		&.bianji {
			&:before{content:"\e61b";}
		}
		&.tianjia {
			&:before{content:"\e81a";}
		}
	}
	.add{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
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
	.list{
		flex-wrap: wrap;
		.row{
			width: 96%;
			padding: 20upx 2%;
			.left{
				width: 90upx;
				flex-shrink: 0;
				align-items: center;
				.head{
					width: 70upx;
					height: 70upx;
					background:linear-gradient(to right,#ccc,#aaa);
					color: #fff;
					justify-content: center;
					align-items: center;
					border-radius: 60upx;
					font-size: 35upx;
				}
			}
			.center{
				width: 100%;
				flex-wrap: wrap;
				.name-tel{
					width: 100%;
					align-items: baseline;
					.name{
						font-size: 34upx;
					}
					.tel{
						margin-left: 30upx;
						font-size: 24upx;
						color: #777;
					}
					.default{

						font-size: 22upx;
						
						background-color: #f06c7a;
						color: #fff;
						padding: 0 18upx;
						border-radius: 24upx;
						margin-left: 20upx;
					}
				}
				.address{
					width: 100%;
					font-size: 24upx;
					align-items: baseline;
					color: #777;
				}
			}
			.right{
				flex-shrink: 0;
				align-items: center;
				margin-left: 20upx;
				.icon{
					justify-content: center;
					align-items: center;
					width: 80upx;
					height: 60upx;
					border-left: solid 1upx #aaa;
					font-size: 40upx;
					color: #777;
				}
			}
		}
	}
</style>
